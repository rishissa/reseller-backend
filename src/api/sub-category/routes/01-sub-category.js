module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sub-category/all",
      handler: "sub-category.getAllSubCategories",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/sub-categories/all",
      handler: "sub-category.getCustomDataSubCategories",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
  ],
};
