"use strict";
const { readExcelSheet } = require("../../utils/pincode_helper");

/**
 * pin-code controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::pin-code.pin-code",
  ({ strapi }) => ({
    bulkCreate: async (ctx, next) => {
      try {
        const url = ctx.request.body.url;
        const data = await readExcelSheet(url);

        if (data.response) {
          if (data.response.status !== 200) {
            return ctx.send(
              {
                message: `Axios Error Status Code: ${data.response.status} ${data.response.statusText}`,
              },
              data.response.status
            );
          }
        }
        const bulkInsert = await strapi.db.connection
          .raw(`INSERT INTO public.pin_codes (pincode)
          VALUES ${data
            .map((pincode) => `('${pincode.pincode}')`)
            .join(", ")} ON CONFLICT (pincode) DO NOTHING`);

        return ctx.send({ message: `${bulkInsert.rowCount} rows inserted` }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
