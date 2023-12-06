"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In product filter middleware.");
    //get queries
    const key = ctx.request.query;

    const keys_list = ["category", "price", "sortBy"];
    let price_list = ["min", "max"];
    let sortBy_list = ["price", "date"];
    let sortBy_values = ["asc", "desc"];
    let price_sortBy_list = ["low-high", "high-low"];

    let keys = Object.keys(key);

    var filters = [];
    var sort = {};
    //check if any invalid key is passed
    for (const k of keys) {
      // if (!keys_list.includes(k)) {
      //   return ctx.send(
      //     {
      //       message: `Invalid Key ${k} Passed. Only [${keys_list}] keys are allowed`,
      //     },
      //     400
      //   );
      // }
      //   check if the values passed are valid
      switch (k) {
        case "category":
          filters.push({ category: { id: { $in: JSON.parse(key.category) } } });
          break;
        case "price":
          filters.push({
            product_variants: {
              $and: [
                { price: { $gte: key.price.min || 0 } },
                { price: { $lt: key.price.max } },
              ],
            },
          });
          break;
        case "sortBy":
          //check if keys passed in sortBy are valid
          if (!sortBy_list.includes(Object.keys(key.sortBy)[0])) {
            return ctx.send(
              {
                message: `Invalid key passed to sortBy. Only [${sortBy_list}] are allowed`,
              },
              400
            );
          }
          //checking if sortBy has newest or oldest key
          if (Object.keys(key.sortBy)[0] === "date") {
            if (!sortBy_values.includes(key.sortBy.date)) {
              return ctx.send(
                {
                  message: `Invalid value passed to sortBy[date]. Only [${sortBy_values}] are allowed`,
                },
                400
              );
            }
            sort = { createdAt: key.sortBy.date };
          } else {
            sort = {
              product_variants: {
                price: key.sortBy.price === "low-high" ? "asc" : "desc",
              },
            };
          }
          break;
        case "search":
          let search_key = ctx.request.query.search;
          filters.push({
            $or: [
              {
                desc: {
                  // $startsWith: key,
                  $containsi: search_key,
                },
              },
              {
                name: {
                  // $startsWith: key,
                  $containsi: search_key,
                },
              },
            ],
          });
        default:
          break;
      }
    }
    filters.push({ isActive: true }, { category: { name: { $not: null } } });

    ctx.request.filters = filters;
    ctx.request.sort = sort;
    await next();
  };
};
