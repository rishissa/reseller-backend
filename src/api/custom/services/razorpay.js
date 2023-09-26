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

const {
  payment_method,
  order_status,
} = require("../../../../config/constants");

const getPaymentData = (data) => {
  var paymentData;
  const { type, paymentDetails, order } = data

  let payment_method_rzp = paymentDetails.payload.payment.entity.method;

  if (payment_method_rzp === payment_method.UPI) {
    paymentData = {
      rzOrderCreationId: paymentDetails.payload.payment.entity.order_id,
      rzpaymentId: paymentDetails.payload.payment.entity.id,
      amount: paymentDetails.payload.payment.entity.amount / 100,
      email: paymentDetails.payload.payment.entity.email,
      contact: paymentDetails.payload.payment.entity.contact,
      currency: paymentDetails.payload.payment.entity.currency,
      status: paymentDetails.payload.payment.entity.status.toUpperCase(),
      method: payment_method_rzp,
      vpa: paymentDetails.payload.payment.entity.vpa,
      order: (type === "order" ? order.id : null),
      subscription: (type === "subs" ? order.id : null),
    };
  } else if (payment_method_rzp === payment_method.NET_BANKING) {
    paymentData = {
      rzOrderCreationId: paymentDetails.payload.payment.entity.order_id,
      rzpaymentId: paymentDetails.payload.payment.entity.id,
      amount: paymentDetails.payload.payment.entity.amount / 100,
      email: paymentDetails.payload.payment.entity.email,
      contact: paymentDetails.payload.payment.entity.contact,
      currency: paymentDetails.payload.payment.entity.currency,
      status: paymentDetails.payload.payment.entity.status.toUpperCase(),
      method: payment_method_rzp,
      bank: paymentDetails.payload.payment.entity.bank,
      order: (type === "order" ? order.id : null),
      subscription: (type === "subs" ? order.id : null),
    };
  } else {
    paymentData = {
      rzOrderCreationId: paymentDetails.payload.payment.entity.order_id,
      rzpaymentId: paymentDetails.payload.payment.entity.id,
      amount: paymentDetails.payload.payment.entity.amount / 100,
      email: paymentDetails.payload.payment.entity.email,
      contact: paymentDetails.payload.payment.entity.contact,
      currency: paymentDetails.payload.payment.entity.currency,
      status: paymentDetails.payload.payment.entity.status.toUpperCase(),
      method: payment_method_rzp,
      cardId: paymentDetails.payload.payment.entity.card_id,
      cardNumber:
        "**** **** **** " +
        paymentDetails.payload.payment.entity.card.last4,
      cardType: paymentDetails.payload.payment.entity.card.type,
      cardNetwork: paymentDetails.payload.payment.entity.card.network,
      order: (type === "order" ? order.id : null),
      subscription: (type === "subs" ? order.id : null),
    };
  }

  return paymentData;

}

module.exports = { razorpayService, getPaymentData };
