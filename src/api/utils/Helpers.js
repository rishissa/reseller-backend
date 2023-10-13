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

const shippingPriceCalculation = (amount, per) => {
  const percentage = per;
  const totalAmount = amount + (amount * percentage) / 100;
  return parseFloat((totalAmount - amount).toFixed(2));
};

const generateOTP = () => {
  // Generate a random 6-digit number
  const min = 100000;
  const max = 999999;
  const otp = Math.floor(Math.random() * (max - min + 1)) + min;

  // Ensure the OTP is exactly 6 digits by converting it to a string
  return otp.toString();
};

module.exports = {
  commission: addCommission,
  createActivity,
  generateOrderUid: uid,
  shippingPriceCalculation,
  generateOTP,
};
