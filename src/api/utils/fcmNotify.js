const axios = require("axios");
// import fetch from "node-fetch";
const { baseURL, domain } = require("../../../config/constants");
const firebase = require("firebase-admin");

const fcmNotify = async (data, token, id) => {
  try {
    const notification = await strapi.db
      .query("api::notification.notification")
      .findOne({
        where: { id: id },
        populate: {
          image: true,
        },
      });
    let message = {
      data: {
        title: data.title,
        body: data.body,
        image: notification.image ? `${domain}${notification.image.url}` : "",
        // message: "Hello, how are you?",
      },
      // token: token,
    };
    message[data.targetType] = data.targetValue;
    const response = await firebase.messaging().send(message);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { fcmNotify };
