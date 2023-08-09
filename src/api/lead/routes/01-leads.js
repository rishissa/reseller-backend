module.exports = {
  routes: [
    {
      method: "POST",
      path: "/leads",
      handler: "lead.create",
      config: {
        policies: [],
        middlewares: ["api::lead.lead-body-validation"], //query validator
      },
    },
  ],
};
