module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom/categories",
      handler: "category.allCategories",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/custom/categories/:id",
      handler: "category.oneCategoryFullInfo",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/custom/category/:id",
      handler: "category.searchProdInCategories",
      config: {
        policies: [],
        middlewares: [], //query && params validator
      },
    },
    {
      method: "PUT",
      path: "/custom/category/:id",
      handler: "category.updateCategory",
      config: {
        policies: [],
        middlewares: [], //query && params validator
      },
    },
  ],
};
