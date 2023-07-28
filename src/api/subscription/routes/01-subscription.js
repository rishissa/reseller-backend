module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom/subscriptions",
      handler: "subscription.getSingleUserSubscriptions",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/subscriptions",
      handler: "subscription.create",
      config: {
        policies: [],
        middlewares: [
          "api::subscription.check-sub-body",
          "api::subscription.check-subscription",
        ],
      },
    },
    {
      method: "POST",
      path: "/subscriptions/verify",
      handler: "subscription.verifySubPayment",
      config: {
        policies: [],
        middlewares: [
          "api::subscription.check-sub-body",
          "api::subscription.check-subscription",
        ],
      },
    },
  ],
};
