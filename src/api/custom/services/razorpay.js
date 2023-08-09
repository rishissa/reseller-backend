const Razorpay = require("razorpay");
const axios = require("axios");

const razorpayService = {
  createOrder: async (key_id, key_secret, totalAmount) => {
    var instance = new Razorpay({
      key_id: key_id,
      key_secret: key_secret,
    });

    try {
      var razorpayInfo = await instance.orders.create({
        amount: parseInt(totalAmount) * 100,
        currency: "INR",
      });
      return razorpayInfo;
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  payoutService: async (schema, key_id, key_secret) => {
    try {
      const payoutSeller = await axios.post(
        "https://api.razorpay.com/v1/payouts",
        schema,
        {
          auth: {
            username: key_id,
            password: key_secret,
          },
        }
      );
      return payoutSeller;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

module.exports = razorpayService;
