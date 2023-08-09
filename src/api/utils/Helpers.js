const crypto = require("crypto");
const addCommission = (amount) => {
  const percentage = 2;
  const totalAmount = amount + (amount * percentage) / 100;
  return totalAmount;
};

const createActivity = async (data, strapi) => {
  console.log(data);
  const body = {
    event: data.event,
    user: data.user,
    description: data.description,
  };

  const activity = await strapi.db
    .query("api::activity-log.activity-log")
    .create({ data: body });
  return activity;
};

const uid = () => {
  const length = 5; // Adjust the length as needed
  const randomBytes = crypto.randomBytes(length);
  const orderID = "ORD" + randomBytes.toString("hex").toUpperCase();
  return orderID;
};

module.exports = {
  commission: addCommission,
  createActivity,
  generateOrderUid: uid,
};
