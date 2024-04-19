module.exports = {
  async userMetrics(strapi, data) {
    console.log("Inside user metrics");
    const { id, field } = data;

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { id: id },
      populate: { metric: true },
    });

    console.log(user);
    switch (field) {
      case "wallet_orders":
        if (user.metric === null) {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .create({
              data: {
                wallet_orders: 1,
                user: user.id,
              },
            });
        } else {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .update({
              where: { id: user.metric.id },
              data: {
                wallet_orders: user.metric.wallet_orders + 1,
                user: user.id,
              },
            });
        }
        break;
      case "cod_orders":
        if (user.metric === null) {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .create({
              data: {
                cod_orders: 1,
                user: user.id,
              },
            });
          console.log(wallet_order_metrics);
        } else {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .update({
              where: { id: user.metric.id },
              data: {
                cod_orders: user.metric.cod_orders + 1,
                user: user.id,
              },
            });
          console.log(wallet_order_metrics);
        }
        break;
      case "prepaid_orders":
        if (user.metric === null) {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .create({
              data: {
                prepaid_orders: 1,
                user: user.id,
              },
            });
          console.log(wallet_order_metrics);
        } else {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .update({
              where: { id: user.metric.id },
              data: {
                prepaid_orders: user.metric.prepaid_orders + 1,
                user: user.id,
              },
            });
          console.log(wallet_order_metrics);
        }
        break;
      case "subscriptions_count":
        if (user.metric === null) {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .create({
              data: {
                subscriptions_count: 1,
                user: user.id,
              },
            });
          //   console.log(wallet_order_metrics);
        } else {
          const wallet_order_metrics = await strapi.db
            .query("api::user-metric.user-metric")
            .update({
              where: { id: user.metric.id },
              data: {
                subscriptions_count: user.metric.subscriptions_count + 1,
                user: user.id,
              },
            });
          //   console.log(wallet_order_metrics);
        }
        break;

      default:
        break;
    }
  },
};
