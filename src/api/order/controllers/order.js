"use strict";

/**
 * order controller
 **/

const { createCoreController } = require("@strapi/strapi").factories;
const { bulkPriceVariants } = require("../../utils/BulkPricing");
const { generateTransactionId } = require("../../utils/GenerateTxnId");
const {
  commission,
  createActivity,
  generateOrderUid,
} = require("../../utils/Helpers");

const {
  payment_methods,
  order_status,
  txn_purpose,
  activity_status,
} = require("../../../../config/constants");
const Razorpay = require("razorpay");
const { tz_types, tz_reasons } = require("../../utils/WalletConstants");
const { fcmNotify } = require("../../utils/fcmNotify");

const { getPagination } = require("../../utils/Pagination");

var longTime;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  //admin delete Orders
  delete: async (ctx, next) => {
    try {
      console.log("Into Order Deletion");
      const order = await strapi.db.query("api::order.order").findOne({
        where: { id: ctx.request.params.id },
        populate: {
          order_products: true,
          wallet: true,
          payment_log: true,
        },
      });

      console.log(order);
      if (order === null) {
        return ctx.send({ message: "Order with the given id not found" }, 400);
      }

      if (order.order_products.length > 0) {
        const orderProductsId = [];
        for (const prod of order.order_products) {
          const deleteOrderProducts = await strapi.db
            .query("api::order-product.order-product")
            .delete({ where: { id: prod.id } });
        }
      }

      if (order.wallet !== null) {
        const deleteWallet = await strapi.db
          .query("api::wallet.wallet")
          .deleteMany({ where: { order: order.id } });
      }

      if (order.payment_log.length > 0) {
        const deletePaymentLog = await strapi.db
          .query("api::payment-log.payment-log")
          .deleteMany({ where: { order: order.id } });
      }

      const deleteTxn = await strapi.db
        .query("api::transaction.transaction")
        .deleteMany({ where: { remark: order.id } });

      const deleteOrder = await strapi.db.query("api::order.order").delete({
        where: { id: ctx.request.params.id },
      });
      return ctx.send(deleteOrder, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  getOrders: async (ctx, next) => {
    var userInfo;

    try {
      if (
        ctx.request &&
        ctx.request.header &&
        ctx.request.header.authorization
      ) {
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        userInfo = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              id: id,
            },
            populate: {
              orders: true,
            },
          });
      }

      return userInfo;
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  createMultipleOrders: async (ctx, next) => {
    console.log("Inside Checkout");
    var userInfo;
    var order;
    var orderProduct;
    var consumer = ctx.request.body.consumer;
    var products = ctx.request.body.products;
    var payment_mode = ctx.request.body.consumer.payment_mode;
    var plan = ctx.request.plan;
    var user_id;
    var userAdmin;

    try {
      let arrayOfProds = ctx.request.arrayOfProds;
      var orderProducts = [];
      var totalCost = 0;

      //finding all the products
      //from the body
      if (
        ctx.request &&
        ctx.request.header &&
        ctx.request.header.authorization
      ) {
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        userInfo = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              id: id,
            },
          });
        if (userInfo.isAdmin) {
          user_id = ctx.request.body.user_id;
          userAdmin = await strapi
            .query("plugin::users-permissions.user")
            .findOne({ where: { id: user_id } });
        } else {
          user_id = userInfo.id;
        }
      }
      let { totalAmount, variantPrice } = await bulkPriceVariants(
        plan,
        userInfo,
        arrayOfProds
      );
      // console.log(totalAmount);

      // console.log(userInfo);
      var globalVar = await strapi.entityService.findMany("api::global.global");
      let productVariantPrice;

      if (userInfo.blocked === true) {
        ctx.send({
          message: "This User has been blocked by the admin",
        });
        return (ctx.response.status = 400);
      }

      //Create OrderProducts
      // console.log(products);
      for (const [i, orderPro] of arrayOfProds.entries()) {
        let prod = await strapi.db
          .query("api::order-product.order-product")
          .create({
            data: {
              quantity: parseInt(products[i].quantity),
              order_price: Object.values(variantPrice)[i],
              product_variant: orderPro.id,
              sellingPrice: consumer.isResellerOrder
                ? products[i].sellingPrice
                : null,
              status: order_status.new,
              // sellingPrice: isResellerOrder == true ? sellingPrice : null,
            },
          });
        // console.log(prod);
        orderProducts.push(prod);
      }

      // console.log(totalCost);
      if (payment_mode === "COD") {
        if (plan === null) {
          totalAmount =
            parseFloat(globalVar.codPrepaidAmount) +
            parseFloat(globalVar.shippingPrice);
          totalAmount = commission(totalAmount);
        }

        if (plan) {
          if (plan.codAllowed === true) {
            if (plan.codPrice === null || plan.codPrice === 0) {
              totalAmount =
                parseFloat(globalVar.codPrepaidAmount) +
                parseFloat(globalVar.shippingPrice);
              totalAmount = commission(totalAmount);
            } else {
              totalAmount =
                parseFloat(plan.codPrice) + parseFloat(globalVar.shippingPrice);
              totalAmount = commission(totalAmount);
            }
          } else {
            return ctx.send(
              { message: `COD is not allowed in ${plan.name} plan` },
              400
            );
          }
        }
      }

      if (payment_mode === "COD") {
        if (plan === null) {
          totalAmount =
            parseFloat(globalVar.codPrepaidAmount) +
            parseFloat(globalVar.shippingPrice);
          totalAmount = commission(totalAmount);
        }

        if (plan) {
          if (plan.codAllowed === true) {
            if (plan.codPrice === null || plan.codPrice === 0) {
              totalAmount =
                parseFloat(globalVar.codPrepaidAmount) +
                parseFloat(globalVar.shippingPrice);
              totalAmount = commission(totalAmount);
            } else {
              totalAmount =
                parseFloat(plan.codPrice) + parseFloat(globalVar.shippingPrice);
              totalAmount = commission(totalAmount);
            }
          } else {
            return ctx.send(
              { message: `COD is not allowed in ${plan.name} plan` },
              400
            );
          }
        }
      }

      if (payment_mode === "PREPAID") {
        if (plan === null) {
          totalAmount += parseFloat(globalVar.shippingPrice);
          totalAmount = commission(totalAmount);
        }
        if (plan) {
          if (plan.prepaidAllowed === true) {
            totalAmount += parseFloat(globalVar.shippingPrice);
            totalAmount = commission(totalAmount);
          } else {
            return ctx.send(
              { message: `Prepaid is not allowed in ${plan.name} plan` },
              400
            );
          }
        }
      }
      //RazorPay TXN
      if (payment_mode === "WALLET") {
        const jwt = ctx.request.headers.authorization.slice(
          7,
          ctx.request.headers.authorization.length
        );
        // console.log(totalAmount);
        // console.log(userInfo.wallet_balance);
        if (userInfo.isAdmin) {
          if (parseFloat(userAdmin.wallet_balance) < parseFloat(totalAmount)) {
            return ctx.send({
              message: `Your Wallet doesn't have enough coins to proceed with this transaction. [Wallet Balance: ${userAdmin.wallet_balance}]`,
            });
          }
        } else {
          if (parseFloat(userInfo.wallet_balance) < parseFloat(totalAmount)) {
            return ctx.send({
              message: `Your Wallet doesn't have enough coins to proceed with this transaction. [Wallet Balance: ${userInfo.wallet_balance}]`,
            });
          }
        }
        longTime = "order_" + new Date().getTime();

        order = await strapi.entityService.create("api::order.order", {
          data: {
            slug: generateOrderUid(),
            order_products: [...orderProducts],
            address: consumer.addressID,
            status: order_status.new,
            consumerName: consumer.conName || null,
            consumerPhone: consumer.conPhone || null,
            consumerEmail: consumer.conEmail || null,
            isResellerOrder: consumer.isResellerOrder,
            payment_mode: consumer.payment_mode,
            users_permissions_user: user_id,
          },
        });

        let order_data = await strapi.db.query("api::order.order").findOne({
          where: { id: order.id },
          populate: {
            order_products: {
              populate: {
                product_variant: {
                  populate: {
                    product: {
                      populate: {
                        thumbnail: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
        totalAmount += parseFloat(globalVar.shippingPrice);

        const wallet = await strapi.db.query("api::wallet.wallet").create({
          data: {
            transaction_type: tz_types.credit,
            amount: totalAmount,
            reasons: tz_reasons.purchase,
            users_permissions_user: userInfo.id,
            order: order.id,
          },
        });
        const wallet_pay = await strapi.db
          .query("plugin::users-permissions.user")
          .update({
            data: {
              wallet_balance: userInfo.wallet_balance - totalAmount,
            },
            where: { id: userInfo.id },
          });

        //create activity
        let activity_data = {
          event: activity_status.order_placed,
          user: userInfo.id,
          description: `Order #${order.slug} Placed for the User: ${userInfo.name} ID: ${userInfo.id} -- Amount: ${totalAmount} -- Mode: Wallet`,
        };

        const activity = createActivity(activity_data, strapi);
        console.log(products);
        const fcmData = {
          title: "Order Placed",
          body: `Your Order has been placed successfully`,
          image:
            order_data.order_products[0].product_variant.product.thumbnail.id,
          description: `Your Order for ${order.id} has been placed successfully`,
          type: "ORDER",
          data: `${order.id}`,
          users_permissions_user: user_id,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          userInfo.fcmToken,
          jwt,
          notification.id
        );
        //entry on txn table
        const txn_id = await generateTransactionId();
        const txnTable = await strapi.db
          .query("api::transaction.transaction")
          .create({
            data: {
              purpose: txn_purpose.purchase,
              user: userInfo.id,
              txn_type: tz_types.credit,
              txn_id: txn_id,
              remark: order.id,
              mode: "WALLET",
              amount: totalAmount,
            },
          });

        for (const [i, prod] of products.entries()) {
          const entryOrderProducts = await strapi.db
            .query("api::order-product.order-product")
            .update({
              where: { id: orderProducts[i].id },
              data: {
                status: order_status.new,
              },
            });
          const updateVariantQuantity = await strapi.db
            .query("api::product-variant.product-variant")
            .update({
              data: {
                quantity:
                  parseInt(arrayOfProds[i].org_qty) -
                  parseInt(products[i].quantity),
              },
              where: {
                id: products[i].product_variant_id,
              },
            });
        }
        return ctx.send({ status: true, message: "Payment Done" }, 200);
      }

      var key_id = globalVar.razorpayKey;
      var key_secret = globalVar.razorpaySecret;

      var instance = await new Razorpay({
        key_id: key_id,
        key_secret: key_secret,
      });

      console.log(totalAmount);
      var razorpayInfo = await instance.orders.create({
        amount: parseInt(totalAmount) * 100,
        currency: "INR",
      });

      if (razorpayInfo.status == "created") {
        //TXN IS STARTED
        //Create Order
        longTime = "order_" + new Date().getTime();

        const order_data = await strapi.entityService.create(
          "api::order.order",
          {
            data: {
              slug: longTime,
              order_products: [...orderProducts],
              address: consumer.addressID,
              status: order_status.new,
              consumerName: consumer.conName,
              consumerPhone: consumer.conPhone,
              consumerEmail: consumer.conEmail,
              isResellerOrder: consumer.isResellerOrder,
              payment_mode: consumer.payment_mode,
              users_permissions_user: user_id,
              rzpayOrderId: razorpayInfo.id,
            },
          }
        );

        // razorpayInfo = Object.assign({ order_slug: order.slug }, razorpayInfo);
        return razorpayInfo;
      }
      return ctx.send(
        {
          message: razorpayInfo.error.description,
        },
        400
      );
      // console.log(fcm)
      // return (ctx.response.status = 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  verifyPaymentOrder: async (ctx, next) => {
    const crypto = require("crypto");

    var products = [];

    var globalVar = await strapi.entityService.findMany("api::global.global");
    var totalAmount = 0;

    try {
      var { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        ctx.request.body;

      var userInfo;
      var order_id = ctx.request.body.order_id;
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const jwt = ctx.request.headers.authorization.slice(
        7,
        ctx.request.headers.authorization.length
      );

      let order = await strapi.db.query("api::order.order").findOne({
        where: { rzpayOrderId: razorpay_order_id },
        populate: {
          address: true,
          users_permissions_user: true,
          order_products: {
            quantity: true,
            populate: {
              product_variant: {
                populate: {
                  product: {
                    populate: {
                      thumbnail: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      userInfo = await strapi.query("plugin::users-permissions.user").findOne({
        where: {
          id: order.users_permissions_user.id,
        },
      });
      // return order;
      console.log(order);
      var secret = globalVar.razorpaySecret;
      var key = globalVar.razorpayKey;

      var generated_signature = crypto
        .createHmac("sha256", secret)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

      if (generated_signature === razorpay_signature) {
        // console.log("Payment Verified");
        var instance = new Razorpay({
          key_id: key,
          key_secret: secret,
        });

        const rzOrder = await instance.orders.fetch(razorpay_order_id);

        const entry = await strapi.db.query("api::order.order").update({
          where: { id: order.id },
          data: {
            isPaid: true,
            paymentID: razorpay_payment_id.toString(),
            paymentSignature: razorpay_signature.toString(),
          },
        });

        for (const [i, prod] of order.order_products.entries()) {
          const entryOrderProducts = await strapi.db
            .query("api::order-product.order-product")
            .update({
              where: { id: order.order_products[i].id },
              data: {
                status: order_status.new,
              },
            });

          const updateVariantQuantity = await strapi.db
            .query("api::product-variant.product-variant")
            .update({
              data: {
                quantity:
                  parseInt(order.order_products[i].product_variant.quantity) -
                  parseInt(entryOrderProducts.quantity),
              },
              where: {
                id: order.order_products[i].product_variant.id,
              },
            });
          products.push(order.order_products[i].product_variant.name);
        }

        //create entry in txn table
        const txn_id = await generateTransactionId();
        const txnTable = await strapi.db
          .query("api::transaction.transaction")
          .create({
            data: {
              purpose: txn_purpose.purchase,
              user: id,
              txn_type: tz_types.credit,
              txn_id: txn_id,
              remark: order.id,
              mode: "MONEY",
              amount: rzOrder.amount / 100,
            },
          });

        let ordersCount =
          userInfo.ordersCount === null
            ? 1
            : parseInt(userInfo.ordersCount) + 1;
        const updateUser = await strapi
          .query("plugin::users-permissions.user")
          .update({
            where: { id: order.users_permissions_user.id },
            data: {
              ordersCount: ordersCount,
            },
          });
        //create activity
        let activity_data = {
          event: activity_status.order_placed,
          user: userInfo.id,
          description: `Order #${order.slug} Placed for the User: ${
            userInfo.name
          } ID: ${userInfo.id} -- Amount: ${rzOrder.amount / 100} -- Mode: ${
            order.payment_mode
          }`,
        };

        const activity = createActivity(activity_data, strapi);

        const fcmData = {
          title: "Order Placed",
          body: `Your Order has been placed successfully`,
          image: order.order_products[0].product_variant.product.thumbnail.id,
          description: `Your Order for ${products} has been placed successfully`,
          type: "ORDER",
          data: `${order.id}`,
          users_permissions_user: order.users_permissions_user.id,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          userInfo.fcmToken,
          jwt,
          notification.id
        );

        return ctx.send({ message: "Signature Verified" }, 200);
      } else {
        return ctx.send({ message: "Payment Failure" }, 400);
      }
    } catch (err) {
      console.log(err);
      // console.log("i am here");
      return ctx.send(err, 400);
    }
  },

  acceptOrder: async (ctx, next) => {
    var totalAmount = 0;

    var products = [];

    try {
      const order_id = ctx.request.body.order_id;

      if (order_id === null || order_id === undefined) {
        return "order_id key is required!!";
      }

      var globalVar = await strapi.entityService.findMany("api::global.global");
      const orderDetails = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { id: order_id },
          populate: {
            product_variant: {
              populate: {
                product: {
                  populate: {
                    thumbnail: true,
                  },
                },
              },
            },
            order: {
              address: true,
              users_permissions_user: true,
            },
          },
        });

      if (orderDetails === null) {
        return ctx.send({ message: "No Order Products" }, 400);
      }

      totalAmount += parseFloat(orderDetails.order_price);
      totalAmount += parseFloat(globalVar.shippingPrice);

      const date = new Date(); // Get the current date
      const dateString = date.toDateString();
      const [dayOfWeek, month, day, year] = dateString.split(" ");

      const formattedDateString = `${day} ${month}, ${year}`;

      const order = await strapi.db
        .query("api::order-product.order-product")
        .update({
          where: { id: order_id },
          data: {
            status: "ACCEPTED",
          },
        });

      if (order === null) {
        return (
          (ctx.response.status = 204),
          { message: "Order not found with the given order_id" }
        );
      } else {
        //create activity
        let activity_data = {
          event: activity_status.order_accepted,
          user: orderDetails.order.users_permissions_user.id,
          description: `Order #${orderDetails.order.slug} Accepted By the Seller`,
        };

        const activity = createActivity(activity_data, strapi);

        // let acceptMail = await mailTemplate.mailServer(data);
        ctx.send({ message: "Order Accepted Successfully" });
      }
    } catch (err) {
      console.log(err);
      // ctx.send(order);
      return ctx.send(err, 400);
      // return err;
    }
  },

  rejectOrder: async (ctx, next) => {
    try {
      const order_id = ctx.request.body.order_id;
      let products = [];

      var totalAmount = 0;
      if (order_id === null || order_id === undefined) {
        return "order_id key is required!!";
      }

      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: id } });

      var globalVar = await strapi.entityService.findMany("api::global.global");
      const order = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { id: order_id },
          populate: {
            product_variant: {
              populate: {
                product: {
                  populate: {
                    thumbnail: true,
                  },
                },
              },
            },
            order: {
              address: true,
            },
          },
        });
      if (order.order.payment_mode === "PREPAID") {
        // for (let i = 0; i < order.order_products.length; i++) {
        totalAmount += parseFloat(order.order_price);
        // }
        totalAmount += globalVar.shippingPrice;
      } else {
        totalAmount += globalVar.codPrepaidAmount;
      }

      const date = new Date(); // Get the current date
      const dateString = date.toDateString();
      const [dayOfWeek, month, day, year] = dateString.split(" ");

      const formattedDateString = `${day} ${month}, ${year}`;

      if (
        order.status === order_status.new ||
        order.status === order_status.processing
      ) {
        //add the refund money to the users wallet
        const addRefundtoWallet = await strapi
          .query("plugin::users-permissions.user")
          .update({
            where: { id: id },
            data: {
              wallet_balance:
                (userInfo.wallet_balance || 0) + parseFloat(totalAmount),
            },
          });

        const updatedOrder = await strapi.db
          .query("api::order-product.order-product")
          .update({
            where: { id: order_id },
            data: {
              status: "DECLINED",
            },
          });

        const wallet = await strapi.db.query("api::wallet.wallet").create({
          data: {
            amount: totalAmount,
            transaction_type: tz_types.debit,
            reasons: tz_reasons.payout_sent,
            users_permissions_user: userInfo.id,
            order: order.order.id,
          },
        });

        const txn_id = await generateTransactionId();
        const txnTable = await strapi.db
          .query("api::transaction.transaction")
          .create({
            data: {
              purpose: txn_purpose.refund,
              user: id,
              txn_type: tz_types.debit,
              txn_id: txn_id,
              remark: order.order.id,
              mode: "WALLET",
              amount: totalAmount,
            },
          });
        let activity_data = {
          event: activity_status.order_declined,
          user: id,
          description: `Order #${order.order.slug} Rejected By the Seller`,
        };

        const activity = createActivity(activity_data, strapi);

        return ctx.send({ message: "Order Declined!!" }, 201);
      } else {
        return { message: "Order Already Rejected!!" };
      }
    } catch (err) {
      console.log(err);
      return err.code;
    }
  },

  getOrdersByStatus: async (ctx, next) => {
    try {
      const tag = ctx.request.query.tag;
      console.log(tag);
      const pagination = ctx.request.query.pagination;

      var orders;
      var meta;

      if (tag) {
        if (!Object.keys(order_status).includes(tag.toLowerCase())) {
          return ctx.send({
            message: `Only [${Object.keys(order_status)}] tags are allowed`,
          });
        }
      }

      if (pagination) {
        console.log(pagination);
        if (Object.keys(pagination).length > 0) {
          const { offset, limit } = getPagination(
            pagination.page,
            pagination.size
          );
          if (tag === undefined || tag.length === 0) {
            orders = await strapi.db
              .query("api::order-product.order-product")
              .findWithCount({
                where: { status: order_status.new },
                orderBy: { id: "DESC" },
                limit,
                offset,
                populate: {
                  product_variant: {
                    populate: {
                      product: {
                        populate: {
                          thumbnail: true,
                        },
                      },
                    },
                  },
                  order: {
                    populate: {
                      address: { populate: true },
                      users_permissions_user: {
                        populate: true,
                      },
                    },
                  },
                },
              });
            meta = {
              pagination: {
                page:
                  parseInt(pagination.page) < 1 ? 1 : parseInt(pagination.page),
                pageSize: parseInt(pagination.size),
                pageCount: Math.ceil(orders[1] / parseInt(pagination.size)),
                total: orders[1],
              },
            };
            let orderObj = {};
            orderObj["data"] = orders[0];
            orderObj[`new`] = orders[1];
            return ctx.send({ data: orderObj.data, meta }, 200);
          }
          orders = await strapi.db
            .query("api::order-product.order-product")
            .findWithCount({
              where: { status: tag.toUpperCase() || order_status.new },
              orderBy: { id: "DESC" },
              limit,
              offset,
              populate: {
                product_variant: {
                  populate: {
                    product: {
                      populate: {
                        thumbnail: true,
                      },
                    },
                  },
                },
                order: {
                  populate: {
                    address: { populate: true },
                    users_permissions_user: {
                      populate: true,
                    },
                  },
                },
              },
            });
          meta = {
            pagination: {
              page:
                parseInt(pagination.page) < 1 ? 1 : parseInt(pagination.page),
              pageSize: parseInt(pagination.size),
              pageCount: Math.ceil(orders[1] / parseInt(pagination.size)),
              total: orders[1],
            },
          };
          let orderObj = {};
          orderObj["data"] = orders[0];
          orderObj[`${tag}`] = orders[1];
          return ctx.send({ data: orderObj.data, meta }, 200);
        }
      }
      if (tag === undefined || tag.length === 0) {
        orders = await strapi.db
          .query("api::order-product.order-product")
          .findWithCount({
            where: { status: order_status.new },
            orderBy: { id: "DESC" },
            limit: 25,
            offset,
            populate: {
              product_variant: {
                populate: {
                  product: {
                    populate: {
                      thumbnail: true,
                    },
                  },
                },
              },
              order: {
                populate: {
                  address: { populate: true },
                  users_permissions_user: {
                    populate: true,
                  },
                },
              },
            },
          });
        meta = {
          pagination: {
            page: 0,
            pageSize: 25,
            pageCount: Math.ceil(orders[1]),
            total: orders[1],
          },
        };
        let orderObj = {};
        orderObj["data"] = orders[0];
        orderObj[`new`] = orders[1];
        return ctx.send({ data: orderObj.data, meta }, 200);
      }
      orders = await strapi.db
        .query("api::order-product.order-product")
        .findWithCount({
          where: { status: tag.toUpperCase() || order_status.new },
          orderBy: { id: "DESC" },
          populate: {
            product_variant: {
              populate: {
                product: {
                  populate: {
                    thumbnail: true,
                  },
                },
              },
            },
            order: {
              populate: {
                address: { populate: true },
                users_permissions_user: {
                  populate: true,
                },
              },
            },
          },
        });
      meta = {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: Math.ceil(orders[1]),
          total: orders[1],
        },
      };
      let orderObj = {};
      orderObj["data"] = orders[0];
      orderObj[`${tag}`] = orders[1];
      return ctx.send({ data: orderObj.data, meta }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  payoutReseller: async (ctx, next) => {
    try {
      const order_id = ctx.request.body.order_product_id;
      const order_prod = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { id: order_id },
          populate: {
            order: {
              populate: { users_permissions_user: true },
            },
          },
        });
      console.log(order_prod);
      if (order_prod.status !== order_status.delivered) {
        return ctx.send({ message: "Order is not yet delivered" }, 400);
      }
      if (order_prod.status === order_status.payout_done) {
        return ctx.send({ message: "Payout has been already completed" }, 400);
      }

      if (order_prod.is_cod_paid === false) {
        return ctx.send({ message: "Order is not a COD order" }, 400);
      }
      const payoutAmt =
        parseFloat(order_prod.sellingPrice) -
        parseFloat(order_prod.order_price);
      const payout = await strapi
        .query("plugin::users-permissions.user")
        .update({
          data: {
            wallet_balance:
              parseFloat(
                order_prod.order.users_permissions_user.wallet_balance
              ) + parseFloat(payoutAmt),
          },
          where: { id: order_prod.order.users_permissions_user.id },
        });

      const updateOrderProd = await strapi.db
        .query("api::order-product.order-product")
        .update({
          where: {
            id: order_id,
          },
          data: {
            status: order_status.payout_done,
          },
        });

      let activity_data = {
        event: activity_status.order_placed,
        user: userInfo.id,
        description: `Payout of amount ₹${payoutAmt} done for Reseller: ${order_prod.order.users_permissions_user.name}`,
      };

      const activity = createActivity(activity_data, strapi);

      return ctx.send(payout, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  ordersDashboard: async (ctx, next) => {
    try {
      const totalOrders = await strapi.db
        .query("api::order-product.order-product")
        .count();
      const newOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.new } });
      const declinedOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.declined } });
      const acceptedOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.accepted } });
      const processingOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.processing } });
      const intransitOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.intransit } });
      const out_for_deliveryOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.out_for_delivery } });
      const deliveredOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.delivered } });
      const completedOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.completed } });
      const rtoOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.rto } });
      const return_requestOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.return_request } });
      const return_acceptedOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.return_accepted } });
      const return_declinedOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.return_declined } });
      const return_receivedOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.return_received } });
      const return_pendingOrders = await strapi.db
        .query("api::order-product.order-product")
        .count({ where: { status: order_status.return_pending } });

      return ctx.send(
        {
          total: totalOrders,
          new: newOrders,
          accepted: acceptedOrders,
          declined: declinedOrders,
          processing: processingOrders,
          intransit: intransitOrders,
          out_for_delivery: out_for_deliveryOrders,
          delivered: deliveredOrders,
          completed: completedOrders,
          rto: rtoOrders,
          return_request: return_requestOrders,
          return_received: return_receivedOrders,
          return_pending: return_pendingOrders,
          return_declined: return_declinedOrders,
          return_accepted: return_acceptedOrders,
        },
        200
      );
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  getTime: async (ctx, next) => {
    try {
      console.log("Send next get Orders Status");
      console.log("Send next get Orders Status");
      const body = ctx.request.body;
      return ctx.send({ message: "Success Message" }, 400);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  searchInOrders: async (ctx, next) => {
    var key = ctx.request.query.key;
    const getOrders = async (offset, limit) => {
      const orderList = await strapi.db
        .query("api::order-product.order-product")
        .findWithCount({
          where: {
            $or: [
              {
                status: {
                  // $startsWith: key,
                  $containsi: key,
                },
              },
              {
                product_variant: {
                  product: {
                    name: {
                      $containsi: key,
                    },
                  },
                },
              },
              {
                order: {
                  $or: [
                    {
                      slug: {
                        $containsi: key,
                      },
                    },
                    {
                      payment_mode: {
                        $containsi: key,
                      },
                    },
                    {
                      consumerName: {
                        $containsi: key,
                      },
                    },
                    {
                      consumerPhone: {
                        $containsi: key,
                      },
                    },
                  ],
                },
              },
            ],
          },
          limit,
          offset,
          populate: {
            order: {
              populate: {
                users_permissions_user: {
                  populate: true,
                },
              },
            },
            product_variant: {
              populate: { product: { populate: { thumbnail: true } } },
            },
          },
        });
      return orderList;
    };

    try {
      var key = ctx.request.query.key;
      var pagination = ctx.request.query.pagination;
      var orders;
      var allOrders;
      var meta;

      allOrders = await getOrders(null, null);
      if (pagination) {
        console.log("Inside Pagination");
        if (Object.keys(pagination).length > 0) {
          console.log("Pagination");
          const { offset, limit } = getPagination(
            pagination.page,
            pagination.size
          );
          allOrders = await getOrders(offset, limit);
          meta = {
            pagination: {
              page:
                parseInt(pagination.page) < 1 ? 1 : parseInt(pagination.page),
              pageSize: parseInt(pagination.size),
              pageCount: Math.ceil(allOrders[1] / parseInt(pagination.size)),
              total: allOrders[1],
            },
          };
        }
      } else {
        console.log("Pagination not provided");
        allOrders = await getOrders(null, null);
        meta = {
          pagination: {
            page: 1,
            pageSize: allOrders[1],
            pageCount: 1,
            total: allOrders[1],
          },
        };
      }
      return ctx.send({ data: allOrders[0], meta }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  setOrderStatusDelivered: async (ctx, next) => {
    try {
      const order_id = ctx.request.params.id;

      const orderProduct = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { id: order_id },
          populate: {
            order: {
              populate: {
                users_permissions_user: true,
              },
            },
          },
        });
      if (!orderProduct) {
        return ctx.send({ message: `Invalid Order ID ${order_id}` }, 400);
      }

      if (orderProduct.order.isResellerOrder === false) {
        return ctx.send({ message: `Order must be a Reseller Order` }, 400);
      }

      if (orderProduct.status === order_status.delivered) {
        return ctx.send(
          { message: `Order ${order_id} has been already delivered` },
          400
        );
      }
      const updateOrder = await strapi.db
        .query("api::order-product.order-product")
        .update({
          where: {
            id: order_id,
          },
          data: { status: order_status.delivered },
        });

      if (updateOrder) {
        let profit =
          orderProduct.order.users_permissions_user.profit === null
            ? parseFloat(orderProduct.sellingPrice) -
              parseFloat(orderProduct.order_price)
            : parseFloat(orderProduct.order.users_permissions_user.profit) +
              (parseFloat(orderProduct.sellingPrice) -
                parseFloat(orderProduct.order_price));

        const updateReseller = await strapi
          .query("plugin::users-permissions.user")
          .update({
            where: { id: orderProduct.order.users_permissions_user.id },
            data: {
              profit: profit,
            },
          });

        //create activity
        let activity_data = {
          event: activity_status.order_delivered,
          user: orderProduct.order.users_permissions_user.id,
          description: `Order #${order.slug} has been delivered`,
        };

        const activity = createActivity(activity_data, strapi);

        return ctx.send(
          { message: `Order ${order_id} has been updated successfully` },
          200
        );
      }
      return ctx.send({ message: `Unable to update Order ${order_id}` }, 400);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  getOrdersByDate: async (ctx, next) => {
    try {
      const date_from = ctx.request.query.date.from;
      const date_to = ctx.request.query.date.to;
      const pagination = ctx.request.query.pagination;
      var getOrders;
      var meta;

      const orders = async (offset, limit) => {
        const ordersList = await strapi.db
          .query("api::order-product.order-product")
          .findWithCount({
            where: {
              $and: [
                { createdAt: { $gt: date_from } },
                { createdAt: { $lt: date_to } },
              ],
            },
            limit,
            offset,
            populate: {
              order: {
                populate: {
                  users_permissions_user: true,
                },
              },
              product_variant: {
                populate: {
                  product: { populate: { thumbnail: true } },
                },
              },
            },
          });
        return ordersList;
      };
      if (pagination) {
        if (Object.keys(pagination).length > 0) {
          const { offset, limit } = getPagination(
            pagination.page,
            pagination.size
          );

          getOrders = await orders(offset, limit);
          meta = {
            pagination: {
              page:
                parseInt(pagination.page) < 1 ? 1 : parseInt(pagination.page),
              pageSize: parseInt(pagination.size),
              pageCount: Math.ceil(getOrders[1] / parseInt(pagination.size)),
              total: getOrders[1],
            },
          };
        }
      } else {
        getOrders = await orders(null, null);
        meta = {
          pagination: {
            page: 1,
            pageSize: getOrders[1],
            pageCount: 1,
            total: getOrders[1],
          },
        };
      }

      return ctx.send({ data: getOrders[0], meta }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
