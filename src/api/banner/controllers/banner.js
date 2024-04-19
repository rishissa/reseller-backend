"use strict";

const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const { getHeaders } = require("../../../../config/constants");
const { domain, baseURL } = require("../../../../config/constants");
/**
 * banner controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::banner.banner", ({ strapi }) => ({
  async getBanners(ctx, next) {
    try {
      const bannersList = await strapi.entityService.findMany(
        "api::banner.banner"
      );
      return bannersList;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  addBanner: async (ctx, next) => {
    try {
      let data = new FormData();
      let imgFile = ctx.request.files;
      data.append(
        "image",
        fs.createReadStream(imgFile.files.path),
        imgFile.files.name
      );
      const result = strapi.db.query("api::banner.banner").create({
        data: {
          Title: ctx.request.body.Title,
          type: "product",
          data: "1",
          image: data,
        },
      });
      console.log(result);
      // await axios
      //   .post(baseURL+"/upload", data, getHeaders(ctx))
      //   .then((resp) => {
      //     console.log(resp.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      ctx.send({ message: "OK" }, 200);
    } catch (err) {
      ctx.send(err, 400);
    }
  },
}));
