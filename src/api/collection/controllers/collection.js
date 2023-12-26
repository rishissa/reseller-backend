"use strict";

const { activity_status } = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");
const { getPagination } = require("../../utils/Pagination");

/**
 * collection controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::collection.collection",
  ({ strapi }) => ({
    searchProdInCollections: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;
        const filters = ctx.request.filters;
        const sort = ctx.request.sort;
        var meta;
        const collectionProds = await strapi.db
          .query("api::collection.collection")
          .findOne({
            where: { id: id },
            populate: {
              products: {
                populate: {
                  thumbnail: true,
                  product_variants: true,
                },
                orderBy: sort,
                where: {
                  $and: filters,
                },
              },
            },
          });
        meta = {
          total: collectionProds.products.length,
        };
        // const products = await strapi
        return { collectionProds, meta };
      } catch (err) {
        console.log(err);
        return err;
      }
    },

    find: async (ctx, next) => {
      try {
        const pagination = ctx.request.query;
        var collections;
        var allCollections;
        var meta;

        const getCollection = async (offset, limit) => {
          const collections = await strapi.db
            .query("api::collection.collection")
            .findMany({
              offset: offset,
              limit: limit,
              orderBy: { id: "asc" },
              populate: {
                thumbnail: true,
                products: {
                  where: { isActive: true },
                  populate: {
                    thumbnail: true,
                    product_variants: true,
                  },
                },
              },
            });
          return collections;
        };

        if (Object.keys(pagination).length > 0) {
          const { limit, offset } = getPagination(
            pagination.pagination.page,
            pagination.pagination.size
          );

          allCollections = await getCollection(offset, limit);
          meta = {
            pagination: {
              page:
                parseInt(pagination.pagination.page) < 1
                  ? 1
                  : parseInt(pagination.pagination.page),
              pageSize: limit,
              pageCount: Math.ceil(allCollections.length / limit),
              total: allCollections.length,
            },
          };
        } else {
          allCollections = await getCollection(null, null);
          meta = {
            pagination: {
              page: 1,
              pageSize: allCollections.length,
              pageCount: 1,
              total: allCollections.length,
            },
          };
        }
        return ctx.send({ data: allCollections, meta }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    async create(ctx, next) {
      try {
        const response = await super.create(ctx);
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);
        //create activity
        let activity_data = {
          event: activity_status.new_collection,
          user: id,
          description: `New Collection ${response.data.attributes.name} Added`,
        };

        const activity = createActivity(activity_data, strapi);
        return ctx.send(response.data, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    getCollection: async (ctx, next) => {
      var id = ctx.request.params.id;
      var allProducts;

      try {
        await strapi.entityService
          .findOne("api::collection.collection", parseInt(id), {
            populate: {
              products: {
                populate: {
                  thumbnail: true,
                  product_variants: true,
                },
              },
            },
          })
          .then((result) => {
            allProducts = result;
          })
          .catch((err) => {
            return err;
          });

        return allProducts;
      } catch (err) {
        return err;
      }
    },

    getCollectionByTag: async (ctx, next) => {
      let tag = ctx.request.body.tag;
      try {
        let listOfTagProducts = await strapi.db
          .query("api::collection.collection")
          .findOne({
            where: {
              tag: tag,
            },
            populate: {
              products: {
                populate: {
                  thumbnail: true,
                  product_variants: true,
                },
              },
            },
          });
        return listOfTagProducts;
      } catch (err) {
        console.log(err);
        return err;
      }
    },

    searchInCollections: async (ctx, next) => {
      try {
        const key = ctx.request.query.qs;
        const getCollectionData = async (offset, limit) => {
          const list = await strapi.db
            .query("api::collection.collection")
            .findMany({
              where: {
                $or: [
                  {
                    name: {
                      $containsi: key,
                    },
                  },
                  {
                    tag: {
                      $containsi: key,
                    },
                  },
                  {
                    products: {
                      $or: [
                        {
                          name: {
                            $containsi: key,
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            });
          return list;
        };

        let products = await getCollectionData(null, null);
        return ctx.send({ data: products }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
