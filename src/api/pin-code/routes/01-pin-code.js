module.exports = {
  routes: [
    {
      method: "POST",
      path: "/pin-codes/bulk",
      handler: "pin-code.bulkCreate",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
  ],
};
