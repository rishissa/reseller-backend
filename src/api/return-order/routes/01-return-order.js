module.exports = {
  routes: [
    {
      method: "GET",
      path: "/users/return-orders",
      handler: "return-order.getReturnOrderRequests",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
  ],
};
