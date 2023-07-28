module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom/banners",
      handler: "banner.addBanner",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/custom/banners/all",
      handler: "banner.getBanners",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
  ],
};
