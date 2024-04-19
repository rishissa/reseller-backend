"use strict";

const { payment_methods } = require("../../../../config/constants");

/**
 * `variant-qty-checker` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In variant-qty-checker middleware.");

    let products = ctx.request.body.products;

    let arrayOfProds = [];
    //fetch all product-variants and check if the qty given is available for the variants or not
    for await (const prod of products) {
      const variant = await strapi.entityService.findOne(
        "api::product-variant.product-variant",
        parseInt(prod.product_variant_id),
        {
          populate: {
            product: true,
            bulk_pricings: true,
          },
        }
      );
      console.log("variant");
      console.log(variant);
      if (variant.product.isActive === false) {
        return ctx.send(
          {
            message: `Unable to place order as ${variant.product.name} is InActive`,
          },
          400
        );
      }
      if (prod.quantity > variant.quantity) {
        return ctx.send(
          {
            message: `Given quantity is unavailable for variant ${variant.name}`,
          },
          400
        );
      }

      //check if cod is enabled for this product
      if (
        (variant.product.cod_enabled === false ||
          variant.product.cod_enabled === null) &&
        ctx.request.body.consumer.payment_mode === payment_methods.cod
      ) {
        return ctx.send(
          {
            message: `COD is not enabled in the product ${variant.product.name} VariantID:${variant.id}`,
          },
          400
        );
      }

      variant.org_qty = variant.quantity;
      variant.quantity = prod.quantity;
      arrayOfProds.push(variant);
    }
    ctx.request.arrayOfProds = arrayOfProds;
    await next();
  };
};
