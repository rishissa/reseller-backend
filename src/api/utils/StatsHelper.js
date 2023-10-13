const { payment_methods, order_status } = require("../../../config/constants");

const getUsersCount = async (strapi) => {
  try {
    const usersCount = await strapi
      .query("plugin::users-permissions.user")
      .count();
    return usersCount;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getSubscribersCount = async (strapi) => {
  try {
    const subCount = await strapi
      .query("plugin::users-permissions.user")
      .count({ where: { isPremium: true } });
    return subCount;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getCODOrdersCount = async (strapi) => {
  try {
    const codOrdersCount = await strapi.db
      .query("api::order.order")
      .count({ where: { payment_mode: payment_methods.cod } });
    return codOrdersCount;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getPrepaidOrdersCount = async (strapi) => {
  try {
    const prepaidOrdersCount = await strapi.db
      .query("api::order.order")
      .count({ where: { payment_mode: payment_methods.prepaid } });
    return prepaidOrdersCount;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getWalletOrdersCount = async (strapi) => {
  try {
    const walletOrdersCount = await strapi.db
      .query("api::order.order")
      .count({ where: { payment_mode: payment_methods.wallet } });
    return walletOrdersCount;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getProductsCount = async (strapi) => {
  try {
    const productsCount = await strapi.db
      .query("api::product.product")
      .count({ where: { isActive: true } });
    return productsCount;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getTotalRevenue = async (ctx, next) => {
  try {
    //get subscriptions that have paymentSignature/paymentId !== null
    const subscriptionRevenue = await strapi.db
      .query("api::subscription.subscription")
      .findMany({
        where: {
          paymentId: {
            $not: null,
          },
        },
        populate: {
          plan: true,
        },
      });
    const salesRevenue = await strapi.db.query("api::order.order").findMany({
      where: {
        isPaid: true,
      },
      populate: {
        order_products: true,
      },
    });
    var totalSubAmt = 0;
    subscriptionRevenue.forEach((sub) => {
      if (sub.plan !== null) {
        totalSubAmt += parseFloat(sub.plan.price);
      }
    });
    console.log(totalSubAmt);
    var totalSalesAmt = 0;
    salesRevenue.forEach((order) => {
      order.order_products.forEach((prod) => {
        if (prod !== null) {
          totalSalesAmt +=
            parseFloat(prod.order_price) || 0 * parseInt(prod.quantity) || 0;
        }
      });
    });
    // console.log(totalSalesAmt);
    let totalRevenue = parseFloat(totalSubAmt) + parseFloat(totalSalesAmt);
    return totalRevenue.toFixed(2);
    // console.log(subscriptionRevenue)
  } catch (e) {
    console.log(e);
    return ctx.send(e, 400);
  }
};

const totalUserPrepaidOrders = async (strapi, id) => {
  const orders = await strapi.query("plugin::users-permissions.user").findOne({
    where: { id: id },
    select: ["username", "email"],
    populate: {
      orders: {
        select: ["isPaid", "status", "payment_mode"],
        where: { payment_mode: payment_methods.prepaid },
      },
    },
  });

  return orders.orders.length;
};

const totalUserCODOrders = async (strapi, id) => {
  const orders = await strapi.query("plugin::users-permissions.user").findOne({
    where: { id: id },
    select: ["username", "email"],
    populate: {
      orders: {
        select: ["isPaid", "status", "payment_mode"],
        where: { payment_mode: payment_methods.cod },
      },
    },
  });
  return orders.orders.length;
};

const totalUserturnOver = async (strapi, id) => {
  const turnOver = await strapi
    .query("plugin::users-permissions.user")
    .findOne({
      where: { id: id },
      select: ["username", "email"],
      populate: {
        orders: {
          select: ["isPaid", "status", "payment_mode"],
          where: { isPaid: true },
          populate: {
            order_products: true,
            select: ["quantity", "order_price"],
          },
        },
      },
    });

  let totalAmt = 0;
  turnOver.orders.forEach((o) => {
    o.order_products.forEach((op) => {
      totalAmt += op.quantity * parseFloat(op.order_price);
    });
  });
  return totalAmt;
};

const resellerProfit = async (strapi, id) => {
  const profit = await strapi.db
    .query("plugin::users-permissions.user")
    .findOne({
      where: { id: id },
      select: ["username", "email"],
      populate: {
        orders: {
          select: ["isPaid", "status", "payment_mode", "isResellerOrder"],
          where: { isPaid: true, isResellerOrder: true },
          populate: {
            order_products: true,
            select: ["sellingPrice", "order_price"],
          },
        },
      },
    });
  let totalProfit = 0;
  profit.orders.forEach((o) => {
    o.order_products.forEach((op) => {
      totalProfit += parseFloat(op.sellingPrice) - parseFloat(op.order_price);
      console.log(parseFloat(op.sellingPrice) - parseFloat(op.order_price));
    });
  });
  // console.log(profit)
  return totalProfit;
};

const resellerHoldProfit = async (strapi, id) => {
  const onHold = await strapi.db
    .query("plugin::users-permissions.user")
    .findOne({
      where: { id: id },
      select: ["username", "email"],
      populate: {
        orders: {
          select: ["isPaid", "payment_mode"],
          where: {
            payment_mode: payment_methods.cod,
          },
          populate: {
            order_products: {
              select: ["order_price", "status"],
              where: {
                status: {
                  $not: {
                    $eq: order_status.delivered,
                  },
                },
              },
            },
          },
        },
      },
    });

  var onHoldAmt = 0;
  onHold.orders.forEach((o) => {
    o.order_products.forEach((op) => {
      onHoldAmt += parseFloat(op.order_price);
    });
  });
  // console.log(onHold);
  return onHoldAmt;
};
// const getOrdersByStatus = async (strapi) => {
//   try {
//     const orders = await strapi.db
//       .query("api::order.order")
//       .count({where});
//     return productsCount;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

module.exports = {
  getUsersCount,
  getSubscribersCount,
  getCODOrdersCount,
  getPrepaidOrdersCount,
  getWalletOrdersCount,
  getProductsCount,
  getTotalRevenue,
  totalUserturnOver,
  resellerProfit,
  resellerHoldProfit,
  totalUserPrepaidOrders,
  totalUserCODOrders,
};
