const bulkPriceVariants = async (plan, user, products) => {
  try {
    //check which product variant has bulkPricing
    //if have ==> the calculate amount with that bulk pricing
    //else calculate pricing as you were doing before
    var totalAmount = 0;
    var variantPrice = {};

    products.forEach((prod) => {
      if (prod.bulk_pricings.length === 0) {
        if (plan) {
          if (plan.premiumPricing === true && user.isPremium === true) {
            totalAmount +=
              parseFloat(prod.quantity) * parseFloat(prod.premiumPrice);
            variantPrice[prod.id] =
              parseFloat(prod.quantity) * parseFloat(prod.premiumPrice);
          } else {
            totalAmount += parseFloat(prod.quantity) * parseFloat(prod.price);
            variantPrice[prod.id] =
              parseFloat(prod.quantity) * parseFloat(prod.price);
          }
        } else {
          totalAmount += parseFloat(prod.quantity) * parseFloat(prod.price);
          variantPrice[prod.id] =
            parseFloat(prod.quantity) * parseFloat(prod.price);
        }
      } else {
        //check the quantity where it lies in which bulk_pricing category
        prod.bulk_pricings.map((it) => {
          if (prod.quantity >= it.from && prod.quantity <= it.to) {
            totalAmount += parseFloat(prod.quantity) * parseFloat(it.price);
            variantPrice[prod.id] =
              parseFloat(prod.quantity) * parseFloat(it.price);
          }
        });
        if (totalAmount === 0) {
          totalAmount += parseFloat(prod.quantity) * parseFloat(prod.price);
          variantPrice[prod.id] =
            parseFloat(prod.quantity) * parseFloat(prod.price);
        }
      }
    });

    return { totalAmount, variantPrice };
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { bulkPriceVariants };
