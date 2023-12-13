"use strict";

const Razorpay = require("razorpay");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const path = require("path");

const { google } = require("googleapis");
const axios = require("axios");
const puppeteer = require("puppeteer");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const mailTemplate = require("./mailTemplate");
const JWT = require("jsonwebtoken");
const {
  PaymentStatus,
  baseURL,
  activity_status,
} = require("../../../../config/constants");
const {
  payment_method,
  order_status,
} = require("../../../../config/constants");
const {
  getUsersCount,
  getSubscribersCount,
  getCODOrdersCount,
  getPrepaidOrdersCount,
  getWalletOrdersCount,
  getProductsCount,
  getTotalRevenue,
  totalUserturnOver,
  resellerProfit,
  resellerHoldProfit,
  totalUserPrepaidOrders,
  totalUserCODOrders,
  totalOrders,
  totalLeads,
  getReturnOrdersCount,
} = require("../../utils/StatsHelper");
const { domain, admin_url } = require("../../../../config/constants");
const { faker } = require("@faker-js/faker");
const serviceAccount = require("../../../../config/resell-demo-otpauth-firebase-adminsdk-vys9k-5e6f672759.json");
const admin = require("firebase-admin");
const { createActivity, generateOTP } = require("../../utils/Helpers");
const razorpayService = require("../services/razorpay");
const { commissionAmount } = require("../../utils/RzpXCommissio");
const { tz_reasons, tz_types } = require("../../utils/WalletConstants");
const { generateTransactionId } = require("../../utils/GenerateTxnId");
const pLimit = require("p-limit");
const limit = pLimit(1);
const { getPaymentData } = require("../services/razorpay");
var browser = null;
/*
 * A set of functions called "actions" for `custom`
 */
const getPagination = (page, pageSize) => {
  if (!page && !pageSize) {
    return { limit: null, offset: null };
  } else {
    // const limit = pageSize ? +pageSize : 3;
    // const offset = page ? (page-1)*limit : 1;
    const limit = +pageSize;
    const offset = (page - 1) * limit;

    return { limit, offset };
  }
};

function addHours(date, hours) {
  const dateCopy = new Date(date);
  dateCopy.setHours(dateCopy.getHours() + hours);
  return dateCopy;
}

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // Your Firebase admin SDK configuration
// });

var longTime;

module.exports = {
  webHook: async (ctx, next) => {
    console.log("Inside Razorpay Webhooks");
    const paymentDetails = ctx.request.body;

    const string_pay_details = JSON.stringify(paymentDetails);
    console.log(string_pay_details);
    let payObject;
    let method;

    if (paymentDetails) {
      if (paymentDetails.payload.payment) {
        method = paymentDetails.payload.payment.entity.method;
      } else {
        method = null;
      }
    } else {
      return;
    }

    switch (method) {
      case "upi":
        payObject = {
          rz_order_creationId: paymentDetails.payload.payment.entity.order_id,
          rz_payment_id: paymentDetails.payload.payment.entity.id,
          amount:
            parseFloat(paymentDetails.payload.payment.entity.amount) / 100 ||
            null,
          currency: paymentDetails.payload.payment.entity.currency,
          status: paymentDetails.payload.payment.entity.status
            ? paymentDetails.payload.payment.entity.status.toUpperCase()
            : null,
          method: paymentDetails.payload.payment.entity.method,
          card_id: paymentDetails.payload.payment.entity.card_id,
          card_type: null,
          card_number: null,
          bank: null,
          vpa: paymentDetails.payload.payment.entity.vpa,
          email: paymentDetails.payload.payment.entity.email,
          contact: paymentDetails.payload.payment.entity.contact,
          notes: paymentDetails.payload.payment.entity.contact,
        };

        console.log("From UPI");
        console.log(payObject);
        break;

      case "card":
        payObject = {
          rz_order_creationId: paymentDetails.payload.payment.entity.order_id,
          rz_payment_id: paymentDetails.payload.payment.entity.id,
          amount:
            parseFloat(paymentDetails.payload.payment.entity.amount) / 100 ||
            null,
          currency: paymentDetails.payload.payment.entity.currency,
          status: paymentDetails.payload.payment.entity.status
            ? paymentDetails.payload.payment.entity.status.toUpperCase()
            : null,
          method: paymentDetails.payload.payment.entity.method,
          card_id: paymentDetails.payload.payment.entity.card_id,
          card_type: paymentDetails.payload.payment.entity.card.type,
          card_number:
            "**** **** **** " +
            paymentDetails.payload.payment.entity.card.last4,
          network: paymentDetails.payload.payment.entity.card.network,
          bank: null,
          vpa: paymentDetails.payload.payment.entity.vpa,
          email: paymentDetails.payload.payment.entity.email,
          contact: paymentDetails.payload.payment.entity.contact,
          notes: paymentDetails.payload.payment.entity.contact,
        };
        break;

      case "netbanking":
        payObject = {
          rz_order_creationId: paymentDetails.payload.payment.entity.order_id,
          rz_payment_id: paymentDetails.payload.payment.entity.id,
          amount:
            parseFloat(paymentDetails.payload.payment.entity.amount) / 100 ||
            null,
          currency: paymentDetails.payload.payment.entity.currency,
          status: paymentDetails.payload.payment.entity.status
            ? paymentDetails.payload.payment.entity.status.toUpperCase()
            : null,
          method: paymentDetails.payload.payment.entity.method,
          card_id: paymentDetails.payload.payment.entity.card_id,
          card_type: null,
          card_number: null,
          network: null,
          bank: paymentDetails.payload.payment.entity.bank,
          wallet: null,
          vpa: paymentDetails.payload.payment.entity.vpa,
          email: paymentDetails.payload.payment.entity.email,
          contact: paymentDetails.payload.payment.entity.contact,
          notes: paymentDetails.payload.payment.entity.contact,
        };
        break;

      default:
        break;
    }

    switch (paymentDetails.event) {
      case "payment.authorized":
        console.log("Payment Authorized");
        // const responseData1 = await axios.post(
        //   "https://243f-115-245-32-169.ngrok-free.app/api/razorpay/webhooks",
        //   JSON.stringify(paymentDetails),
        //   {
        //     headers: {
        //       "x-razorpay-signature":
        //         ctx.request.headers["x-razorpay-signature"],
        //     },
        //   }
        // );
        break;

      case "payment.captured":
        console.log("Payment Captured");

        const responseData2 = await axios.post(
          `${process.env.RZP_WRAPPER_URL}/razorpay/webhooks`,
          { data: string_pay_details, payObject },
          {
            headers: {
              "x-razorpay-signature":
                ctx.request.headers["x-razorpay-signature"],
            },
          }
        );

        if (responseData2.data.verified === true) {
          console.log("Payment Verified by Webhooks");
          console.log(paymentDetails.payload.payment.entity.order_id);
          const updateAdminPaymnentLog = await strapi.db
            .query("api::admin-subscription.admin-subscription")
            .update({
              where: {
                orderId: paymentDetails.payload.payment.entity.order_id,
              },
              data: { paymentId: paymentDetails.payload.payment.entity.id },
            });
        }
        return ctx.send("Success", 200);
        break;

      case "payment.failed":
        console.log("Payment Failed");
        const responseData3 = await axios.post(
          `${process.env.RZP_WRAPPER_URL}/razorpay/webhooks`,
          { data: string_pay_details, payObject },
          {
            headers: {
              "x-razorpay-signature":
                ctx.request.headers["x-razorpay-signature"],
            },
          }
        );
        return ctx.send("Success", 200);
        break;

      case "settlement.processed":
        console.log("Settlement Processed");
        // const responseData4 = await axios.post(
        //   `${process.env.RZP_WRAPPER_URL}/api/razorpay/webhooks`,
        //   { data: string_pay_details, payObject },
        //   {
        //     headers: {
        //       "x-razorpay-signature":
        //         ctx.request.headers["x-razorpay-signature"],
        //     },
        //   }
        // );
        return ctx.send("Success", 200);
      default:
        break;
    }

    // return ctx.send("Success", 200);
    // try {
    //   var paymentDetails = JSON.parse(JSON.stringify(ctx.request.body));
    //   var paymentCaptured =
    //     paymentDetails.event === "payment.captured" ? true : false;
    //   let event = paymentDetails.event;
    //   let payment_method_rzp = paymentDetails.payload.payment.entity.method;
    //   console.log("Inside WebHooks");
    //   const secret = "razor@123";
    //   const shasum = crypto.createHmac("sha256", secret);
    //   shasum.update(JSON.stringify(ctx.request.body));
    //   const digest = shasum.digest("hex");
    //   const rzpOrder = JSON.stringify(ctx.request.body);

    //   if (digest === ctx.request.headers["x-razorpay-signature"]) {
    //     const order = await strapi.db
    //       .query("api::order-product.order-product")
    //       .findOne({
    //         where: {
    //           rzpayOrderId: paymentDetails.payload.payment.entity.order_id,
    //         },
    //       });

    //     var entryPaymentLog;
    //     var paymentData;
    //     if (payment_method_rzp === payment_method.UPI) {
    //       paymentData = {
    //         rzOrderCreationId: paymentDetails.payload.payment.entity.order_id,
    //         rzpaymentId: paymentDetails.payload.payment.entity.id,
    //         amount: paymentDetails.payload.payment.entity.amount / 100,
    //         email: paymentDetails.payload.payment.entity.email,
    //         contact: paymentDetails.payload.payment.entity.contact,
    //         currency: paymentDetails.payload.payment.entity.currency,
    //         status: paymentDetails.payload.payment.entity.status.toUpperCase(),
    //         method: payment_method_rzp,
    //         vpa: paymentDetails.payload.payment.entity.vpa,
    //         order: [order.id],
    //       };
    //     }
    //     if (payment_method_rzp === payment_method.NET_BANKING) {
    //       paymentData = {
    //         rzOrderCreationId: paymentDetails.payload.payment.entity.order_id,
    //         rzpaymentId: paymentDetails.payload.payment.entity.id,
    //         amount: paymentDetails.payload.payment.entity.amount / 100,
    //         email: paymentDetails.payload.payment.entity.email,
    //         contact: paymentDetails.payload.payment.entity.contact,
    //         currency: paymentDetails.payload.payment.entity.currency,
    //         status: paymentDetails.payload.payment.entity.status.toUpperCase(),
    //         method: payment_method_rzp,
    //         bank: paymentDetails.payload.payment.entity.bank,
    //         order: [order.id],
    //       };
    //     } else {
    //       paymentData = {
    //         rzOrderCreationId: paymentDetails.payload.payment.entity.order_id,
    //         rzpaymentId: paymentDetails.payload.payment.entity.id,
    //         amount: paymentDetails.payload.payment.entity.amount / 100,
    //         email: paymentDetails.payload.payment.entity.email,
    //         contact: paymentDetails.payload.payment.entity.contact,
    //         currency: paymentDetails.payload.payment.entity.currency,
    //         status: paymentDetails.payload.payment.entity.status.toUpperCase(),
    //         method: payment_method_rzp,
    //         cardId: paymentDetails.payload.payment.entity.card_id,
    //         cardNumber:
    //           "**** **** **** " +
    //           paymentDetails.payload.payment.entity.card.last4,
    //         cardType: paymentDetails.payload.payment.entity.card.type,
    //         cardNetwork: paymentDetails.payload.payment.entity.card.network,
    //         order: [order.id],
    //       };
    //     }
    //     switch (event) {
    //       case "payment.authorized":
    //         console.log("Payment Authorized", event);
    //         console.log(order);
    //         paymentData.status = PaymentStatus.captured;
    //         entryPaymentLog = await strapi.entityService.create(
    //           "api::payment-log.payment-log",
    //           {
    //             data: paymentData,
    //           }
    //         );
    //         break;
    //       case "payment.captured":
    //         console.log("Payment Captured", event);
    //         if (order.isPaid === false) {
    //           console.log(entryPaymentLog);
    //           const entry = await strapi.db
    //             .query("api::order-product.order-product")
    //             .update({
    //               where: {
    //                 rzpayOrderId: rzpOrder.payload.payment.entity.order_id,
    //               },
    //               data: {
    //                 isPaid: true,
    //                 paymentID: rzpOrder.payload.payment.entity.id,
    //                 paymentSignature:
    //                   ctx.request.headers["x-razorpay-signature"],
    //               },
    //             });
    //         }
    //         //role based operations
    //         //firebase otp verification
    //         //email templating
    //         //webhook complete testing
    //         break;
    //       case "payment.failed":
    //         const entryPaymentFailed = await strapi.entityService.create(
    //           "api::payment-log.payment-log",
    //           {
    //             data: paymentData,
    //           }
    //         );
    //         console.log("Payment Failed", event);
    //         break;
    //       default:
    //         break;
    //     }
    //   } else {
    //     ctx.send(
    //       {
    //         message: "Request is Not Legit",
    //       },
    //       400
    //     );
    //   }
    //   ctx.send(
    //     {
    //       message: "Webhooks executed Successfully",
    //     },
    //     200
    //   );
    // } catch (err) {
    //   // else {
    //   ctx.send(
    //     {
    //       message: "Request is Not Legit",
    //     },
    //     500
    //   );
    //   // }
    //   // return err;
    // }
  },

  selectedProductVariant: async (ctx, next) => {
    var product_variants = ctx.request.body.product_variants;

    let arrayProductVariants = [];
    try {
      for await (const id of product_variants) {
        const entries = await strapi.entityService.findOne(
          "api::product-variant.product-variant",
          id,
          {
            fields: [
              "name",
              "quantity",
              "price",
              "strikePrice",
              "premiumPrice",
              "isActive",
            ],
            populate: {
              bulk_pricings: true,
              product: {
                populate: {
                  thumbnail: true,
                },
              },
            },
          }
        );

        if (entries !== null) {
          arrayProductVariants.push(entries);
        }
      }
      return ctx.send(arrayProductVariants, 200);
    } catch (err) {
      return err;
    }
  },

  getUser: async (ctx, next) => {
    try {
      const user = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: user.id,
          },
        });

      // console.log(userInfo);
      return userInfo;
    } catch (error) {
      return error;
    }
  },

  updateUser: async (ctx, next) => {
    try {
      const user = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const body = ctx.request.body;

      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .update({
          where: {
            id: user.id,
          },
          data: body,
        });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  listOrdersByTags: async (ctx, next) => {
    try {
      const tag = ctx.request.body.tag;
      var status;
      console.log(tag);

      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      var userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: id,
          },
        });
      let tagList = ["active", "declined", "delivered", "all"];

      if (!tagList.includes(tag)) {
        ctx.send({
          message: `Tag must include any one tag in this array [${tagList}]`,
        });
        return (ctx.response.status = 400);
      }

      var listOfOrders;
      if (tag === "all") {
        listOfOrders = await strapi.db.query("api::order.order").findMany({
          where: { users_permissions_user: parseInt(userInfo.id) },
          orderBy: { id: "desc" },
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
      } else if (tag === "active") {
        listOfOrders = await strapi.entityService.findMany("api::order.order", {
          filters: {
            users_permissions_user: userInfo.id,
            $or: [
              { status: "ACCEPTED" },
              { status: "INTRANSIT" },
              { status: "PROCESSING" },
            ],
          },
          sort: { id: "desc" },

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
      } else if (tag === "delivered") {
        listOfOrders = await strapi.entityService.findMany("api::order.order", {
          filters: {
            users_permissions_user: userInfo.id,
            status: "DELIVERED",
          },
          sort: { id: "desc" },
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
      } else {
        listOfOrders = await strapi.entityService.findMany("api::order.order", {
          filters: {
            users_permissions_user: userInfo.id,
            $or: [
              { status: "DECLINED" },
              { statusUser: "CANCELLATION_ACCEPTED" },
            ],
          },
          sort: { id: "desc" },

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
      }
      // console.log(listOfOrders);
      return listOfOrders;
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  listOrder: async (ctx, next) => {
    try {
      const order_id = ctx.request.body.order_id;
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      var userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: id,
          },
        });

      const order = await strapi.db
        .query("api::order-product.order-product")
        .findOne({
          where: { users_permissions_user: userInfo.id, id: order_id },
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
      if (order === null) {
        ctx.send({
          message:
            "Order either belongs to different user or may be order_id doesn't exist",
        });
        return (ctx.response.status = 400);
      } else {
        // delete
        return order;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  forgotPasswordMail: async (ctx, next) => {
    try {
      const email = ctx.request.body.email;
      console.log(email);
      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: email,
          },
        });

      if (userInfo === null) {
        ctx.send(
          {
            message: "No User Found with this email",
          },
          400
        );
      } else {
        const encodedString = crypto.randomBytes(20).toString("hex");
        let now = new Date();
        const expirationTime = addHours(now, 12);

        const resetLinkData = await strapi
          .query("plugin::users-permissions.user")
          .update({
            where: {
              email: email,
            },
            data: {
              resetPasswordToken: encodedString,
              resetTokenExpiration: expirationTime,
            },
          });
        ctx.send(
          {
            token: encodedString,
          },
          200
        );
      }
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  validateToken: async (ctx, next) => {
    try {
      const token = ctx.request.body.token;

      if (token === undefined || token === null || token.length === 0) {
        ctx.send(
          {
            message: "Please pass the token",
          },
          400
        );
      }

      const resetToken = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            resetPasswordToken: token,
          },
        });

      if (
        resetToken.resetPasswordToken === null ||
        resetToken.resetPasswordToken.length === 0
      ) {
        ctx.send(
          {
            message: "Token is either expired or it doesn't exists",
          },
          400
        );
      }

      let now = new Date();

      if (now > resetToken.resetTokenExpiration) {
        console.log("Token is expired");
        ctx.send(
          {
            message: "Token is expired",
          },
          400
        );
      }
      if (token !== resetToken.resetPasswordToken) {
        ctx.send(
          {
            message: "Token is Invalid",
          },
          400
        );
      } else {
        ctx.send(
          {
            message: "Token is Valid",
          },
          200
        );
      }
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  changePassword: async (ctx, next) => {
    try {
      const { password } = ctx.request.body;
      const { token } = ctx.request.body;

      let newPass = bcrypt.hashSync(password, 10);
      const updateData = await strapi
        .query("plugin::users-permissions.user")
        .update({
          where: {
            resetPasswordToken: token,
          },
          data: {
            password: newPass,
            resetPasswordToken: null,
            resetTokenExpiration: null,
          },
        });
      console.log(updateData);
      ctx.send(
        {
          message: "Password Updated Successfully",
        },
        201
      );
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  firebasePhoneAuthVerify: async (ctx, next) => {
    let global = await strapi.db
      .query("api::global.global")
      .findOne({ select: ["user_verification_method"] });

    switch (global.user_verification_method) {
      case "FIREBASE":
        try {
          console.log("Inside firebase Auth");
          try {
            const idToken = await admin
              .auth()
              .verifyIdToken(ctx.request.body.verificationId);
            const phoneNumber = idToken.phone_number;
            console.log(phoneNumber);
            if (phoneNumber === ctx.request.body.phoneNumber) {
              console.log("User Verified");
              //update user
              // let phone = phoneNumber.slice(-10);
              const user = await strapi
                .query("plugin::users-permissions.user")
                .findOne({
                  where: {
                    $or: [
                      {
                        phone: phoneNumber,
                      },
                      {
                        phone: phoneNumber.slice(-10),
                      },
                    ],
                  },
                });
              if (user) {
                if (user.isAdmin) {
                  const updateUser = await strapi
                    .query("plugin::users-permissions.user")
                    .update({
                      data: {
                        confirmed: true,
                      },
                      where: {
                        phone: phoneNumber,
                      },
                    });

                  //create activity
                  let activity_data = {
                    event: activity_status.admin_login,
                    user: updateUser.id,
                    description: `Admin: ID:${user.id} Logged In`,
                  };

                  const activity = createActivity(activity_data, strapi);
                } else {
                  const updateUser = await strapi
                    .query("plugin::users-permissions.user")
                    .update({
                      data: {
                        confirmed: true,
                      },
                      where: {
                        id: user.id,
                      },
                    });
                  let activity_data = {
                    event: activity_status.user_login,
                    user: updateUser.id,
                    description: `User: ID:${user.id} Logged In`,
                  };

                  const activity = createActivity(activity_data, strapi);
                }
                console.log(
                  "Phone number verified successfully And the user is confirmed"
                );
                const token = JWT.sign(
                  { id: user.id, email: user.email, username: user.username },
                  process.env.JWT_SECRET,
                  {
                    expiresIn: "7d",
                  }
                );

                delete user.password;
                return ctx.send(
                  {
                    jwt: token,
                    user,
                  },
                  200
                );
              } else {
                return ctx.send(
                  {
                    message: "Something Went Wrong",
                  },
                  500
                );
              }
            }
          } catch (err) {
            console.log(err);
            return ctx.send(err, 500);
          }
        } catch (err) {
          console.log(err);
          return ctx.send(err, 400);
        }
        break;

      case "MSG91":
        console.log("Using mSG91");
        try {
          const phone = ctx.request.body.phoneNumber;
          const otp = ctx.request.body.otp;

          console.log(phone);

          //check if the user is available or not
          const user = await strapi
            .query("plugin::users-permissions.user")
            .findOne({
              where: {
                $or: [{ phone: phone }, { phone: phone.slice(-10) }],
              },
            });

          if (!user) {
            return ctx.send(
              { message: "No User found with this phone number" },
              400
            );
          }

          //check otp
          if (otp !== user.otp) {
            return ctx.send({ message: "Otp is Invalid" }, 400);
          }

          //check if otp expiration
          const date = new Date();
          if (date > user.otp_expiration) {
            return ctx.send(
              {
                message:
                  "OTP has been expired. Please ReSend the OTP in order to validate",
              },
              400
            );
          }

          //now return jwt
          const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });

          if (user.phone == "8018801808") {
            return ctx.send({ jwt: token, user }, 200);
          }
          const updateUser = await strapi
            .query("plugin::users-permissions.user")
            .update({
              where: { id: user.id },
              data: { otp: null, otp_expiration: null, confirmed: true },
            });
          return ctx.send({ jwt: token, user }, 200);
        } catch (err) {
          console.log(err);
          return ctx.send(err, 400);
        }
        break;

      default:
        break;
    }
  },

  forgotPasswordPhone: async (ctx, next) => {
    try {
      if (!ctx.request.body.verificationId) {
        return ctx.send({ message: "Verification Id is required bro" }, 400);
      }
      const phoneNum = ctx.request.body.phone;
      // const {id} = await strapi.plugins[
      //   "users-permissions"
      //   ].services.jwt.getToken(ctx);

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { phone: phoneNum } });
      const idToken = await admin
        .auth()
        .verifyIdToken(ctx.request.body.verificationId);

      const phone = idToken.phone_number;

      if (user.phone === phone || user.phone === phone.slice(-10)) {
        const password = ctx.request.body.password;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const updatePass = await strapi
          .query("plugin::users-permissions.user")
          .update({
            data: {
              password: hashedPassword,
            },
            where: {
              id: user.id,
            },
          });
        return ctx.send({ message: "Password Updated Successfully" }, 201);
      } else {
        return ctx.send({ message: "Something Went Wrong" }, 500);
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  dashboardStats: async (ctx, next) => {
    try {
      const totalUsers = await getUsersCount(strapi);
      const subscribers = await getSubscribersCount(strapi);
      // const codOrders = await getCODOrdersCount(strapi);
      // const prepaidOrders = await getPrepaidOrdersCount(strapi);
      // const walletOrders = await getWalletOrdersCount(strapi);
      const products = await getProductsCount(strapi);
      const totalRevenue = await getTotalRevenue(strapi);
      const total_orders = await totalOrders(strapi);
      const total_leads = await totalLeads(strapi);
      const total_return_orders = await getReturnOrdersCount(strapi);

      // const totalOrders =
      //   parseInt(codOrders) + parseInt(prepaidOrders) + parseInt(walletOrders);

      return ctx.send(
        {
          totalRevenue,
          totalUsers,
          total_orders,
          total_leads,
          total_return_orders,
          products,
          subscribers,
          shares: 0,
        },
        200
      );
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  generatePdfCatalogue: async (ctx, next) => {
    try {
      const parts = ctx.request.params.id.split("_");
      const phone = ctx.request.params.phone;
      const ids = parts.filter((n) => n).join("_");
      const regex = /^[\w_]+$/;
      if (regex.test(ids) === false) {
        return ctx.send(
          { message: "IDs with only underscores is allowed" },
          400
        );
      }

      const url = `${admin_url}/pdf-maker/${ids}/${phone}`;
      const pdfReponse = await axios.post(
        `https://api.hangs.in/api/generate/pdf`,
        { baseUrl: url },
        { responseType: "stream" }
      );
      // const buffer = Buffer.from(pdfReponse.data, 'utf-8')
      ctx.type = "application /arrayBuffer";

      return ctx.send(pdfReponse.data, 200);

      // var url;
      // if (!user) {
      //   url = `https://admin.hangs.in/pdf-maker/${ids}/${phone}`;
      // } else {
      //   url = `https://admin.hangs.in/singleproduct/${ids}/${phone}`;
      // }

      // if (browser == null) {
      //   browser = await puppeteer.launch({
      //     headless: "new",
      //     // userDataDir: "../../../chromium_instances",
      //     args: [
      //       "--disable-features=IsolateOrigins",
      //       "--disable-site-isolation-trials",
      //       "--autoplay-policy=user-gesture-required",
      //       "--disable-background-networking",
      //       "--disable-background-timer-throttling",
      //       "--disable-backgrounding-occluded-windows",
      //       "--disable-breakpad",
      //       "--disable-client-side-phishing-detection",
      //       "--disable-component-update",
      //       "--disable-default-apps",
      //       "--disable-dev-shm-usage",
      //       "--disable-domain-reliability",
      //       "--disable-extensions",
      //       "--disable-features=AudioServiceOutOfProcess",
      //       "--disable-hang-monitor",
      //       "--disable-ipc-flooding-protection",
      //       "--disable-notifications",
      //       "--disable-offer-store-unmasked-wallet-cards",
      //       "--disable-popup-blocking",
      //       "--disable-print-preview",
      //       "--disable-prompt-on-repost",
      //       "--disable-renderer-backgrounding",
      //       "--disable-setuid-sandbox",
      //       "--disable-speech-api",
      //       "--disable-sync",
      //       "--hide-scrollbars",
      //       "--ignore-gpu-blacklist",
      //       "--metrics-recording-only",
      //       "--mute-audio",
      //       // "--no-default-browser-check",
      //       "--no-first-run",
      //       "--no-pings",
      //       "--no-sandbox",
      //       "--no-zygote",
      //       "--password-store=basic",
      //       "--use-gl=swiftshader",
      //       "--use-mock-keychain",
      //     ],
      //   });
      // }
      // console.log("BROWSER STARTED: " + new Date().getTime());
      // const page = await browser.newPage();
      // await page.goto(url, {
      //   waitUntil: "networkidle0",
      // });
      // console.log("PAGE OPENED: " + new Date().getTime());
      // await page.emulateMediaType("screen");

      // await page.waitForSelector("#root", { visible: true });

      // console.log("PDF STARTED: " + new Date().getTime());

      // console.log(url);

      // console.log("BROWSER STARTING: " + new Date().getTime());

      // const outputPath = path.join(__dirname, `../../../../../pdfs/file.pdf`);
      // // const page = await pdf_generator(url);

      // const pdf = await page.pdf({
      //   // path: `../../../../../pdfs/${date}.pdf`,
      //   // path: `../../../../../pdfs/${date}.pdf`,
      //   path: outputPath,
      //   margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
      //   printBackground: true,
      //   format: "A4",
      // });

      // console.log("PDF COMPLETE: " + new Date().getTime());
      // console.log(pdf);
      // if (pdf) {
      //   const filePath = outputPath;
      //   const filename = path.basename(filePath);
      //   // const pdfBuffer = pdf;
      //   logDownloadEvent(ctx);
      //   ctx.attachment(filename);
      //   // browser = null;
      //   ctx.type = "application/octet-stream";
      //   ctx.body = fs.createReadStream(filePath);
      //   // return ctx.send(pdf, 200);
      // }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  generateOrderDetailsPdfCatalogue: async (ctx, next) => {
    const path = require("path");
    try {
      const parts = ctx.request.params.id.split("_");
      const ids = parts.filter((n) => n).join("_");
      const regex = /^[\w_]+$/;
      if (regex.test(ids) === false) {
        return ctx.send(
          { message: "IDs with only underscores is allowed" },
          400
        );
      }
      const url = `${admin_url}/pdf-maker/${ids}/${phone}`;
      console.log(url);

      console.log("BROWSER STARTING: " + new Date().getTime());

      console.log(browser);

      const outputPath = path.join(__dirname, `../../../../../files/file.pdf`);
      if (browser == null) {
        browser = await puppeteer.launch({
          headless: "new",
          // userDataDir: "../../../chromium_instances",
          args: [
            "--disable-features=IsolateOrigins",
            "--disable-site-isolation-trials",
            "--autoplay-policy=user-gesture-required",
            "--disable-background-networking",
            "--disable-background-timer-throttling",
            "--disable-backgrounding-occluded-windows",
            "--disable-breakpad",
            "--disable-client-side-phishing-detection",
            "--disable-component-update",
            "--disable-default-apps",
            "--disable-dev-shm-usage",
            "--disable-domain-reliability",
            "--disable-extensions",
            "--disable-features=AudioServiceOutOfProcess",
            "--disable-hang-monitor",
            "--disable-ipc-flooding-protection",
            "--disable-notifications",
            "--disable-offer-store-unmasked-wallet-cards",
            "--disable-popup-blocking",
            "--disable-print-preview",
            "--disable-prompt-on-repost",
            "--disable-renderer-backgrounding",
            "--disable-setuid-sandbox",
            "--disable-speech-api",
            "--disable-sync",
            "--hide-scrollbars",
            "--ignore-gpu-blacklist",
            "--metrics-recording-only",
            "--mute-audio",
            // "--no-default-browser-check",
            "--no-first-run",
            "--no-pings",
            "--no-sandbox",
            "--no-zygote",
            "--password-store=basic",
            "--use-gl=swiftshader",
            "--use-mock-keychain",
          ],
        });
      }

      // Create a new page
      console.log("BROWSER STARTED: " + new Date().getTime());

      const page = await browser.newPage();
      await page.goto(url, {
        waitUntil: "networkidle0",
      });
      console.log("PAGE OPENED: " + new Date().getTime());
      await page.emulateMediaType("screen");

      await page.waitForSelector("#root", { visible: true });

      console.log("PDF STARTED: " + new Date().getTime());
      // const page = await pdf_generator(url);
      const pdf = await page.pdf({
        path: outputPath,
        margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
        printBackground: true,
        format: "A4",
      });

      console.log("PDF COMPLETE: " + new Date().getTime());
      console.log(pdf);
      if (pdf) {
        const filePath = outputPath;
        const filename = path.basename(filePath);
        // const pdfBuffer = pdf;
        logDownloadEvent(ctx);
        ctx.attachment(filename);
        // browser = null;
        ctx.type = "application/octet-stream";
        ctx.body = fs.createReadStream(filePath);
        // return ctx.send(pdf, 200);
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  generateOrderDetailsPdfCatalogue: async (ctx, next) => {
    const path = require("path");
    try {
      const parts = ctx.request.params.id.split("_");
      const ids = parts.filter((n) => n).join("_");
      const regex = /^[\w_]+$/;
      if (regex.test(ids) === false) {
        return ctx.send(
          { message: "IDs with only underscores is allowed" },
          400
        );
      }
      const url = `${admin_url}/pdf-maker/${ids}/${phone}`;
      console.log(url);

      console.log("BROWSER STARTING: " + new Date().getTime());

      console.log(browser);

      const outputPath = path.join(__dirname, `../../../../../files/file.pdf`);
      if (browser == null) {
        browser = await puppeteer.launch({
          headless: "new",
          // userDataDir: "../../../chromium_instances",
          args: [
            "--disable-features=IsolateOrigins",
            "--disable-site-isolation-trials",
            "--autoplay-policy=user-gesture-required",
            "--disable-background-networking",
            "--disable-background-timer-throttling",
            "--disable-backgrounding-occluded-windows",
            "--disable-breakpad",
            "--disable-client-side-phishing-detection",
            "--disable-component-update",
            "--disable-default-apps",
            "--disable-dev-shm-usage",
            "--disable-domain-reliability",
            "--disable-extensions",
            "--disable-features=AudioServiceOutOfProcess",
            "--disable-hang-monitor",
            "--disable-ipc-flooding-protection",
            "--disable-notifications",
            "--disable-offer-store-unmasked-wallet-cards",
            "--disable-popup-blocking",
            "--disable-print-preview",
            "--disable-prompt-on-repost",
            "--disable-renderer-backgrounding",
            "--disable-setuid-sandbox",
            "--disable-speech-api",
            "--disable-sync",
            "--hide-scrollbars",
            "--ignore-gpu-blacklist",
            "--metrics-recording-only",
            "--mute-audio",
            // "--no-default-browser-check",
            "--no-first-run",
            "--no-pings",
            "--no-sandbox",
            "--no-zygote",
            "--password-store=basic",
            "--use-gl=swiftshader",
            "--use-mock-keychain",
          ],
        });
      }

      // Create a new page
      console.log("BROWSER STARTED: " + new Date().getTime());

      const page = await browser.newPage();
      await page.goto(url, {
        waitUntil: "networkidle0",
      });
      console.log("PAGE OPENED: " + new Date().getTime());
      await page.emulateMediaType("screen");

      await page.waitForSelector("#root", { visible: true });

      console.log("PDF STARTED: " + new Date().getTime());
      // const page = await pdf_generator(url);
      const pdf = await page.pdf({
        path: outputPath,
        margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
        printBackground: true,
        format: "A4",
      });

      console.log("PDF COMPLETE: " + new Date().getTime());
      console.log(pdf);
      if (pdf) {
        const filePath = outputPath;
        const filename = path.basename(filePath);
        // const pdfBuffer = pdf;
        logDownloadEvent(ctx);
        ctx.attachment(filename);
        // browser = null;
        ctx.type = "application/octet-stream";
        ctx.body = fs.createReadStream(filePath);
        // return ctx.send(pdf, 200);
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  getRecentOrders: async (ctx, next) => {
    try {
      const recentOrders = await strapi
        .query("api::order-product.order-product")
        .findMany({
          where: { status: order_status.new },
          orderBy: { id: "desc" },
          limit: 10,
          populate: {
            order: true,
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
        });
      return ctx.send(recentOrders, 200);
    } catch (e) {
      console.log(e);
      return ctx.send(e, 400);
    }
  },

  resellerWithdraw: async (ctx, netx) => {
    try {
      const body = ctx.request.body;
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: id } });
      body["amount"] = user.wallet_balance;

      var globalVar = await strapi.entityService.findMany("api::global.global");

      // if (parseFloat(body.amount) > parseFloat(user.wallet_balance)) {
      //   return ctx.send(
      //     { message: "Entered amount exceeds your wallet balance" },
      //     400
      //   );
      // }

      if (parseFloat(user.wallet_balance) < parseInt(globalVar.withdrawLimit)) {
        return ctx.send(
          {
            message: `Entered amount must be greater than ${globalVar.withdrawLimit}`,
          },
          400
        );
      }

      let schema = {
        account_number: globalVar.razorpayXAccountNumber,
        currency: "INR",
        purpose: "payout",
        queue_if_low_balance: true,
        reference_id: "Acme Transaction ID 12345",
      };

      var totalAmount;
      if (body.hasOwnProperty("upiId")) {
        totalAmount = commissionAmount(parseInt(body.amount), "upiId");
        console.log(totalAmount);
        let vpaMode = {
          mode: "UPI",
          amount: parseInt(totalAmount),
          fund_account: {
            account_type: "vpa",
            vpa: {
              address: body.upiId,
            },
            contact: {
              name: user.name,
              email: user.email,
              contact: user.phone,
              // type: "employee",
              // reference_id: "Acme Contact ID 12345",
            },
          },
        };
        Object.assign(schema, { mode: vpaMode.mode });
        Object.assign(schema, { fund_account: vpaMode.fund_account });
        Object.assign(schema, { amount: vpaMode.amount });
      } else {
        totalAmount = commissionAmount(parseInt(body.amount), "bank");
        let bankMode = {
          mode: "NEFT",
          amount: parseInt(totalAmount),
          fund_account: {
            account_type: "bank_account",
            bank_account: {
              name: body.accountName,
              ifsc: body.ifscCode,
              account_number: body.accountNumber,
            },
            contact: {
              name: user.name,
              email: user.email,
              contact: user.phone,
              // type: "employee",
              // reference_id: "Acme Contact ID 12345",
            },
          },
        };
        Object.assign(schema, { mode: bankMode.mode });
        Object.assign(schema, {
          fund_account: bankMode.fund_account,
        });
        Object.assign(schema, {
          amount: bankMode.amount,
        });
      }

      const payoutSeller = await razorpayService.payoutService(
        schema,
        globalVar.razorpayKey,
        globalVar.razorpaySecret
      );
      if (payoutSeller.status === 200) {
        const updateUser = await strapi
          .query("plugin::users-permissions.user")
          .update({
            where: { id: id },
            data: {
              wallet_balance:
                parseFloat(user.wallet_balance) - parseInt(totalAmount),
            },
          });
        const walletLog = await strapi.db.query("api::wallet.wallet").create({
          data: {
            amount: parseInt(body.amount),
            reasons: tz_reasons.payout_sent,
            transaction_type: tz_types.debit,
            users_permissions_user: id,
          },
        });
        const createTxn = await strapi.db
          .query("api::transaction.transaction")
          .create({
            data: {
              purpose: "PAYOUT",
              user: user.id,
              txn_type: tz_types.credit,
              txn_id: await generateTransactionId(),
              remark: "Payout Done",
              mode: "MONEY",
              amount: parseInt(body.amount),
            },
          });
        let activity_data = {
          event: activity_status.reseller_withdraw,
          user: user.id,
          description: `Reseller: ${user.name} ID:${user.id} Withdrew amount of ₹${body.amount}`,
        };

        const activity = createActivity(activity_data, strapi);

        return ctx.send({ message: "Payout Done" }, 200);
      }
      console.log("Payout Not Done");
      return ctx.send({ message: "Payout Not Done" }, 400);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  getRecentlyAddedProducts: async (ctx, next) => {
    try {
      const products = await strapi.db.query("api::product.product").findMany({
        orderBy: { id: "desc" },
        limit: 10,
        where: { isActive: true },
        populate: {
          thumbnail: true,
          product_variants: true,
        },
      });
      return ctx.send(products, 200);
    } catch (e) {
      console.log(e);
      return ctx.send(e, 400);
    }
  },

  updateUserFcmToken: async (ctx, next) => {
    try {
      const token = ctx.request.body.fcmToken;
      const user = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const update = await strapi
        .query("plugin::users-permissions.user")
        .update({
          where: {
            id: user.id,
          },
          select: ["fcmToken", "username", "email"],
          data: {
            fcmToken: token,
          },
        });

      return ctx.send(update, 201);
    } catch (e) {
      console.log(e);
      return ctx.send(e, 400);
    }
  },

  getResellerDashboardStats: async (ctx, next) => {
    try {
      const user = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      const totalTurnOver = await totalUserturnOver(strapi, user.id);
      const totalProfit = await resellerProfit(strapi, user.id);
      const onHold = await resellerHoldProfit(strapi, user.id);
      const prepaidOrders = await totalUserPrepaidOrders(strapi, user.id);
      const codOrders = await totalUserCODOrders(strapi, user.id);
      const totalOrders = parseInt(codOrders) + parseInt(prepaidOrders);
      return ctx.send(
        {
          totalTurnOver,
          totalProfit,
          onHold,
          prepaidOrders,
          codOrders,
          totalOrders,
        },
        200
      );
    } catch (e) {
      console.log(e);
      return ctx.send(e, 400);
    }
  },

  searchInUsers: async (ctx, next) => {
    try {
      const key = ctx.request.query.qs;
      var pagination = ctx.request.query.pagination;
      var data;
      var meta;

      const users = async (offset, limit) => {
        const usersList = await strapi
          .query("plugin::users-permissions.user")
          .findWithCount({
            offset: offset,
            limit: limit,
            where: {
              $or: [
                {
                  name: {
                    $containsi: key,
                  },
                },
                {
                  username: {
                    $containsi: key,
                  },
                },
                {
                  email: {
                    $containsi: key,
                  },
                },
                {
                  phone: {
                    $containsi: key,
                  },
                },
              ],
            },
            populate: {
              avatar: true,
              role: true,
              wallets: true,
              transactions: true,
              subscriptions: true,
            },
          });
        return usersList;
      };

      if (pagination) {
        let { offset, limit } = getPagination(pagination.page, pagination.size);
        data = await users(offset, limit);
        meta = {
          pagination: {
            page: parseInt(pagination.page),
            pageSize: parseInt(pagination.size),
            pageCount: Math.ceil(data[1] / parseInt(pagination.size)),
            total: data[1],
          },
        };
      } else {
        data = await users(null, null);
        meta = {
          pagination: {
            page: 0,
            pageSize: data[1],
            pageCount: 1,
            total: data[1],
          },
        };
      }

      return ctx.send({ data: data[0], meta }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  getUserInfoByToken: async (ctx, next) => {
    try {
      const token = ctx.request.params.token;

      const notifications = await strapi.db
        .query("api::notification.notification")
        .findMany({
          where: {
            $or: [
              {
                users_permissions_user: { username: { $null: true } },
              },
              {
                users_permissions_user: {
                  fcmToken: token,
                },
              },
            ],
          },
        });

      return ctx.send(notifications, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  updateUsersShares: async (ctx, next) => {
    try {
      const shares = ctx.request.params.shares;
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: id,
          },
        });

      let sharesCount =
        userInfo.shares == null
          ? shares
          : parseInt(userInfo.shares) + parseInt(shares);
      const updateUser = await strapi
        .query("plugin::users-permissions.user")
        .update({
          where: { id: id },
          select: ["username", "email", "shares", "ordersCount"],
          data: {
            shares: sharesCount,
          },
        });

      return ctx.send(updateUser, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  sendOTP: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      console.log(body);
      const phone = `91${body.phone.slice(-10)}`;
      const templateID = process.env.MSG91_OTP_TEMPLATE_ID;
      const otp = generateOTP();
      const url = "https://control.msg91.com/api/v5/flow/";

      if (phone == "918018801808") {
        return ctx.send({ message: "Message Sent Successfully" }, 200);
      }
      //check any user exists or not
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            $or: [
              { phone: phone },
              { phone: phone.slice(-10) },
              { phone: `+91${phone.slice(-10)}` },
            ],
          },
        });

      if (!user) {
        return ctx.send(
          { message: "No User found with this phone number" },
          400
        );
      }

      let date = new Date();
      let otp_expiration = date.setMinutes(date.getMinutes() + 10);

      // console.log(user);
      const update_user = await strapi
        .query("plugin::users-permissions.user")
        .update({
          where: { id: user.id },
          data: {
            otp: otp,
            otp_expiration: otp_expiration,
          },
        });
      const reqBody = {
        template_id: templateID,
        short_url: 0,
        recipients: [
          {
            mobiles: phone,
            var1: otp,
          },
        ],
      };

      try {
        const send_sms = await axios.post(url, reqBody, {
          headers: {
            authkey: process.env.MSG91_AUTH_KEY,
          },
        });
        return ctx.send(
          { message: "Message Sent Successfully" },
          send_sms.status
        );
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }

      // const
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
};

function logDownloadEvent(ctx) {
  const userIp = ctx.request.ip;
  const userAgent = ctx.request.get("User-Agent");

  // Log the download event with user IP and user agent information
  console.log(`Download event - IP: ${userIp}, User-Agent: ${userAgent}`);
  // Perform additional logging or store the event in your database
}

const upload = async (link) => {
  //await Get Image from link
  //await Upload Image via function
  //return get ID
  try {
    // Download the image using fetch
    // const response = await fetch(link);
    // const buffer = await response.buffer();
    const response = await axios.get(link, {
      responseType: "arraybuffer",
    });

    const buffer = Buffer.from(response.data, "binary");

    // Create a new FormData instance
    const formData = new FormData();
    formData.append("files", buffer, `${new Date().getTime()}_image.jpg`);

    // Send the FormData using axios
    const uploadResponse = await axios.post(
      "http://localhost:1337/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log(uploadResponse);
    return uploadResponse.data[0].id;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

//get thumbnail
const getThumbnail = async (category) => {
  var imageLink = faker.image.urlLoremFlickr({
    category: category,
    height: 640,
    width: 640,
  });

  return await upload(imageLink);
};

//get gallery
const getGallery = async (count, category) => {
  var linkList = [];

  for (let i = 0; i < count; i++) {
    var imageLink = faker.image.urlLoremFlickr({
      category: category,
      height: 640,
      width: 640,
    });
    linkList.push(imageLink);
  }

  var galleryList = [];

  for (let j = 0; j < linkList.length; j++) {
    var result = await upload(linkList[j]);
    galleryList.push(result);
  }

  return galleryList;
};

const generateRandomVarType = async (variant) => {
  var type;
  if (variant.toLowerCase() === "color") {
    type = faker.color.human();
  }
  if (variant.toLowerCase() === "material") {
    type = faker.commerce.productMaterial();
    console.log(type);
  }
  if (variant.toLowerCase() === "size") {
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    type = sizes[randomIndex];
  }
  return type;
};
