const { payment_methods } = require("../../../config/constants");

const bulkPriceVariants = async (plan, user, products, consumer_body) => {
  try {
    console.log(consumer_body);
    //check which product variant has bulkPricing
    //if have ==> the calculate amount with that bulk pricing
    //else calculate pricing as you were doing before
    var totalAmount = 0;
    var variantPrice = {};

    for (const prod of products) {
      if (prod.bulk_pricings.length === 0) {
        if (plan.name !== "Free") {
          if (plan.premiumPricing === true && user.isPremium === true) {
            totalAmount +=
              parseFloat(prod.quantity) *
              (parseFloat(prod.premiumPrice) || parseFloat(prod.price));
            variantPrice[prod.id] =
              parseFloat(prod.quantity) *
              (parseFloat(prod.premiumPrice) || parseFloat(prod.price));
          } else {
            totalAmount += parseFloat(prod.quantity) * parseFloat(prod.price);
            variantPrice[prod.id] =
              parseFloat(prod.quantity) * parseFloat(prod.price);
          }
        } else {
          let payment_mode = consumer_body.payment_mode;
          if (payment_mode !== payment_methods.cod) {
            totalAmount += parseFloat(prod.quantity) * parseFloat(prod.price);
            variantPrice[prod.id] =
              parseFloat(prod.quantity) * parseFloat(prod.price);
          } else {
            totalAmount = 0;
            return { totalAmount, variantPrice };
          }
        }
      } else {
        //check the quantity where it lies in which bulk_pricing category
        for (const it of prod.bulk_pricings) {
          if (prod.quantity >= it.from && prod.quantity < it.to) {
            totalAmount += parseFloat(prod.quantity) * parseFloat(it.price);
            // console.log(prod.id);
            variantPrice[prod.id] =
              parseFloat(prod.quantity) * parseFloat(it.price);
            // console.log(variantPrice);
          }
        }

        let maxBulkPricingQty = prod.bulk_pricings.reduce(
          (maxTo, currentObj) => {
            return Math.max(maxTo, currentObj.to);
          },
          -Infinity
        );
        let minBulkPricingQty = prod.bulk_pricings.reduce(
          (maxTo, currentObj) => {
            return Math.min(maxTo, currentObj.from);
          },
          +Infinity
        );

        if (prod.quantity > maxBulkPricingQty) {
          let maxToObj = prod.bulk_pricings[0];

          for (let i = 0; i < prod.bulk_pricings.length; i++) {
            if (prod.bulk_pricings[i].to > maxToObj.to) {
              maxToObj = prod.bulk_pricings[i];
            }
          }
          variantPrice[prod.id] =
            parseInt(prod.quantity) * parseFloat(maxToObj.price);
          //calculate max final quantity price with qty
          // return {
          //   message: "The given quantity is not available in bulk pricing ",
          // };
        } else if (prod.quantity < minBulkPricingQty) {
          totalAmount += parseFloat(prod.quantity) * parseFloat(prod.price);

          variantPrice[prod.id] =
            parseInt(prod.quantity) * parseFloat(prod.price);
        }
      }
    }
    return { totalAmount, variantPrice };
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { bulkPriceVariants };
