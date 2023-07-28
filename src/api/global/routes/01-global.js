module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom/settings",
      handler: "global.addSettingsAdmin",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
