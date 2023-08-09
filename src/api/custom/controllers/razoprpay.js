module.exports = {
  webHook: async (ctx, next) => {
    console.log(JSON.stringify(ctx.request.body));
    try {
      var paymentDetails = JSON.parse(JSON.stringify(ctx.request.body));
      var paymentCaptured =
        paymentDetails.event === "payment.captured" ? true : false;
      let event = paymentDetails.event;
      let payment_method_rzp = paymentDetails.payload.payment.entity.method;
      const secret = "razor@123";
      console.log("Inside WebHooks");
      const shasum = crypto.createHmac("sha256", secret);
      shasum.update(JSON.stringify(ctx.request.body));
      const digest = shasum.digest("hex");
      const rzpOrder = JSON.stringify(ctx.request.body);

      if (digest === ctx.request.headers["x-razorpay-signature"]) {
        const order = await strapi.db
          .query("api::order-product.order-product")
          .findOne({
            where: {
              rzpayOrderId: paymentDetails.payload.payment.entity.order_id,
            },
          });

        var entryPaymentLog;
        var paymentData;
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
            order: [order.id],
          };
        }
        if (payment_method_rzp === payment_method.NET_BANKING) {
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
            order: [order.id],
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
            order: [order.id],
          };
        }
        switch (event) {
          case "payment.authorized":
            console.log("Payment Authorized", event);
            console.log(order);
            paymentData.status = PaymentStatus.captured;
            entryPaymentLog = await strapi.entityService.create(
              "api::payment-log.payment-log",
              {
                data: paymentData,
              }
            );
            break;
          case "payment.captured":
            console.log("Payment Captured", event);
            if (order.isPaid === false) {
              console.log(entryPaymentLog);
              const entry = await strapi.db
                .query("api::order-product.order-product")
                .update({
                  where: {
                    rzpayOrderId: rzpOrder.payload.payment.entity.order_id,
                  },
                  data: {
                    isPaid: true,
                    paymentID: rzpOrder.payload.payment.entity.id,
                    paymentSignature:
                      ctx.request.headers["x-razorpay-signature"],
                  },
                });
            }
            //role based operations
            //firebase otp verification
            //email templating
            //webhook complete testing
            break;
          case "payment.failed":
            const entryPaymentFailed = await strapi.entityService.create(
              "api::payment-log.payment-log",
              {
                data: paymentData,
              }
            );
            console.log("Payment Failed", event);
            break;
          default:
            break;
        }
      } else {
        ctx.send(
          {
            message: "Request is Not Legit",
          },
          400
        );
      }
      ctx.send(
        {
          message: "Webhooks executed Successfully",
        },
        200
      );
    } catch (err) {
      // else {
      ctx.send(
        {
          message: "Request is Not Legit",
        },
        500
      );
      // }
      // return err;
    }
  },
};
