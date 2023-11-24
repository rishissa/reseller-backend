const axios = require("axios");
const bcrypt = require("bcryptjs");
const { formatDate } = require("../../api/utils/DateHelper");
const { getPagination } = require("../../../src/api/utils/Pagination");
const JWT = require("jsonwebtoken");
const { activity_status } = require("../../../config/constants");
const { createActivity } = require("../../api/utils/Helpers");

module.exports = (plugin) => {
  //Handle User Auth
  const auth = plugin.controllers.auth.callback;
  plugin.controllers.auth.callback = async (ctx) => {
    const userInfo = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: {
          email: ctx.request.body.identifier,
        },
        populate: { role: true },
      });

    await auth(ctx)
      .then((result) => {
        if (userInfo) {
          if (userInfo.role.name === "Admin") {
            //create activity log
            // let activity_data = {
            //   event: activity_status.admin_login,
            //   user: userInfo.id,
            //   description: `Admin Logged In`,
            // };
            // const activity = createActivity(activity_data, strapi);
          }
        }
      })
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
    const user_admin = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    var user_info;
    if (user_admin) {
      user_info = await strapi.query("plugin::users-permissions.user").findOne({
        where: { id: user_admin.id },
        populate: { role: true },
      });
    }

    if (ctx.request.body.phone === undefined) {
      return ctx.send({ message: "Phone Num is required dude!!" }, 400);
    }

    let phone = ctx.request.body.phone.slice(-10);
    let phoneNum = ctx.request.body.phone;

    var role;

    if (user_info) {
      if (user_info.role.name === "Admin") {
        role = ctx.request.body.role;
      }
    } else {
      const roles = await strapi.db
        .query("plugin::users-permissions.role")
        .findMany({ select: ["id", "name"] });

      var roleID = roles.filter((r) => {
        return r.name.toLowerCase() === "consumer" ? r.id : "";
      });

      role = roleID[0].id;
    }

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: {
        $or: [
          {
            phone: phoneNum,
          },
          {
            phone: phone,
          },
          {
            phone: `+91${phone}`,
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
    console.log(password);
    body["confirmed"] = false;

    body["role"] = role;
    body["phone"] = `+91${phone}`;
    let hashPass = await bcrypt.hash(password.toString(), 10);
    if (body.password) {
      body["password"] = hashPass;
    }
    const duplicate_user = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: {
          $or: [
            { username: ctx.request.body.username },
            { email: ctx.request.body.email },
          ],
        },
      });

    if (duplicate_user) {
      const target = {
        username: ctx.request.body.username,
        email: ctx.request.body.email,
      };
      console.log(target);
      for (const key in duplicate_user) {
        if (
          duplicate_user.hasOwnProperty(key) &&
          duplicate_user[key] === target[key]
        ) {
          return ctx.send({ message: `${key} is already in use` }, 400);
        }
      }
    } else {
      const register = await strapi
        .query("plugin::users-permissions.user")
        .create({ data: body });
    }
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
          // where: { paymentId: { $not: { $null: true } } },
          populate: {
            plan: {
              populate: { thumbnail: true },
            },
          },
        },
        admin_subscriptions: true,
      },
    });
    var recentSub;
    if (subs.role.name === "Admin") {
      if (subs.admin_subscriptions.length > 0) {
        // for (const it of subs.admin_subscriptions) {
        //   if (new Date(it.validTo) > new Date()) {
        //     recentSub = it;
        //   }
        // }
        recentSub = subs.admin_subscriptions.reduce((acc, curr) => {
          return curr.id > acc.id ? curr : acc;
        });
      }
    } else {
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
    }
    //check active subscription

    await me(ctx);
    Object.assign(ctx.response.body, { subscription: recentSub || null });
  };

  const findAll = plugin.controllers.user.find;
  plugin.controllers.user.find = async (ctx) => {
    try {
      const pagination = ctx.request.query.pagination;

      var tag = ctx.request.query.role;

      var tagsArr;
      // console.log(tag.split(","));
      const roles = await strapi.db
        .query("plugin::users-permissions.role")
        .findMany({ select: ["id", "name"] });

      if (!tag) {
        tagsArr = roles.map((r) => r.name);
      } else {
        let tags = tag.split(",");
        const modifiedTags = tags.map((tag) => tag.toLowerCase());
        const matchedRoles = roles.filter((role) =>
          modifiedTags.includes(role.name.toLowerCase())
        );

        tagsArr = matchedRoles.map((role) => role.name);
        // tag = tag[0].id;
      }

      var data;
      var meta;
      const list = async (offset, limit) => {
        const users = await strapi
          .query("plugin::users-permissions.user")
          .findWithCount({
            where: { role: { name: { $in: tagsArr } } },
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
              metric: true,
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
