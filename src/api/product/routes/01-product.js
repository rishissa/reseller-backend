module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom/products/random",
      handler: "product.getNRandomProducts",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "POST",
      path: "/custom/selected-products",
      handler: "product.selectedProducts",
      config: {
        policies: [],
        middlewares: ["api::custom.body-middleware"], //body validator
      },
    },
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/custom/products/:id",
      handler: "product.getSingleProduct",
      config: {
        policies: [],
        middlewares: ["api::custom.custom-middleware"], //params validator
      },
    },
    {
      method: "GET",
      path: "/custom/all-products",
      handler: "product.allProducts",
      config: {
        policies: [],
        middlewares: [
          "api::custom.query-middleware",
          "api::subscription.check-subscription",
          //check user's plan
        ], //query validator
      },
    },
    {
      method: "GET",
      path: "/custom/search_products/:key",
      handler: "product.searchInAllProducts",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/products/rs/:id",
      handler: "product.getProductWithoutPricing",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/products/rs/:id",
      handler: "product.getProductWithoutPricing",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/all-products",
      handler: "product.findAllProducts",
      config: {
        policies: [],
        middlewares: ["api::product.product-filters"],
      },
    },
  ],
};
