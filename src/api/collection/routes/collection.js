"use strict";

/**
 * collection router
 **/

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::collection.collection");

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
    path: "/collection/:id",
    handler: "collection.getCollection",
    config: {
      policies: [],
      middlewares: [
        "api::custom.custom-middleware",
        "api::custom.query-middleware",
      ], //query && params validation
    },
  },
  // {
  //   method: "GET",
  //   path: "/collections/all",
  //   handler: "collection.getAllCollections",
  //   config: {
  //     policies: [],
  //     middlewares: ["api::custom.query-middleware"], //query validation
  //   },
  // },
  {
    method: "POST",
    path: "/collection",
    handler: "collection.getCollectionByTag",
    config: {
      policies: [],
      middlewares: [], //query validation
    },
  },
  {
    method: "GET",
    path: "/custom/collection/:id",
    handler: "collection.searchProdInCollections",
    config: {
      policies: [],
      middlewares: [], //query validation
    },
  },
  {
    method: "GET",
    path: "/search/collections",
    handler: "collection.searchInCollections",
    config: {
      policies: [],
      middlewares: [], //query validation
    },
  },
  {
    method: "POST",
    path: "/collections",
    handler: "collection.create",
    config: {
      prefix: "",
    },
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
// module.exports = createCoreRouter('api::collection.collection');
