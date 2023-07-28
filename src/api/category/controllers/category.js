"use strict";

/**
 * category controller
 */
const getPagination = (page, pageSize) => {
  if (!page && !pageSize) {
    return { limit: null, offset: null };
  } else {
    // const limit = pageSize ? +pageSize : 3;
    // const offset = page ? (page-1)*limit : 1;
    const limit = +pageSize;
    const offset = (page - 1) * limit;

    return { limit, offset };
  }
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    //all categories
    allCategories: async (ctx, next) => {
      try {
        console.log("Hello from categories");
        const pagination = ctx.request.query;
        var categories;
        var allCategories;
        var meta;

        allCategories = await strapi.db
          .query("api::category.category")
          .findMany({
            orderBy: { id: "asc" },
            fields: ["name", "slug", "id"],
            populate: {
              thumbnail: true,
              product_variants: true,
            },
          });
        if (Object.keys(pagination).length > 0) {
          const { limit, offset } = getPagination(
            pagination.pagination.page,
            pagination.pagination.size
          );
          meta = {
            pagination: {
              page: pagination.pagination.page
                ? parseInt(pagination.pagination.page)
                : 1,
              pageSize: limit,
              pageCount: Math.ceil(allCategories.length / limit),
              total: allCategories.length,
            },
          };
          categories = await strapi.db
            .query("api::category.category")
            .findMany({
              orderBy: { id: "asc" },
              offset: offset,
              limit: limit,
              fields: ["name", "slug", "id"],
              populate: {
                thumbnail: true,
                product_variants: true,
              },
            });
        } else {
          meta = {
            pagination: {
              page: 1,
              pageSize: allCategories.length,
              pageCount: 1,
              total: allCategories.length,
            },
          };
          categories = allCategories;
        }

        return { categories, meta };
      } catch (err) {
        return err;
      }
    },

    //category full name
    oneCategoryFullInfo: async (ctx, next) => {
      try {
        let id = parseInt(ctx.request.params.id);
        const pagination = ctx.request.query;
        var products;
        var allProducts;
        var meta;

        allProducts = await strapi.db.query("api::category.category").findOne({
          where: { id: id },
          populate: {
            thumbnail: true,
            sub_categories: {
              populate: {
                thumbnail: true,
              },
            },
            products: {
              orderBy: { id: "asc" },
              populate: {
                thumbnail: true,
                product_variants: true,
              },
            },
          },
        });
        return allProducts;
      } catch (err) {
        return err;
      }
    },

    //search products in categories
    searchProdInCategories: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;
        const key = ctx.request.query.product;
        var meta;
        const categoryProds = await strapi.entityService.findOne(
          "api::category.category",
          id,
          {
            populate: {
              products: {
                filters: {
                  $or: [
                    {
                      name: {
                        $containsi: key,
                      },
                    },
                    {
                      desc: {
                        $containsi: key,
                      },
                    },
                  ],
                },
                populate: {
                  thumbnail: true,
                  product_variant: true,
                },
              },
            },
          }
        );
        meta = {
          total: categoryProds.products.length,
        };
        // const products = await strapi
        return { categoryProds, meta };
      } catch (err) {
        return err;
      }
    },

    //edit category
    updateCategory: async (ctx, next) => {
      try {
        const id = ctx.params.id;
        const body = ctx.request.body;

        const resp = await strapi.query("api::category.category").update({
          where: {
            id: id,
          },
          data: { body },
        });
      } catch (err) {
        console.log(err);
        return err;
      }
    },

    //delete category
    deleteCategory: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;
      } catch (err) {
        console.log(err);
        ctx.send(err, 400);
      }
    },
  })
);
