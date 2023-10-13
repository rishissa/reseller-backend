"use strict";

const Razorpay = require("razorpay");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
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
} = require("../../utils/StatsHelper");
const { domain } = require("../../../../config/constants");
const { faker } = require("@faker-js/faker");
const serviceAccount = require("../../../../config/vdc-app-ssa-firebase.json");
const admin = require("firebase-admin");
const { createActivity } = require("../../utils/Helpers");
const { razorpayService } = require("../services/razorpay");
const { commissionAmount } = require("../../utils/RzpXCommissio");
const { tz_reasons, tz_types } = require("../../utils/WalletConstants");
const { generateTransactionId } = require("../../utils/GenerateTxnId");
const { pdf_generator } = require("../../utils/PdfGeneratorHelper");

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
    // console.log(JSON.stringify(ctx.request.body));
    console.log(ctx.request.body);
    try {
      var paymentDetails = JSON.parse(JSON.stringify(ctx.request.body));

      var paymentCaptured =
        paymentDetails.event === "payment.captured" ? true : false;
      let event = paymentDetails.event;
      let payment_method_rzp = paymentDetails.payload.payment.entity.method;
      console.log("payment_method_rzp", payment_method_rzp);
      const secret = "razor@123";
      console.log("Inside WebHooks");
      // decryptions
      const shasum = crypto.createHmac("sha256", secret);
      shasum.update(JSON.stringify(ctx.request.body));
      const digest = shasum.digest("hex");

      // razirpay order body
      const rzpOrder = ctx.request.body;

      if (digest === ctx.request.headers["x-razorpay-signature"]) {
        let order;
        let type;
        const getOrder = await strapi.db.query("api::order.order").findOne({
          where: {
            rzpayOrderId: paymentDetails.payload.payment.entity.order_id,
          },
          select: ["*"],
        });
        if (getOrder) {
          order = getOrder;
          type = "order";
        } else {
          const getSubs = await strapi.db
            .query("api::subscription.subscription")
            .findOne({
              where: {
                orderId: paymentDetails.payload.payment.entity.order_id,
              },
            });
          order = getSubs;
          type = "subs";
        }

        if (order === null) return ctx.send({ error: "Invalid Request" }, 400);

        var entryPaymentLog;
        var paymentData = await getPaymentData({ paymentDetails, order, type });

        switch (event) {
          case "payment.authorized":
            console.log("Payment Authorized", event);
            paymentData.status = PaymentStatus.authorized;
            entryPaymentLog = await strapi.db
              .query("api::payment-log.payment-log")
              .create({
                data: paymentData,
              });
            break;
          case "payment.captured":
            console.log("Payment Captured", event);
            if (order.isPaid === false) {
              if (type === "order") {
                const entry = await strapi.db.query("api::order.order").update({
                  where: {
                    $and: [
                      {
                        rzpayOrderId: rzpOrder.payload.payment.entity.order_id,
                      },
                      { isPaid: false },
                    ],
                  },
                  data: {
                    isPaid: true,
                    paymentID: rzpOrder.payload.payment.entity.id,
                    paymentSignature:
                      ctx.request.headers["x-razorpay-signature"],
                  },
                });
              }

              paymentData.status = PaymentStatus.captured;
              entryPaymentLog = await strapi.db
                .query("api::payment-log.payment-log")
                .create({
                  data: paymentData,
                });
            }
            break;
          case "payment.failed":
            paymentData.status = PaymentStatus.failed;
            const entryPaymentFailed = await strapi.db
              .query("api::payment-log.payment-log")
              .create({
                data: paymentData,
              });
            console.log("Payment Failed", event);
            break;
          default:
            break;
        }
        return ctx.send({ message: "Webhooks executed Successfully" }, 200);
      } else {
        ctx.send({ message: "Request is Not Legit" }, 400);
      }
    } catch (err) {
      console.log(err);
      ctx.send({ message: "Request is Not Legit" }, 500);
    }
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
        arrayProductVariants.push(entries);
      }
      return arrayProductVariants;
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
    try {
      console.log("Inside firebase Auth");
      console.log(ctx.request.body);
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
      const codOrders = await getCODOrdersCount(strapi);
      const prepaidOrders = await getPrepaidOrdersCount(strapi);
      const walletOrders = await getWalletOrdersCount(strapi);
      const products = await getProductsCount(strapi);
      const totalRevenue = await getTotalRevenue(strapi);

      const totalOrders =
        parseInt(codOrders) + parseInt(prepaidOrders) + parseInt(walletOrders);

      return ctx.send(
        {
          totalRevenue,
          totalUsers,
          totalOrders,
          products,
          subscribers,
          codOrders,
          prepaidOrders,
          walletOrders,
        },
        200
      );
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  generatePdfCatalogue: async (ctx, next) => {
    const path = require("path");
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
      const url = `https://admin.hangs.in/pdf-maker/${ids}/${phone}`;
      console.log(url);

      console.log("BROWSER STARTING: " + new Date().getTime());

      const outputPath = path.join(__dirname, `../../../../../pdfs/file.pdf`);
      // const page = await pdf_generator(url);
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
      const pdf = await page.pdf({
        // path: `../../../../../pdfs/${date}.pdf`,
        // path: `../../../../../pdfs/${date}.pdf`,
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
      // await browser.close();
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
      console.log(body);
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

      // if (parseFloat(body.amount) < parseInt(globalVar.withdrawLimit)) {
      //   return ctx.send(
      //     {
      //       message: `Entered amount must be greater than ${globalVar.withdrawLimit}`,
      //     },
      //     400
      //   );
      // }

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
              ifsc: data.ifscCode,
              account_number: data.accountNumber,
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
      return ctx.send({ message: "Payout Not Done" }, payoutSeller.status);
    } catch (err) {
      console.log(JSON.stringify(err));
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
  // addFakeDataProducts: async (ctx, next) => {
  //   try {
  //     let count = ctx.request.body.count;
  //     let category = ctx.request.body.category;
  //     let category_id = ctx.request.body.category_id;

  //     let pList = [];
  //     for (let i = 0; i < count; i++) {
  //       let thumbnailId = await getThumbnail(category);
  //       let gallery = await getGallery(count, category);
  //       let product = {
  //         slug: `product-${new Date().getTime()}`,
  //         name: faker.commerce.productName(),
  //         desc: faker.commerce.productDescription(),
  //         thumbnail: thumbnailId,
  //         gallery: gallery,
  //         // video: "string or id",
  //         category: category_id,
  //         // product_variants: ["string or id", "string or id"],
  //         // sub_category: "string or id",
  //       };

  //       const uploadProducts = await strapi.db
  //         .query("api::product.product")
  //         .create({ data: product });
  //       console.log(uploadProducts);
  //     }
  //     return ctx.send({ message: "OK" }, 200);
  //   } catch (err) {
  //     console.log(err);
  //     return ctx.send(err, 400);
  //   }
  // },

  // addFakeDataProductVariants: async (ctx, next) => {
  //   try {
  //     let count = ctx.request.body.count;
  //     let product = ctx.request.body.product;
  //     let price = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  //     let type = ctx.request.body.type;

  //     for (let i = 0; i < count; i++) {
  //       let variant = {
  //         name: await generateRandomVarType(type),
  //         quantity: Math.floor(Math.random() * 10),
  //         price,
  //         strikePrice:
  //           price + (Math.floor(Math.random() * (500 - 100 + 1)) + 100),
  //         premiumPrice:
  //           price - (Math.floor(Math.random() * (500 - 100 + 1)) + 100),
  //         isActive: true,
  //         product: product,
  //         // bulk_pricings,
  //       };
  //       const uploadProducts = await strapi.db
  //         .query("api::product-variant.product-variant")
  //         .create({ data: variant });
  //     }
  //     return ctx.send({ message: "OK" }, 200);
  //   } catch (err) {
  //     console.log(err);
  //     return ctx.send(err, 400);
  //   }
  // },

  // addFakeCategories: async (ctx, next) => {
  //   try {
  //     let count = ctx.request.body.count;
  //     for (let i = 0; i < count; i++) {
  //       let category_name = faker.commerce.department();
  //       let category = {
  //         slug: `category-${new Date().getTime()}`,
  //         name: category_name,
  //         thumbnail: await getThumbnail(category_name),
  //       };
  //       const uploadProducts = await strapi.db
  //         .query("api::category.category")
  //         .create({ data: category });
  //     }
  //     return ctx.send({ message: "Categories Created" });
  //   } catch (err) {
  //     console.log(err);
  //     return ctx.send(err, 400);
  //   }
  // },
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
