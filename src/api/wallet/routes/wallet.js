"use strict";

/**
 * wallet router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::wallet.wallet");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "PUT",
    path: "/users/:id/deposit",
    handler: "wallet.walletDebit",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "PUT",
    path: "/users/:id/credit",
    handler: "wallet.walletCredit",
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);

// module.exports = createCoreRouter('api::wallet.wallet');
