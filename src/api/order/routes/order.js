"use strict";

/**
 * order router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::order.order");

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
    path: "/custom/getOrders",
    handler: "order.getOrders",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "POST",
    path: "/custom/checkout",
    handler: "order.createMultipleOrders",
    config: {
      policies: [],
      middlewares: [
        "api::order.check-order-body",
        "api::custom.check-user-plan",
        "api::custom.variant-qty-checker",
        //check user's plan
      ],
    },
  },
  {
    method: "POST",
    path: "/custom/acceptOrder",
    handler: "order.acceptOrder",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "POST",
    path: "/custom/rejectOrder",
    handler: "order.rejectOrder",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "POST",
    path: "/custom/verifyPaymentOrder",
    handler: "order.verifyPaymentOrder",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/custom/orders",
    handler: "order.getOrdersByStatus",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/custom/orders/stats",
    handler: "order.ordersDashboard",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "POST",
    path: "/reseller/payout",
    handler: "order.payoutReseller",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/search/orders",
    handler: "order.searchInOrders",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "PUT",
    path: "/orders/:id/update",
    handler: "order.setOrderStatusDelivered",
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/orders/all/date",
    handler: "order.getOrdersByDate",
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);

// module.exports = createCoreRouter('api::order.order');
