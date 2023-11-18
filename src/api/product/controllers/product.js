"use strict";

const {
  baseURL,
  activity_status,
  notify_type,
} = require("../../../../config/constants");
const axios = require("axios");
/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { getPagination } = require("../../utils/Pagination");
const { createActivity } = require("../../utils/Helpers");
const { fcmNotify } = require("../../utils/fcmNotify");
const { genProdSlug } = require("../../utils/ProductSlugGen");

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async create(ctx, next) {
    try {
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);
      console.log("Into Changing Defaults Products API");
      const variants = ctx.request.body.data.variants;
      ctx.request.body.data.slug = genProdSlug(ctx.request.body.data.name);

      var response;
      try {
        response = await super.create(ctx);
      } catch (err) {
        return ctx.send(err, 400);
      }
      //create variant
      var newVariants = [];
      // console.log(variants[0].bulk_pricings);
      for (const prod of variants) {
        prod["product"] = response.data.id;
        let i_prod = (({
          name,
          quantity,
          price,
          strikePrice,
          premiumPrice,
          isActive,
          product,
        }) => ({
          name,
          quantity,
          price,
          strikePrice,
          premiumPrice,
          isActive,
          product,
        }))(prod);
        const newVariant = await strapi.db
          .query("api::product-variant.product-variant")
          .create({ data: i_prod });

        if (prod.bulk_pricings) {
          //add bulkpricing
          var pricings = [];
          prod.bulk_pricings.map((pricing) => {
            pricing["product_variant"] = newVariant.id;
          });

          for (let i = 0; i < prod.bulk_pricings.length; i++) {
            const bulk_pricing = await strapi.db
              .query("api::bulk-pricing.bulk-pricing")
              .create({
                data: prod.bulk_pricings[i],
              });
            pricings.push(bulk_pricing);
          }
          newVariant["bulk_pricings"] = pricings;
          // prod.bulk_pricings["product_variant"] = newVariant.id;
        }
        newVariants.push(newVariant);
      }
      response.data["variants"] = newVariants;
      //create activity
      let activity_data = {
        event: activity_status.new_product,
        user: id,
        description: `New Product ${response.data.attributes.name} has been Added`,
      };

      const activity = createActivity(activity_data, strapi);

      //send notification
      const fcmData = {
        title: "New Product Added",
        body: `${response.data.attributes.name} starting @${newVariants[0].price}`,
        image: ctx.request.body.data.thumbnail,
        // description: `Your Order for ${order.product_variant.name} has been rejected`,
        type: notify_type.product,
        data: `${response.data.id}`,
        users_permissions_user: id,
        targetType: "topic",
        targetValue: "global",
      };
      //create notification entry
      const notification = await strapi.db
        .query("api::notification.notification")
        .create({ data: fcmData });
      const sendNotification = await fcmNotify(fcmData, id, notification.id);
      return ctx.send(response, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  async delete(ctx, next) {
    try {
      console.log("into Delete Function");
      const id = ctx.request.params.id;

      const product = await strapi.entityService.findOne(
        "api::product.product",
        id,
        {
          fields: ["name", "slug", "id", "desc"],
          populate: {
            gallery: true,
            thumbnail: true,
          },
        }
      );

      if (product === null) {
        return ctx.send({ message: "No product found" }, 204);
      }

      const inactiveProduct = await strapi.db
        .query("api::product.product")
        .update({
          where: { id: id },
          data: { isActive: false },
        });

      return ctx.send({ message: "Product Deleted" }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  async findAllProducts(ctx, next) {
    try {
      console.log("Inside Find All Products");
      const pagination = ctx.request.query.pagination;
      const filters = ctx.request.filters;
      const sort = ctx.request.sort;

      var meta;
      var products;

      const getProducts = async (offset, limit) => {
        const products = await strapi.db
          .query("api::product.product")
          .findWithCount({
            orderBy: sort,
            where: {
              $and: filters,
            },
            offset: offset,
            limit: limit,
            populate: {
              thumbnail: true,
              gallery: true,
              category: true,
              product_variants: true,
              product_metric: true,
            },
          });
        return products;
      };

      //update
      if (pagination) {
        if (Object.keys(pagination).length > 0) {
          const { limit, offset } = getPagination(
            pagination.page,
            pagination.size
          );
          products = await getProducts(offset, limit);
          meta = {
            pagination: {
              page: pagination.page ? parseInt(pagination.page) : 1,
              pageSize: pagination.size
                ? parseInt(pagination.size)
                : products[1],
              pageCount: Math.ceil(products[1] / limit),
              total: products[1],
            },
          };
        }
      } else {
        products = await getProducts(null, null);
        meta = {
          pagination: {
            page: 1,
            pageSize: products[1],
            pageCount: 1,
            total: products[1],
          },
        };
      }
      return ctx.send({ data: products[0], meta }, 200);
    } catch (error) {
      console.log(error);
      return ctx.send(error, 400);
    }
  },

  async getSingleProduct(ctx, next) {
    try {
      const id = ctx.params.id;

      const product = await strapi.entityService.findOne(
        "api::product.product",
        id,
        {
          fields: [
            "name",
            "slug",
            "id",
            "desc",
            "yt_video_link",
            "cod_enabled",
          ],
          populate: {
            gallery: true,
            product_variants: { populate: { bulk_pricings: true } },
            category: true,
            collection: true,
            thumbnail: true,
          },
        }
      );

      if (product.category !== null) {
        const products = (
          await strapi.db.connection
            .from(strapi.getModel("api::product.product").collectionName)
            .orderByRaw("RANDOM()")
            .limit(6)
        ).map((it) => it.id);

        const list = await strapi.entityService.findMany(
          "api::product.product",
          {
            filters: {
              id: {
                $in: products,
              },
            },
            populate: {
              product_variants: true,
              thumbnail: true,
            },
          }
        );
        // const randomProductsCount = await axios.get(
        //   `${baseURL}/products?filters[category][id][$eqi]=${product.category.id}`
        // );

        // let randomPage = parseInt(
        //   Math.floor(
        //     Math.random() * randomProductsCount.data.meta.pagination.total
        //   ) / 4
        // );

        // const randomProducts = await axios.get(
        //   `${baseURL}/products?populate[0]=thumbnail&populate[1]=product_variants&filters[category][id][$eqi]=${
        //     product.category.id
        //   }&randomSort=true&pagination[pageSize]=4&pagination[page]=${
        //     randomPage + 1
        //   }`
        // );
        // // console.log(randomProducts.data);
        // let randProdArr = [];
        // for (const prod of randomProducts.data.data) {
        //   let random = { id: prod.id };
        //   random = Object.assign(random, { ...prod.attributes });
        //   randProdArr.push(random);
        // }
        return ctx.send({ product, randomProducts: list }, 200);
      } else {
        return ctx.send({ product }, 200);
      }
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  //cart products
  async selectedProducts(ctx, next) {
    var products = ctx.request.body.products;
    const input = ctx.request.body.random;

    let arrayProducts = [];
    try {
      for await (const id of products) {
        const entries = await strapi.entityService.findOne(
          "api::product.product",
          id,
          {
            fields: ["name", "slug", "id", "desc"],
            populate: {
              thumbnail: true,
              product_variants: true,
              category: true,
              sub_category: true,
            },
          }
        );
        arrayProducts.push(entries);
      }
      // const productList = (
      //   await strapi.db.connection
      //     .from(strapi.getModel("api::product.product").collectionName)
      //     .orderByRaw("RANDOM()")
      //     .limit(input)
      // ).map((it) => it.id);

      // const list = await strapi.entityService.findMany("api::product.product", {
      //   filters: {
      //     id: {
      //       $in: productList,
      //     },
      //   },
      //   populate: {
      //     gallery: true,
      //     product_variant: true,
      //     category: true,
      //     thumbnail: true,
      //   },
      // });

      ctx.send(arrayProducts, 200);
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  //get n random products
  async getNRandomProducts(ctx, next) {
    try {
      const n = 10;

      let { rows } = await strapi.db.connection.raw(
        `select id from products where is_active IS true order by random() limit ${n};`
      );
      var products = rows.map((key) => key.id);
      const list = await strapi.entityService.findMany("api::product.product", {
        filters: {
          id: {
            $in: products,
          },
        },
        populate: {
          gallery: true,
          product_variants: true,
          category: true,
          thumbnail: true,
        },
      });
      ctx.send(list, 200);
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  //get alll products
  async allProducts(ctx, next) {
    try {
      const pagination = ctx.request.query;
      var products;
      var allProducts;

      const recentSub = ctx.request.recentSub;

      if (recentSub.plan.name === "Free") {
      }

      allProducts = await strapi.entityService.findMany("api::product.product");
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
            pageSize: limit ? limit : allProducts.length,
            pageCount: limit ? Math.ceil(allProducts.length / limit) : 1,
            total: allProducts.length,
          },
        };
        products = await strapi.db.query("api::product.product").findMany({
          orderBy: { id: "asc" },
          offset: offset,
          limit: limit,
          fields: ["name", "slug", "id"],
          where: { isActive: true },
          populate: {
            thumbnail: true,
            product_variants: true,
            product_metric: true,
          },
        });
      } else {
        meta = {
          pagination: {
            page: 1,
            pageSize: allProducts.length,
            pageCount: 1,
            total: allProducts.length,
          },
        };
        products = await strapi.db.query("api::product.product").findMany({
          fields: ["name", "slug", "id"],
          orderBy: { id: "asc" },
          where: { isActive: true },
          populate: {
            thumbnail: true,
            product_variants: true,
            product_metric: true,
          },
        });
      }
      return { products, meta };
      // return { recentSub };
    } catch (err) {
      return ctx.send(err, 400);
    }
  },

  //search in all products
  async searchInAllProducts(ctx, next) {
    const getProducts = async (offset, limit) => {
      const products = await strapi.db.query("api::product.product").findMany({
        where: {
          $and: [
            { isActive: true },
            {
              $or: [
                {
                  desc: {
                    // $startsWith: key,
                    $containsi: key,
                  },
                },
                {
                  name: {
                    // $startsWith: key,
                    $containsi: key,
                  },
                },
              ],
            },
          ],
        },
        orderBy: { id: "asc" },
        offset: offset,
        limit: limit,
        fields: ["name", "slug", "id", "desc"],
        populate: {
          thumbnail: true,
          gallery: true,
          product_variants: true,
        },
      });
      return products;
    };

    try {
      var key = ctx.request.params.key;
      var pagination = ctx.request.query;
      var products;
      var allProducts;
      var meta;

      allProducts = await getProducts(null, null);
      if (Object.keys(pagination).length > 0) {
        const { offset, limit } = getPagination(
          pagination.pagination.page,
          pagination.pagination.size
        );
        products = await getProducts(offset, limit);
        meta = {
          pagination: {
            page: parseInt(pagination.pagination.page),
            pageSize: products.length,
            pageCount: Math.ceil(
              allProducts.length / parseInt(pagination.pagination.size)
            ),
            total: allProducts.length,
          },
        };
      } else {
        products = await getProducts(null, null);
        meta = {
          pagination: {
            page: 1,
            pageSize: allProducts.length,
            pageCount: 1,
            total: allProducts.length,
          },
        };
      }
      return ctx.send({ data: products, meta }, 200);
    } catch (err) {
      return ctx.send(err, 400);
    }
  },

  //random products
  async getRandomProducts(ctx, next) {
    try {
      function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0),
          i = arr.length,
          min = i - count,
          temp,
          index;
        while (i-- > min) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
        }
        return shuffled.slice(min);
      }

      const products = await strapi.entityService.findMany(
        "api::product.product",
        {
          populate: {
            thumbnail: true,
            product_variants: true,
            category: true,
          },
        }
      );
      return getRandomArrayElements(products, 10);
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getProductWithoutPricing(ctx, next) {
    try {
      const id = ctx.params.id;

      const product = await strapi.db.query("api::product.product").findOne({
        where: { id: id },
        populate: {
          thumbnail: true,
          gallery: true,
          product_variants: true,
          sub_category: true,
          category: {
            populate: {
              thumbnail: true,
            },
            thumbnail: true,
          },
        },
      });

      for (const variant of product.product_variants) {
        delete variant.price;
        delete variant.strikePrice;
        delete variant.premiumPrice;
        // variant.strikePrice = null;
        // variant.price = null;
      }

      return ctx.send(product, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
