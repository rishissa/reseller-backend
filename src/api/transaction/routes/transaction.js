"use strict";

/**
 * transaction router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::transaction.transaction");

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
    method: "GET",
    path: "/users/:id/transactions",
    handler: "transaction.getUsersTransactions",
    config: {
      policies: [],
      middlewares: [],
    },
  },
];


module.exports = customRouter(defaultRouter, myExtraRoutes);
// module.exports = createCoreRouter('api::transaction.transaction');
