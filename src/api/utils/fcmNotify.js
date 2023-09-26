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
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
  // try {
  //   const notification = await strapi.db
  //     .query("api::notification.notification")
  //     .findOne({
  //       where: { id: id },
  //       populate: {
  //         image: true,
  //       },
  //     });
  //   const payload = await strapi
  //     .query("plugin::strapi-plugin-fcm.fcm-notification")
  //     .create({
  //       data: {
  //         title: data.title,
  //         body: data.body,
  //         image: domain + notification.image.url.url,
  //         payload: "",
  //         // targetType: "topics",
  //         targetType: "tokens",
  //         target: token,
  //         //or multiple topics "target": "client_android,client_ios",
  //         //or "target": "eyJhbGciOiJFUzI1...",
  //         //publishedAt: null //<<- uncomment this if you want to just add an entry as a draft to 'FCM Notification' collection without publishing and sending FCM.
  //       },
  //     });
  //   data["image"] = domain + notification.image.url;
  //   console.log(data);
  //   console.log(jwt);
  //   const send = await axios.post(
  //     "https://api.hangs.in/api/strapi-plugin-fcm/fcm-notifications/send",
  //     {
  //       data: {
  //         title: data.title,
  //         body: data.body,
  //         image: domain + notification.image.url,
  //         payload: {
  //           notification: {
  //             title: data.title,
  //           },
  //         },
  //         // targetType: "topics",
  //         targetType: "tokens",
  //         target: token,
  //       },
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${jwt}`,
  //       },
  //     }
  //   );

  //   // console.log(list);
  //   return send;
  // } catch (err) {
  //   console.log(err);
  //   return err;
  // }
};

module.exports = { fcmNotify };
