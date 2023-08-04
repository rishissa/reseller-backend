'use strict';

/**
 * cart-product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter("api::cart-product.cart-product");

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
    method: "POST",
    path: "/cart-product",
    handler: "cart-product.addToUserCart",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/cart-product",
    handler: "cart-product.getUserCart",
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);

// module.exports = createCoreRouter('api::cart-product.cart-product');
