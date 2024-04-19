module.exports = {
  routes: [
    {
      method: "POST",
      path: "/carts",
      handler: "cart.create",
      config: {
        policies: [],
        middlewares: ["api::cart.cart-body-validation"],
      },
    },
    {
      method: "DELETE",
      path: "/carts/:cart_id/product_variant/:variant_id",
      handler: "cart.deleteCartProducts",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
