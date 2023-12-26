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
  shippingPriceCalculation,
} = require("../../utils/Helpers");

const {
  payment_methods,
  order_status,
  txn_purpose,
  activity_status,
  notify_type,
  payment_gateways,
  phonepe_status,
  shipping_options,
} = require("../../../../config/constants");
const Razorpay = require("razorpay");
const { tz_types, tz_reasons } = require("../../utils/WalletConstants");
const { fcmNotify } = require("../../utils/fcmNotify");
const axios = require("axios");

const { userMetrics } = require("../../utils/userMetrics");
const { productMetrics } = require("../../utils/productMetrics");
const razorpayService = require("../../custom/services/razorpay");
const crypto = require("crypto");
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

  selectedOrders: async (ctx, next) => {
    try {
      const order_variants = ctx.request.params.ids;
      let variants_arr = order_variants.split("_");
      const ids = variants_arr.filter((n) => n).join("_");

      if (/_/.test(order_variants) === false) {
        return ctx.send(
          { message: `IDs with only underscores is allowed` },
          400
        );
      }
      const variants = await strapi.db
        .query("api::order-product.order-product")
        .findMany({
          where: { id: { $in: variants_arr } },
          populate: {
            order: true,
            product_variant: {
              populate: { product: { populate: { thumbnail: true } } },
            },
          },
        });

      // Check which ids in array are missi9ng in variants
      const compareObjIds = variants_arr.map((id) => parseInt(id, 10));

      // Find IDs in compareObj that don't exist in obj
      const missingIds = compareObjIds.filter(
        (id) => !variants.some((item) => item.id === id)
      );

      if (missingIds.length === 0) {
        return ctx.send(variants, 200);
      }
      return ctx.send(
        { message: `No Order found with the given IDs: ${missingIds}` },
        400
      );
      // variants_arr
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
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
      let totalResellerMargin = 0;

      var payment_gateway = ctx.request.payment_gateway;
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
        arrayOfProds,
        consumer
      );

      var globalVar = ctx.request.global_var;

      let productVariantPrice;

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
              note: products[i].note || null,
              // sellingPrice: isResellerOrder == true ? sellingPrice : null,
            },
          });
        totalResellerMargin += consumer.isResellerOrder
          ? products[i].sellingPrice
          : 0;
        //calculate shipping price
        //if shippingPrice_type === price, then simply add the price
        //if percentage, then add the percentage price from the productVariant price and sum up the totalAmount
        // if (globalVar.shippingPrice_type === "PRICE") {
        //   console.log("Inside PRICE");
        //   totalAmount += orderPro.product.shipping_price
        //     ? orderPro.product.shipping_price
        //     : 0;
        // } else {
        //   let shipping_price_per = globalVar.shippingPrice;
        //   let shipping_price = shippingPriceCalculation(
        //     Object.values(variantPrice)[i],
        //     shipping_price_per
        //   );

        //   totalAmount += shipping_price;
        // }
        if (orderPro.product.shipping === shipping_options.shipping_price) {
          totalAmount += orderPro.product.shipping_price || 0;
        } else if (
          orderPro.product.shipping === shipping_options.shipping_percentage
        ) {
          let shipping_price = shippingPriceCalculation(
            Object.values(variantPrice)[i],
            orderPro.product.shipping_price || 0
          );
          totalAmount += shipping_price;
        } else {
          totalAmount += 0;
        }
        orderProducts.push(prod);
      }
      // console.log(totalAmount);
      totalAmount = parseFloat(totalAmount.toFixed(2));
      // if (
      //   globalVar.codPrepaidAmount == 0 ||
      //   globalVar.codPrepaidAmount === null
      // )

      if (payment_mode === "COD") {
        if (plan === null) {
          //check if product has any shipping Price
          //if yes, use that
          //else use global shippingPrice
          totalAmount = 0;
          totalAmount += parseFloat(globalVar.codPrepaidAmount);
          // totalAmount = commission(totalAmount);
        }

        if (plan) {
          if (plan.name === "Free") {
            if (plan.codAllowed === true) {
              totalAmount = 0;
              totalAmount += parseFloat(globalVar.codPrepaidAmount);
              // totalAmount = commission(totalAmount);
            } else {
              return ctx.send(
                { message: `COD is not allowed in ${plan.name} plan` },
                400
              );
            }
          } else {
            if (plan.codAllowed === true) {
              totalAmount = 0;
              totalAmount += parseFloat(globalVar.codPrepaidAmount);
              // totalAmount = commission(totalAmount);
              // if (plan.price === null || plan.price === 0) {
              // } else {
              //   console.log("inside plan and price");
              //   totalAmount =
              //     parseFloat(plan.price) + parseFloat(globalVar.shippingPrice);
              //   totalAmount = commission(totalAmount);
              //   console.log(totalAmount);
              // }
            } else {
              return ctx.send(
                { message: `COD is not allowed in ${plan.name} plan` },
                400
              );
            }
          }
        }

        if (totalAmount == 0) {
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
          // totalAmount += parseFloat(globalVar.shippingPrice);

          //update order
          const entry_update = await strapi.db
            .query("api::order.order")
            .update({
              where: { id: order.id },
              data: {
                isPaid: true,
              },
            });

          let metricProductData = {
            // id: userInfo.id,
            field: "ordered_count",
            products_variants: arrayOfProds,
          };
          const prod_metrics = await productMetrics(strapi, metricProductData);
          //create activity
          let metricProductData2 = {
            // id: userInfo.id,
            field: "revenue_generated",
            ordered_products: orderProducts,
          };
          const prod_metrics_revenue = await productMetrics(
            strapi,
            metricProductData2
          );
          let metricProductData3 = {
            // id: userInfo.id,
            field: "premium_plan_orders",
            products_variants: order_data.order_products,
          };
          const prod_metrics_revenue2 = await productMetrics(
            strapi,
            metricProductData3
          );
          let activity_data = {
            event: activity_status.order_placed,
            user: userInfo.id,
            description: `Order #${order.slug} Placed for the User: ${userInfo.name} ID: ${userInfo.id} -- Amount: ${totalAmount} -- Mode: MONEY`,
          };

          const activity = createActivity(activity_data, strapi);
          const fcmData = {
            title: "Order Placed",
            body: `Your Order has been placed successfully`,
            image:
              order_data.order_products[0].product_variant.product.thumbnail.id,
            description: `Your Order for ${order.id} has been placed successfully`,
            type: notify_type.order,
            data: `${order.id}`,
            users_permissions_user: user_id,
            targetType: "token",
            targetValue: userInfo.fcmToken,
          };
          //create notification entry
          const notification = await strapi.db
            .query("api::notification.notification")
            .create({ data: fcmData });
          const sendNotification = await fcmNotify(
            fcmData,
            userInfo.fcmToken,
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
                mode: "MONEY",
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
          const response_obj = {
            id: "",
            entity: "order",
            amount: 0,
            amount_paid: 0,
            amount_due: 0,
            currency: "INR",
            receipt: null,
            offer_id: null,
            status: "created",
            attempts: 0,
            notes: [],
            created_at: 1668842252,
          };
          return ctx.send(response_obj, 200);
        }
      }

      console.log(totalAmount);
      if (payment_mode === "PREPAID") {
        if (plan === null) {
          // totalAmount += parseFloat(globalVar.shippingPrice || 0);
          // totalAmount = commission(totalAmount);
        }
        if (plan) {
          if (plan.prepaidAllowed === true) {
            // totalAmount += parseFloat(globalVar.shippingPrice);
            // totalAmount = commission(totalAmount);
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
        // console.log(totalAmount);
        // console.log(userInfo.wallet_balance);
        if (userInfo.isAdmin) {
          if (parseFloat(userAdmin.wallet_balance) < parseFloat(totalAmount)) {
            return ctx.send(
              {
                message: `Your Wallet doesn't have enough coins to proceed with this transaction. [Wallet Balance: ${userAdmin.wallet_balance}]`,
              },
              400
            );
          }
        } else {
          if (parseFloat(userInfo.wallet_balance) < parseFloat(totalAmount)) {
            return ctx.send(
              {
                message: `Your Wallet doesn't have enough coins to proceed with this transaction. [Wallet Balance: ${userInfo.wallet_balance}]`,
              },
              400
            );
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
        // totalAmount += parseFloat(globalVar.shippingPrice);

        //update order
        const entry_update = await strapi.db.query("api::order.order").update({
          where: { id: order.id },
          data: {
            isPaid: true,
          },
        });

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

        //create metric data
        let metricData = {
          id: userInfo.id,
          field: "wallet_orders",
        };
        //
        const user_metrics = await userMetrics(strapi, metricData);

        let metricProductData = {
          // id: userInfo.id,
          field: "ordered_count",
          products_variants: arrayOfProds,
        };
        const prod_metrics = await productMetrics(strapi, metricProductData);
        //create activity
        let metricProductData2 = {
          // id: userInfo.id,
          field: "revenue_generated",
          ordered_products: orderProducts,
        };
        const prod_metrics_revenue = await productMetrics(
          strapi,
          metricProductData2
        );
        let metricProductData3 = {
          // id: userInfo.id,
          field: "premium_plan_orders",
          products_variants: order_data.order_products,
        };
        const prod_metrics_revenue2 = await productMetrics(
          strapi,
          metricProductData3
        );
        let activity_data = {
          event: activity_status.order_placed,
          user: userInfo.id,
          description: `Order #${order.slug} Placed for the User: ${userInfo.name} ID: ${userInfo.id} -- Amount: ${totalAmount} -- Mode: Wallet`,
        };

        const activity = createActivity(activity_data, strapi);
        const fcmData = {
          title: "Order Placed",
          body: `Your Order has been placed successfully`,
          image:
            order_data.order_products[0].product_variant.product.thumbnail.id,
          description: `Your Order for ${order.id} has been placed successfully`,
          type: notify_type.order,
          data: `${order.id}`,
          users_permissions_user: user_id,
          targetType: "token",
          targetValue: userInfo.fcmToken,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          userInfo.fcmToken,
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

      switch (payment_gateway) {
        // case payment_gateways.razorpay:
        //   //generate key and order

        //   var key_id = globalVar.razorpayKey;
        //   var key_secret = globalVar.razorpaySecret;
        //   var razorpayInfo = await razorpayService.createOrder(
        //     key_id,
        //     key_secret,
        //     totalAmount
        //   );

        //   if (razorpayInfo.status == "created") {
        //     //TXN IS STARTED
        //     //Create Order
        //     longTime = "order_" + new Date().getTime();

        //     const order_data = await strapi.entityService.create(
        //       "api::order.order",
        //       {
        //         data: {
        //           slug: generateOrderUid(),
        //           order_products: [...orderProducts],
        //           address: consumer.addressID,
        //           status: order_status.new,
        //           consumerName: consumer.conName || null,
        //           consumerPhone: consumer.conPhone || null,
        //           consumerEmail: consumer.conEmail || null,
        //           isResellerOrder: consumer.isResellerOrder,
        //           payment_mode: consumer.payment_mode,
        //           users_permissions_user: user_id,
        //           rzpayOrderId: razorpayInfo.id || null,
        //           payment_gateway: payment_gateways.razorpay,
        //         },
        //       }
        //     );

        //     // razorpayInfo = Object.assign({ order_slug: order.slug }, razorpayInfo);
        //     return ctx.send(razorpayInfo, 200);
        //   }
        //   break;
        case payment_gateways.razorpay:
          //generate key and order
          const order_body = {
            totalAmount: totalAmount,
            payment_mode,
            payout_required:
              consumer.isResellerOrder === true &&
              consumer.payment_mode === payment_methods.cod
                ? true
                : false,
            totalResellerMargin: Math.abs(totalResellerMargin - totalAmount),
            razorpay_env: process.env.ENVIRONMENT,
            // order_id:
          };

          const personalID = await strapi
            .query("plugin::users-permissions.user")
            .findOne({
              where: { role: { name: "Admin" } },
              select: ["personal_id"],
            });
          // const personalID = ctx.request.headers["x-verify"];
          if (!personalID.personal_id) {
            return ctx.send(
              { message: "No VerifyID passed in the header" },
              400
            );
          }
          console.log(personalID.personal_id);
          let send_razorpay_request;
          try {
            send_razorpay_request = await axios.post(
              `${process.env.RZP_WRAPPER_URL}/orders/razorpay`,
              order_body,
              {
                headers: {
                  "X-VERIFY": personalID.personal_id,
                },
              }
            );

            // console.log(send_razorpay_request.data);
            if (send_razorpay_request.data.status === "created") {
              const order_data = await strapi.entityService.create(
                "api::order.order",
                {
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
                    rzpayOrderId: send_razorpay_request.data.id,
                    payment_gateway: payment_gateways.razorpay,
                  },
                }
              );
              return ctx.send(send_razorpay_request.data, 200);
            }
          } catch (err) {
            console.log(err.response);
            return ctx.send(err.data, err.status);
          }

          break;

        case payment_gateways.cashfree:
          console.log("iNSIDE CASHFREE SWITCH CASE");
          let cashfree_id = globalVar.cashfree_client_id;
          let cashfree_secret = globalVar.cashfree_client_secret;
          //generate order
          const customer = {
            email: ctx.request.body.consumer.conEmail,
            phone: ctx.request.body.consumer.conPhone,
          };

          const cashfreeInfo = await cashfreeService(
            customer,
            cashfree_id,
            cashfree_secret,
            totalAmount
          );

          console.log("cashfreeInfo");
          console.log(cashfreeInfo);
          const order_data = await strapi.entityService.create(
            "api::order.order",
            {
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
                rzpayOrderId: cashfreeInfo.order_id,
              },
            }
          );
          const cashfree_obj = {
            id: cashfreeInfo.order_id,
            session_id: cashfreeInfo.payment_session_id,
            amount: cashfreeInfo.order_amount,
          };
          return ctx.send(cashfree_obj, 200);
          break;

        case payment_gateways.phonepe:
          console.log("Inside PhonePE Gateway");
          const merchantKey = globalVar.phonepe_merchant_key;
          const payment_instrument_type =
            ctx.request.body.payment_instrument_type;
          const payment_instrument_target =
            ctx.request.body.payment_instrument_target;

          // const merchantKey = "de745dfb-1545-43cf-8285-0086f2a4636f";

          totalAmount = parseFloat(totalAmount.toFixed(2)) * 100;
          console.log(totalAmount);
          const data = {
            // merchantId: "VEGANONLINE",
            merchantId: globalVar.phonepe_merchant_id,
            merchantTransactionId: `MT${new Date().getTime()}`, //auto-generate
            merchantUserId: `MUIDADMIN`, //auto-generate
            amount: totalAmount,
            redirectUrl: "https://example.com",
            redirectMode: "REDIRECT",
            callbackUrl: "https://api.hangs.in/api/orders/phonepe/callback",
            mobileNumber: userInfo.phone
              ? userInfo.phone.slice(-10)
              : "6295612299",
            paymentInstrument: {
              type: payment_instrument_type,
              targetApp: payment_instrument_target,
            },
            deviceContext: {
              deviceOS: "ANDROID",
            },

            // paymentInstrument: {
            //   type: "PAY_PAGE",
            // },
          };

          // Convert the Payload to JSON and encode as Base64
          const payloadMain = Buffer.from(JSON.stringify(data)).toString(
            "base64"
          );

          const payload = `${payloadMain}/pg/v1/pay${merchantKey}`;
          const checksum =
            crypto.createHash("sha256").update(payload, "utf8").digest("hex") +
            `###${globalVar.phonepe_key_index}`;

          // console.log(checksum);

          const axiosConfig = {
            method: "POST",
            // url: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
            // url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
            url: "https://mercury-uat.phonepe.com/pg/v1/pay",
            headers: {
              "Content-Type": "application/json",
              "X-VERIFY": checksum,
              accept: "application/json",
            },
            data: {
              request: payloadMain,
            },
          };

          console.log(checksum);
          try {
            const responseData = await axios(axiosConfig);
            //create order
            const order_data = await strapi.entityService.create(
              "api::order.order",
              {
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
                  rzpayOrderId: responseData.data.data.merchantTransactionId,
                  payment_gateway: payment_gateways.phonepe,
                },
              }
            );

            let responseDataJSON = {
              merchantId: globalVar.phonepe_merchant_id,
              merchantTransactionId: `MT${new Date().getTime()}`, //auto-generate
              merchantUserId: `MUIDADMIN`, //auto-generate
              amount: totalAmount,
              callbackUrl: "https://api.hangs.in/api/orders/phonepe/callback",
              mobileNumber: userInfo.phone
                ? userInfo.phone.slice(-10)
                : "6295612299",
              paymentInstrument: {
                type: payment_instrument_type,
                targetApp: payment_instrument_target,
              },
              deviceContext: {
                deviceOS: "ANDROID",
              },
            };

            let bufferResponse = Buffer.from(
              JSON.stringify(responseDataJSON)
            ).toString("base64");
            const checksumResponse =
              crypto
                .createHash("sha256")
                .update(
                  bufferResponse + "/pg/v1/pay" + globalVar.phonepe_merchant_id,
                  "utf8"
                )
                .digest("hex") + `###${globalVar.phonepe_key_index}`;
            return ctx.send(
              {
                base64: bufferResponse,
                checksum: checksumResponse,
                apiEndPoint: "/pg/v1/pay",
              },
              200
            );
          } catch (error) {
            console.log(error);
            return ctx.send(error, 500);
          }
        default:
          break;
      }

      return ctx.send(
        {
          message: "Unable to Process Order",
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
    console.log("Verify Payment Order");
    var products = [];
    var productVar = [];

    try {
      var { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        ctx.request.body;

      var userInfo;
      var order_id = ctx.request.body.order_id;
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

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

      let verify_callback;

      try {
        verify_callback = await axios.post(
          `${process.env.RZP_WRAPPER_URL}/orders/razorpay/verify`,
          { order_id: order.id, razorpay_env: process.env.ENVIRONMENT },
          {
            headers: {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
          }
        );
      } catch (err) {
        console.log(err.response);
        return ctx.send(err.response, 400);
      }

      const rzOrder = verify_callback.data;

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
        productVar.push(order.order_products[i].product_variant);
      }

      //create metrics
      let metricData = {
        id: order.users_permissions_user.id,
        field:
          order.payment_mode === payment_methods.cod
            ? "cod_orders"
            : "prepaid_orders",
      };

      const user_metrics = await userMetrics(strapi, metricData);

      //product metrics
      let metricProductData = {
        // id: userInfo.id,
        field: "ordered_count",
        products_variants: productVar,
      };
      const prod_metrics = await productMetrics(strapi, metricProductData);
      //create activity
      let metricProductData2 = {
        // id: userInfo.id,
        field: "revenue_generated",
        ordered_products: order.order_products,
      };
      const prod_metrics_revenue = await productMetrics(
        strapi,
        metricProductData2
      );
      let metricProductData3 = {
        // id: userInfo.id,
        field: "premium_plan_orders",
        products_variants: order.order_products,
      };
      const prod_metrics_revenue2 = await productMetrics(
        strapi,
        metricProductData3
      );
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
        userInfo.ordersCount === null ? 1 : parseInt(userInfo.ordersCount) + 1;
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
      console.log(products);
      const fcmData = {
        title: "Order Placed",
        body: `Your Order has been placed successfully`,
        image: order.order_products[0].product_variant.product.thumbnail.id,
        description: `Your Order for ${products} has been placed successfully`,
        type: notify_type.order,
        data: `${order.id}`,
        users_permissions_user: order.users_permissions_user.id,
        targetType: "token",
        targetValue: userInfo.fcmToken,
      };
      //create notification entry
      const notification = await strapi.db
        .query("api::notification.notification")
        .create({ data: fcmData });
      const sendNotification = await fcmNotify(
        fcmData,
        userInfo.fcmToken,
        notification.id
      );
      return ctx.send({ message: "Signature Verified" }, 200);
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
              populate: {
                address: true,
                users_permissions_user: true,
              },
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

        const fcmData = {
          title: "✅Order Accepted",
          body: `Your Order for ${orderDetails.product_variant.product.name} ${orderDetails.product_variant.name} has been Accepted!!`,
          image: orderDetails.product_variant.product.thumbnail.id,
          description: `Your Order for ${orderDetails.product_variant.name} has been acceped successfully`,
          type: notify_type.order,
          data: `${orderDetails.id}`,
          users_permissions_user: orderDetails.order.users_permissions_user.id,
          targetType: "token",
          targetValue: orderDetails.order.users_permissions_user.fcmToken,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          orderDetails.order.users_permissions_user.fcmToken,
          notification.id
        );
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
              populate: {
                address: true,
                users_permissions_user: true,
              },
            },
          },
        });
      if (
        order.order.payment_mode === payment_methods.prepaid ||
        order.order.payment_mode === payment_methods.wallet
      ) {
        // for (let i = 0; i < order.order_products.length; i++) {
        totalAmount = parseFloat(order.order_price);
        // }
        totalAmount += globalVar.shippingPrice;
      } else {
        totalAmount += globalVar.codPrepaidAmount;
      }

      console.log(totalAmount);
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
            where: { id: order.order.users_permissions_user.id },
            data: {
              wallet_balance:
                (order.order.users_permissions_user.wallet_balance || 0) +
                parseFloat(totalAmount),
            },
          });

        const updatedOrder = await strapi.db
          .query("api::order-product.order-product")
          .update({
            where: { id: order_id },
            data: {
              status: order_status.declined,
            },
          });

        const wallet = await strapi.db.query("api::wallet.wallet").create({
          data: {
            amount: totalAmount,
            transaction_type: tz_types.debit,
            reasons: tz_reasons.payout_sent,
            users_permissions_user: order.order.users_permissions_user.id,
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

        //send notification
        const fcmData = {
          title: "❌Order Rejected",
          body: `Your Order for ${order.product_variant.product.name} ${order.product_variant.name} has been Rejected`,
          image: order.product_variant.product.thumbnail.id,
          description: `Your Order for ${order.product_variant.name} has been rejected`,
          type: notify_type.order,
          data: `${order.id}`,
          users_permissions_user: order.order.users_permissions_user.id,
          targetType: "token",
          targetValue: order.order.users_permissions_user.fcmToken,
        };
        //create notification entry
        const fcmData2 = {
          title: `🪙Wallet Refund Processed`,
          body: `Your Wallet has been debited with ₹${totalAmount} for ${order.product_variant.product.name}`,
          image: order.product_variant.product.thumbnail.id,
          description: `Your Wallet has been debited with ₹${totalAmount} for ${order.product_variant.product.name}`,
          type: notify_type.transaction,
          data: `${order.id}`,
          users_permissions_user: order.order.users_permissions_user.id,
          targetType: "token",
          targetValue: order.order.users_permissions_user.fcmToken,
        };
        //create notification entry

        const notification1 = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const notification2 = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData2 });

        const sendNotification = await fcmNotify(
          fcmData,
          order.order.users_permissions_user.fcmToken,
          notification1.id
        );
        const sendNotificationWallet = await fcmNotify(
          fcmData2,
          order.order.users_permissions_user.fcmToken,
          notification2.id
        );

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
      let tag_store = ctx.request.query.store;

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

      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      const getOrders = async (offset, limit, tag) => {
        if (tag === undefined || tag === null || tag === "all") {
          tag = { status: { $in: Object.values(order_status) } };
        } else {
          tag = { status: tag.toUpperCase() };
        }
        const listOrders = await strapi.db
          .query("api::order-product.order-product")
          .findWithCount({
            where: {
              $and: [
                tag,
                {
                  order: {
                    $and: [
                      { id: { $not: null } },
                      !tag_store
                        ? { isPaid: true }
                        : { users_permissions_user: { id: id } },
                      { isPaid: true },
                    ],
                  },
                },
              ],
            },
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
                  address: true,
                  users_permissions_user: { populate: { avatar: true } },
                },
              },
            },
          });

        return listOrders;
      };

      console.log(tag_store);
      if (pagination) {
        console.log(pagination);
        if (Object.keys(pagination).length > 0) {
          const { offset, limit } = getPagination(
            pagination.page,
            pagination.size
          );

          orders = await getOrders(offset, limit, tag);

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
      orders = await getOrders(null, null, tag);
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
            product_variant: {
              populate: { product: { populate: { thumbnail: true } } },
            },
            order: {
              populate: { users_permissions_user: true },
            },
          },
        });
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      console.log(order_prod.order.users_permissions_user.id);
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
        event: activity_status.reseller_payout,
        user: order_prod.order.users_permissions_user.id,
        description: `Payout of amount ₹${payoutAmt} done for Reseller: ${order_prod.order.users_permissions_user.name}`,
      };

      const activity = createActivity(activity_data, strapi);
      const txn_id = await generateTransactionId();
      const txnTable = await strapi.db
        .query("api::transaction.transaction")
        .create({
          data: {
            purpose: txn_purpose.added_to_wallet,
            user: id,
            txn_type: tz_types.debit,
            txn_id: txn_id,
            remark: order_id,
            mode: "WALLET",
            amount: payoutAmt,
          },
        });
      const fcmData = {
        title: "Payout Completed",
        body: `Your Payout of ₹${payoutAmt} for Order: ${order_prod.order.slug} has been processed successfully`,
        image: order_prod.product_variant.product.thumbnail.id,
        description: `Your Payout of ₹${payoutAmt} for Order: ${order_prod.order.slug} has been processed successfully`,
        type: notify_type.order,
        data: `${order_prod.id}`,
        users_permissions_user: order_prod.order.users_permissions_user.id,
        targetType: "token",
        targetValue: order_prod.order.users_permissions_user.fcmToken,
      };
      //create notification entry
      const notification = await strapi.db
        .query("api::notification.notification")
        .create({ data: fcmData });
      const sendNotification = await fcmNotify(
        fcmData,
        order_prod.order.users_permissions_user.fcmToken,
        notification.id
      );

      return ctx.send(payout, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  ordersDashboard: async (ctx, next) => {
    try {
      const result = await strapi.db.connection
        .raw(`SELECT op.status, COUNT(*) as count
FROM public.order_products op
JOIN public.order_products_order_links opl ON op.id = opl.order_product_id
JOIN public.orders o ON opl.order_id = o.id
WHERE o.is_paid = true
GROUP BY op.status;`);

      let obj3 = {};
      let order_statuses = Object.values(order_status);
      let allCount = 0;

      for (const status of order_statuses) {
        const match = result.rows.find((item) => item.status === status);
        obj3[status.toLowerCase()] = match ? parseInt(match.count) : 0;
        allCount += match ? parseInt(match.count) : 0;
      }

      obj3["total"] = allCount;
      delete obj3.all;

      return ctx.send(obj3, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
  ordersDashboardReseller: async (ctx, next) => {
    try {
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const result = await strapi.db.connection
        .raw(`SELECT op.status, COUNT(*) as count
FROM public.order_products op
JOIN public.order_products_order_links opl ON op.id = opl.order_product_id
JOIN public.orders o ON opl.order_id = o.id
JOIN public.orders_users_permissions_user_links ou ON o.id = ou.order_id
JOIN public.up_users u ON ou.user_id = u.id
WHERE o.is_paid = true AND ou.user_id=${id}
GROUP BY op.status;
`);

      let obj3 = {};
      let order_statuses = Object.values(order_status);
      let allCount = 0;

      for (const status of order_statuses) {
        const match = result.rows.find((item) => item.status === status);
        obj3[status.toLowerCase()] = match ? parseInt(match.count) : 0;
        allCount += match ? parseInt(match.count) : 0;
      }

      obj3["total"] = allCount;
      delete obj3.all;

      return ctx.send(obj3, 200);
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
                users_permissions_user: true,
              },
            },
          },
        });
      if (!orderProduct) {
        return ctx.send({ message: `Invalid Order ID ${order_id}` }, 400);
      }

      // if (orderProduct.order.isResellerOrder === false) {
      //   return ctx.send({ message: `Order must be a Reseller Order` }, 400);
      // }

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
        if (updateOrder.isResellerOrder) {
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
        }

        //create activity
        let activity_data = {
          event: activity_status.order_delivered,
          user: orderProduct.order.users_permissions_user.id,
          description: `Order #${orderProduct.order.slug} with Product ${orderProduct.product_variant.name} has been delivered`,
        };

        const activity = createActivity(activity_data, strapi);

        const fcmData = {
          title: "Order Delivered",
          body: `Your Order has been Delivered Successfully`,
          image: orderProduct.product_variant.product.thumbnail.id,
          description: `Your Order for ${orderProduct.product_variant.name} has been Delivered`,
          type: notify_type.order,
          data: `${orderProduct.id}`,
          users_permissions_user: orderProduct.order.users_permissions_user.id,
          targetType: "token",
          targetValue: orderProduct.order.users_permissions_user.fcmToken,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          orderProduct.order.users_permissions_user.fcmToken,
          notification.id
        );
        return ctx.send(
          { message: `Order ${order_id} has been Delivered successfully` },
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

  phonepeCallbackCapture: async (ctx, next) => {
    try {
      console.log("From localhost 3400 Callback");
      const encodedResponse = ctx.request.body;

      if (Object.keys(ctx.request.body).length > 0) {
        const decodedBuffer = Buffer.from(encodedResponse.response, "base64");

        // Convert the Buffer to a string (assuming it's JSON)
        const decodedString = decodedBuffer.toString("utf-8");

        // Parse the JSON string into a JavaScript object
        const decodedResponse = JSON.parse(decodedString);

        var products = [];
        var productVar = [];

        if (decodedResponse.code === phonepe_status.payment_success) {
          let order = await strapi.db.query("api::order.order").findOne({
            where: { rzpayOrderId: decodedResponse.data.merchantTransactionId },
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

          const userInfo = order.users_permissions_user;
          const entry = await strapi.db.query("api::order.order").update({
            where: { id: order.id },
            data: {
              isPaid: true,
              paymentID: decodedResponse.data.transactionId,
            },
          });
          //update order and order_products
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
            productVar.push(order.order_products[i].product_variant);
          }

          let metricData = {
            id: order.users_permissions_user.id,
            field:
              order.payment_mode === payment_methods.cod
                ? "cod_orders"
                : "prepaid_orders",
          };
          const user_metrics = await userMetrics(strapi, metricData);

          //product metrics
          let metricProductData = {
            // id: userInfo.id,
            field: "ordered_count",
            products_variants: productVar,
          };
          const prod_metrics = await productMetrics(strapi, metricProductData);
          //create activity
          let metricProductData2 = {
            // id: userInfo.id,
            field: "revenue_generated",
            ordered_products: order.order_products,
          };
          const prod_metrics_revenue = await productMetrics(
            strapi,
            metricProductData2
          );
          let metricProductData3 = {
            // id: userInfo.id,
            field: "premium_plan_orders",
            products_variants: order.order_products,
          };
          const prod_metrics_revenue2 = await productMetrics(
            strapi,
            metricProductData3
          );
          //create entry in txn table
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
                mode: "MONEY",
                amount: decodedResponse.data.amount / 100,
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
            } ID: ${userInfo.id} -- Amount: ${
              decodedResponse.data.amount / 100
            } -- Mode: ${order.payment_mode}`,
          };

          const activity = createActivity(activity_data, strapi);

          const fcmData = {
            title: "Order Placed",
            body: `Your Order has been placed successfully`,
            image: order.order_products[0].product_variant.product.thumbnail.id,
            description: `Your Order for ${products} has been placed succesEsfully`,
            type: notify_type.order,
            data: `${order.id}`,
            users_permissions_user: order.users_permissions_user.id,
            targetType: "token",
            targetValue: userInfo.fcmToken,
          };
          //create notification entry
          const notification = await strapi.db
            .query("api::notification.notification")
            .create({ data: fcmData });
          const sendNotification = await fcmNotify(
            fcmData,
            userInfo.fcmToken,
            notification.id
          );
          // console.log(decodedResponse);
          return ctx.send(decodedResponse, 200);
        } else {
          return ctx.send({ message: `Payment Failed due to some issue` }, 500);
        }
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  returnRequestOrder: async (ctx, next) => {
    try {
      const order_id = ctx.request.params.id;
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      //check if order is available
      const order = await strapi.db
        .query("api::order-product.order-product")
        .findOne({ where: { id: order_id } });

      if (!order) {
        return ctx.send({ message: "No Order Found with the given ID" }, 204);
      }

      const global = await strapi.db.query("api::global.global").findOne();

      if (global.return_request === false) {
        return ctx.send(
          {
            message:
              "Return Request is not available right now. Please contact the Admin",
          },
          400
        );
      }
      //check if order is delivered
      //check if order doent exceeds the return days

      if (order.status === order_status.delivered) {
        let now = new Date();
        let deliveredDate = new Date(order.updatedAt);

        let return_request_date = new Date(
          new Date(order.updatedAt).setDate(
            new Date(order.updatedAt).getDate() + global.return_request_days
          )
        );

        if (deliveredDate < return_request_date) {
          const createReturnOrder = await strapi.db
            .query("api::return-order.return-order")
            .create({
              data: {
                order_product: order.id,
                note: ctx.request.body.note || null,
                media: ctx.request.body.media || null,
                user: id,
              },
            });
          //change status to return request
          const update_order_product = await strapi.db
            .query("api::order-product.order-product")
            .update({
              where: { id: order_id },
              data: { status: order_status.return_request },
            });

          if (update_order_product) {
            return ctx.send(
              {
                message: `Return Request for OrderID: ${order_id} sent to Admin`,
              },
              200
            );
          }
          // order_product["return_request"] = true;
        } else {
          return ctx.send({
            message: `Return Request validity of ${global.return_request_days} days has been expired`,
          });
        }
      } else {
        return ctx.send(
          { message: "Order must be Delivered in order to Return" },
          400
        );
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  acceptReturnRequests: async (ctx, next) => {
    try {
      const order_id = ctx.request.params.id;

      //check if order is available
      const order = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { id: order_id },
          populate: {
            order: {
              select: ["id", "slug"],
              populate: {
                order_products: {
                  populate: {
                    product_variant: {
                      populate: { product: { populate: { thumbnail: true } } },
                    },
                  },
                },
                users_permissions_user: { select: ["id", "fcmToken"] },
              },
            },
          },
        });

      console.log(
        order.order.order_products[0].product_variant.product.thumbnail.id
      );
      if (!order) {
        return ctx.send({ message: "No Order Found with the given ID" }, 204);
      }

      //check status === return_request
      if (order.status === order_status.return_request) {
        //accept return request
        const update_order = await strapi.db
          .query("api::order-product.order-product")
          .update({
            where: { id: order_id },
            data: { status: order_status.return_accepted },
          });

        //send fcmNotifications
        const fcmData = {
          title: "Order Return Accepted",
          body: `Your Return Request for Order has been accepted`,
          image:
            order.order.order_products[0].product_variant.product.thumbnail.id,
          description: `Your Return Request for Order ${order.order.slug} has been accepted`,
          type: notify_type.order,
          data: `${order.id}`,
          users_permissions_user: order.order.users_permissions_user.id,
          targetType: "token",
          targetValue: order.order.users_permissions_user.fcmToken,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          order.order.users_permissions_user.fcmToken,
          notification.id
        );
        return ctx.send({ message: `Return Order Accepted Successfully` }, 200);
      }
      return ctx.send(
        {
          message:
            "Order must be requested for return in order to be Accepted by Admin",
        },
        400
      );
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  rejectReturnRequests: async (ctx, next) => {
    try {
      const order_id = ctx.request.params.id;

      //check if order is available
      const order = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { id: order_id },
          populate: {
            order: {
              select: ["id", "slug"],
              populate: {
                order_products: {
                  populate: {
                    product_variant: {
                      populate: { product: { populate: { thumbnail: true } } },
                    },
                  },
                },
                users_permissions_user: { select: ["id", "fcmToken"] },
              },
            },
          },
        });

      if (!order) {
        return ctx.send({ message: "No Order Found with the given ID" }, 204);
      }

      //check status === return_request
      if (order.status === order_status.return_request) {
        //accept return request
        const update_order = await strapi.db
          .query("api::order-product.order-product")
          .update({
            where: { id: order_id },
            data: { status: order_status.return_declined },
          });

        //send fcmNotifications
        const fcmData = {
          title: "Order Return Declined",
          body: `Your Return Request for Order has been declined`,
          image:
            order.order.order_products[0].product_variant.product.thumbnail.id,
          description: `Your Return Request for Order ${order.order.slug} has been declined`,
          type: notify_type.order,
          data: `${order.id}`,
          users_permissions_user: order.order.users_permissions_user.id,
          targetType: "token",
          targetValue: order.order.users_permissions_user.fcmToken,
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(
          fcmData,
          order.order.users_permissions_user.fcmToken,
          notification.id
        );
        return ctx.send({ message: `Return Order Accepted Successfully` }, 200);
      }
      return ctx.send(
        {
          message:
            "Order must be requested for return in order to be Rejected by Admin",
        },
        400
      );
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
