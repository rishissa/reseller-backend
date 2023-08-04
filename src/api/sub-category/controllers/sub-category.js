"use strict";

/**
 * sub-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const getPagination = (page, pageSize) => {
  if (!page && !pageSize) {
    return { limit: null, offset: null };
  } else {
    const limit = +pageSize;
    const offset = page * limit;

    return { limit, offset };
  }
};

module.exports = createCoreController(
  "api::sub-category.sub-category",
  ({ strapi }) => ({
    findOne: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;
        const sub_category = await strapi.db
          .query("api::sub-category.sub-category")
          .findOne({
            where: { id: id },
            populate: {
              thumbnail: true,
              category: true,
              products: {
                populate: {
                  thumbnail: true,
                  product_variants: true,
                },
              },
            },
          });
        return ctx.send(sub_category, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
    getAllSubCategories: async (ctx, next) => {
      try {
        const pagination = ctx.request.query;

        var sub_categories;
        var meta;
        if (Object.keys(pagination).length > 0) {
          const { limit, offset } = getPagination(
            pagination.pagination.page,
            pagination.pagination.size
          );
          sub_categories = await strapi.db
            .query("api::sub-category.sub-category")
            .findWithCount({
              orderBy: { id: "asc" },
              offset: offset,
              limit: limit,
              populate: {
                thumbnail: true,
              },
            });

          meta = {
            pagination: {
              page: pagination.pagination.page
                ? parseInt(pagination.pagination.page)
                : 1,
              pageSize: limit ? limit : sub_categories[1],
              pageCount: limit ? Math.ceil(sub_categories[1] / limit) : 1,
              total: sub_categories[1],
            },
          };
        } else {
          sub_categories = await strapi.db
            .query("api::sub-category.sub-category")
            .findWithCount({
              orderBy: { id: "asc" },
              populate: {
                thumbnail: true,
              },
            });
          meta = {
            pagination: {
              page: 1,
              pageSize: sub_categories[1],
              pageCount: 1,
              total: sub_categories[1],
            },
          };
        }
        return ctx.send({ data: sub_categories[0], meta }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
    getCustomDataSubCategories: async (ctx, next) => {
      try {
        const pagination = ctx.request.query;
        var sub_categories;

        // const recentSub = ctx.request.recentSub;

        // if (recentSub.plan.name === "Free") {
        // }

        sub_categories = await strapi.entityService.findMany(
          "api::sub-category.sub-category"
        );
        var meta;
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
              pageSize: limit ? limit : sub_categories.length,
              pageCount: limit ? Math.ceil(sub_categories.length / limit) : 1,
              total: sub_categories.length,
            },
          };
          sub_categories = await strapi.db
            .query("api::sub-category.sub-category")
            .findMany({
              orderBy: { id: "asc" },
              offset: offset,
              limit: limit,
              fields: ["name", "id"],
            });
        } else {
          meta = {
            pagination: {
              page: 1,
              pageSize: sub_categories.length,
              pageCount: 1,
              total: sub_categories.length,
            },
          };
          sub_categories = await strapi.db
            .query("api::sub-category.sub-category")
            .findMany({
              fields: ["name", "id"],
              orderBy: { id: "asc" },
            });
        }
        return ctx.send({ sub_categories, meta }, 200);
        // return { recentSub };
      } catch (err) {
        return ctx.send(err, 400);
      }
    },
  })
);
