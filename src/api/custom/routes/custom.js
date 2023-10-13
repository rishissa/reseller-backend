module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom/webhooks",
      handler: "custom.webHook",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/custom/selectedProductVariant",
      handler: "custom.selectedProductVariant",
      config: {
        policies: [],
        middlewares: [], //body validator
      },
    },
    {
      method: "POST",
      path: "/custom/listOrders",
      handler: "custom.listOrdersByTags",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/custom/listOrder",
      handler: "custom.listOrder",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/custom/getUser",
      handler: "custom.getUser",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PATCH",
      path: "/custom/editUser",
      handler: "custom.updateUser",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/custom/forgot-password",
      handler: "custom.forgotPasswordMail",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/custom/verify-token",
      handler: "custom.validateToken",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PATCH",
      path: "/custom/change-password",
      handler: "custom.changePassword",
      config: {
        policies: [],
        middlewares: [],
      },
    },

    {
      method: "POST",
      path: "/custom/user/verify",
      handler: "custom.firebasePhoneAuthVerify",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/custom/user/update-password",
      handler: "custom.forgotPasswordPhone",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/custom/admin/stats",
      handler: "custom.dashboardStats",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/catalogue/:id/:phone",
      handler: "custom.generatePdfCatalogue",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/orders/export/:id",
      handler: "custom.generateOrderDetailsPdfCatalogue",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/orders/recent",
      handler: "custom.getRecentOrders",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/products/recent",
      handler: "custom.getRecentlyAddedProducts",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/users/fcm",
      handler: "custom.updateUserFcmToken",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/users/stats",
      handler: "custom.getResellerDashboardStats",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/users/withdraw",
      handler: "custom.resellerWithdraw",
      config: {
        policies: [],
        middlewares: ["api::custom.validate-payout"],
      },
    },
    {
      method: "GET",
      path: "/users/search",
      handler: "custom.searchInUsers",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/users/:token/notifications",
      handler: "custom.getUserInfoByToken",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/users/shares/:shares",
      handler: "custom.updateUsersShares",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/users/otp/send",
      handler: "custom.sendOTP",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
