const axios = require("axios");
const bcrypt = require("bcryptjs");
const { formatDate } = require("../../api/utils/DateHelper");
const { getPagination } = require("../../../src/api/utils/Pagination");

module.exports = (plugin) => {
  //Handle User Auth
  const auth = plugin.controllers.auth.callback;
  plugin.controllers.auth.callback = async (ctx) => {
    await auth(ctx)
      .then((result) => {})
      .catch((err) => {
        if (err.name === errors[0]) {
          return ctx.send({ error: err.name, message: err.message }, 400);
        }
        if (err.name === errors[1] && err.message.includes("blocked")) {
          return ctx.send({ error: err.name, message: err.message }, 500);
        } else {
          return ctx.send({ error: err.name, message: err.message }, 500);
        }
      });
    // console.log(auth(ctx));
  };

  //Handle User Update
  const update = plugin.controllers.user.update;
  plugin.controllers.user.update = async (ctx) => {
    const { id } = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    const userInfo = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: {
          id: id,
        },
      });

    //update the fields of an object with the body of the request.
    if (userInfo.isAdmin === true) {
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: ctx.request.params.id,
          },
        });

      await update(ctx);
      let response = Object.assign(user, ctx.request.body);
      return ctx.send(response, 200);
    }

    if (userInfo.id != ctx.request.params.id) {
      return ctx.send({ message: "Invalid id provided" }, 400);
    } else {
      await update(ctx);
    }
  };

  // Handle User Register
  const register = plugin.controllers.auth.register;
  plugin.controllers.auth.register = async (ctx) => {
    console.log("Inside Inbuilt register function");
    if (ctx.request.body.phone === undefined) {
      return ctx.send({ message: "Phone Num is required dude!!" }, 400);
    }

    let phone = ctx.request.body.phone.slice(-10);
    let phoneNum = ctx.request.body.phone;

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: {
        $or: [
          {
            phone: phoneNum,
          },
          {
            phone: phone,
          },
        ],
      },
    });

    //user exists
    //phone not unique //return with error
    if (user) {
      return ctx.send(
        { message: "Phone Number is already registered with a user" },
        400
      );
    }
    const body = ctx.request.body;
    const password = Math.floor(Math.random() * 90000000) + 10000000;
    // console.log(password)
    body["confirmed"] = false;
    body["role"] = ["1"];
    let hashPass = await bcrypt.hash(password.toString(), 10);
    if (body.password) {
      body["password"] = hashPass;
    }
    const register = await strapi
      .query("plugin::users-permissions.user")
      .create({ data: body });
    // console.log(register)
    return ctx.send({
      email: ctx.request.body.email,
      username: ctx.request.body.email,
      phone: ctx.request.body.phone,
      name: ctx.request.body.name,
    });
    // console.log(body)
    // console.log(ctx)
    // await register(ctx);
  };

  //Handle User(me) function
  const me = plugin.controllers.user.me;
  plugin.controllers.user.me = async (ctx) => {
    const { id } = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    const subs = await strapi.query("plugin::users-permissions.user").findOne({
      where: { id: id },
      populate: {
        role: true,
        subscriptions: {
          populate: {
            plan: {
              populate: { thumbnail: true },
            },
          },
        },
      },
    });

    var recentSub;
    //check active subscription
    if (subs.subscriptions.length > 0) {
      recentSub = subs.subscriptions.reduce((acc, curr) => {
        return curr.id > acc.id ? curr : acc;
      });
      let now = new Date();
      let formattedDate = formatDate(now);
      if (recentSub.validTo < formattedDate) {
        //subscription is over
        const updateUser = await strapi
          .query("plugin::users-permissions.user")
          .update({
            where: { id: id },
            data: {
              isPremium: false,
            },
          });
      }
    }

    await me(ctx);
    Object.assign(ctx.response.body, { subscription: recentSub });
  };

  const findAll = plugin.controllers.user.find;
  plugin.controllers.user.find = async (ctx) => {
    try {
      const pagination = ctx.request.query.pagination;
      var data;
      var meta;
      const list = async (offset, limit) => {
        const users = await strapi
          .query("plugin::users-permissions.user")
          .findWithCount({
            select: [
              "id",
              "username",
              "email",
              "confirmed",
              "blocked",
              "phone",
              "isPremium",
              "isAdmin",
              "wallet_balance",
              "name",
              "businessName",
              "ordersCount",
              "profit",
              "shares",
            ],
            offset,
            limit,
            populate: {
              avatar: true,
              role: true,
              wallets: true,
              transactions: true,
              subscriptions: true,
            },
          });
        return users;
      };

      if (pagination) {
        console.log("INside pagination");
        if (Object.keys(pagination).length > 0) {
          console.log("Pagination");
          const { offset, limit } = getPagination(
            pagination.page,
            pagination.size
          );
          data = await list(offset, limit);
          meta = {
            pagination: {
              page: parseInt(pagination.page),
              pageSize: parseInt(pagination.size),
              pageCount: Math.ceil(data[1] / parseInt(pagination.size)),
              total: data[1],
            },
          };
        }
      } else {
        data = await list(null, null);
        meta = {
          pagination: {
            page: 1,
            pageSize: data[1],
            pageCount: 1,
            total: data[1],
          },
        };
      }
      return ctx.send({ data: data[0], meta }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  };

  return plugin;
};

const errors = ["ValidationError", "ApplicationError"];
