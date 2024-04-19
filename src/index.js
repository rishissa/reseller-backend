"use strict";
const admin = require("firebase-admin");
const serviceAccount = require("../config/resell-demo-otpauth-firebase-adminsdk-vys9k-5e6f672759.json");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register() {
    // return strapi.db.query("api::global.global").create({
    //   data: {
    //     subscriptionPrice: 499.99,
    //     codPrepaidAmount: 150,
    //     shippingPrice: 100,
    //     razorpayKey: "rzp_test_WQeNCv2phuFqQs",
    //     razorpaySecret: "DKWiuLogW1LKIQJ1vYiTJv00",
    //   },
    // });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // Your Firebase admin SDK configuration
    });
  },
};
