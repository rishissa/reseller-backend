module.exports = {
  async productMetrics(strapi, data) {
    const { field } = data;

    switch (field) {
      case "ordered_count":
        console.log("From Product Metrics");
        for (const item of data.products_variants) {
          const productVar = await strapi.db
            .query("api::product-variant.product-variant")
            .findOne({
              where: { id: item.id },
              populate: { product: { select: ["id"] } },
            });

          const productMetric = await strapi.db
            .query("api::product-metric.product-metric")
            .findOne({
              where: { product: { id: productVar.product.id } },
            });

          if (!productMetric) {
            const product_ordered_metrics = await strapi.db
              .query("api::product-metric.product-metric")
              .create({
                data: {
                  ordered_count: 1,
                  product: productVar.product.id,
                },
              });
          } else {
            const product_ordered_metrics = await strapi.db
              .query("api::product-metric.product-metric")
              .update({
                where: { id: productMetric.id },
                data: {
                  ordered_count: productMetric.ordered_count + 1,
                },
              });
          }
        }
        break;
      case "premium_plan_orders":
        for (const item of data.products_variants) {
          const productVar = await strapi.db
            .query("api::product-variant.product-variant")
            .findOne({
              where: { id: item.product_variant.id },
              populate: { product: { select: ["id"] } },
            });

          const productMetric = await strapi.db
            .query("api::product-metric.product-metric")
            .findOne({
              where: { product: { id: productVar.product.id } },
            });

          if (!productMetric) {
            const product_ordered_metrics = await strapi.db
              .query("api::product-metric.product-metric")
              .create({
                data: {
                  premium_plan_orders: 1,
                  product: productVar.product.id,
                },
              });
            // console.log(product_ordered_metrics);
          } else {
            const product_ordered_metrics = await strapi.db
              .query("api::product-metric.product-metric")
              .update({
                where: { id: productMetric.id },
                data: {
                  premium_plan_orders: productMetric.premium_plan_orders + 1,
                },
              });
            // console.log(product_ordered_metrics);
          }
        }
        break;
      case "view_count":
        const productMetric = await strapi.db
          .query("api::product-metric.product-metric")
          .findOne({
            where: { product: { id: data.product_id } },
          });
        if (!productMetric) {
          const product_view_metrics = await strapi.db
            .query("api::product-metric.product-metric")
            .create({
              data: {
                view_count: 1,
                product: data.product_id,
              },
            });
          // console.log(product_view_metrics);
        } else {
          const product_view_metrics = await strapi.db
            .query("api::product-metric.product-metric")
            .update({
              where: { id: productMetric.id },
              data: {
                view_count: productMetric.view_count + 1,
              },
            });
          // console.log(product_view_metrics);
        }

        break;
      case "profit_margin":
        const ordered_product = await strapi.db
          .query("api::order-product.order-product")
          .findOne({
            where: { id: data.ordered_product.id },
            populate: { product_variant: { populate: { product: true } } },
          });

        const product_metric = await strapi.db
          .query("api::product-metric.product-metric")
          .findOne({
            where: {
              product: { id: ordered_product.product_variant.product.id },
            },
          });

        if (!product_metric) {
          const product_profit_margin_metrics = await strapi.db
            .query("api::product-metric.product-metric")
            .create({
              data: {
                profit_margin:
                  ordered_product.sellingPrice - ordered_product.order_price,
                product: ordered_product.variant.product.id,
              },
            });
        } else {
          const product_profit_margin_metrics = await strapi.db
            .query("api::product-metric.product-metric")
            .update({
              where: { id: product_metric.id },
              data: {
                profit_margin:
                  product_metric.profit_margin +
                  ordered_product.sellingPrice -
                  ordered_product.order_price,
              },
            });
        }

        break;
      case "revenue_generated":
        // console.log("orp reev", data.ordered_products);

        for (const item of data.ordered_products) {
          const ordered_products = await strapi.db
            .query("api::order-product.order-product")
            .findOne({
              where: { id: item.id },
              populate: { product_variant: { populate: { product: true } } },
            });

          // console.log("opss", ordered_products);

          const productMetric = await strapi.db
            .query("api::product-metric.product-metric")
            .findOne({
              where: {
                product: { id: ordered_products.product_variant.product.id },
              },
            });

          if (!productMetric) {
            const product_revenue_generated_metrics = await strapi.db
              .query("api::product-metric.product-metric")
              .create({
                data: {
                  revenue_generated: ordered_products.order_price,
                  product: ordered_products.product_variant.product.id,
                },
              });
            console.log(product_revenue_generated_metrics);
          } else {
            const product_revenue_generated_metrics = await strapi.db
              .query("api::product-metric.product-metric")
              .update({
                where: { id: productMetric.id },
                data: {
                  revenue_generated:
                    productMetric.revenue_generated +
                    ordered_products.order_price,
                },
              });
            console.log(product_revenue_generated_metrics);
          }
        }

        break;

      default:
        break;
    }
  },
};
