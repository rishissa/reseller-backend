module.exports = {
  routes: [
    {
      method: "POST",
      path: "/admin-subscription/verify",
      handler: "admin-subscription.verifySubscription",
    },
  ],
};
