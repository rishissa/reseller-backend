"use strict";

const {
  activity_status,
  lead_status,
} = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");
const { getPagination } = require("../../utils/Pagination");

/**
 * lead controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lead.lead", ({ strapi }) => ({
  async create(ctx, next) {
    try {
      console.log("Overriding Lead Create");
      // ctx.request.body.data.status = ctx.request.status;
      ctx.request.body.data.status = lead_status.new;
      const response = await super.create(ctx);
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: id },
          populate: { role: true },
        });
      //create activity
      let activity_data = {
        event: activity_status.new_lead,
        user: id,
        description: `New Lead Added By User: ${user.name} ID:${user.id} Role: ${user.role.name}`,
      };

      const activity = createActivity(activity_data, strapi);
      return ctx.send(response.data, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  async find(ctx, next) {
    var meta;
    var leadsList;
    try {
      const pagination = ctx.request.query;
      const getLeads = async (offset, limit) => {
        const leads = await strapi.db.query("api::lead.lead").findWithCount({
          orderBy: { id: "asc" },
          offset: offset,
          limit: limit,
          populate: {
            assigned_to: true,
            user: { populate: { avatar: true } },
            product: { populate: { thumbnail: true } },
          },
        });
        return leads;
      };

      if (pagination) {
        if (Object.keys(pagination).length > 0) {
          const { limit, offset } = getPagination(
            pagination.pagination.page,
            pagination.pagination.size
          );
          leadsList = await getLeads(offset, limit);
          meta = {
            pagination: {
              page: pagination.pagination.page
                ? parseInt(pagination.pagination.page)
                : 1,
              pageSize: parseInt(pagination.pagination.size),
              pageCount: Math.ceil(leadsList[1] / limit),
              total: leadsList[1],
            },
          };
        }
      } else {
        leadsList = await getLeads(null, null);
        meta = {
          pagination: {
            page: 1,
            pageSize: leadsList[1],
            pageCount: 1,
            total: leadsList[1],
          },
        };
      }

      return ctx.send({ data: leadsList[0], meta }, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
  async assignLead(ctx, next) {
    try {
      const id = ctx.request.params.id;
      const assign_id = ctx.request.body.assign_id;
      const lead = await strapi.db.query("api::lead.lead").findOne({
        where: { id: id },
        populate: { assigned_to: true },
      });

      if (!lead) {
        return ctx.send(
          { message: `Lead with the given id ${id} not found` },
          400
        );
      }

      if (lead.assigned_to !== null) {
        return ctx.send(
          {
            message: `Lead has already been assigned to ${lead.assigned_to.id}`,
          },
          400
        );
      }

      const assignee = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: assign_id },
          populate: { role: true },
        });
      if (assignee.role.name !== "Staff") {
        return ctx.send(
          { message: `Lead can only be assigned to Staff User` },
          400
        );
      }

      const assign = await strapi.db.query("api::lead.lead").update({
        data: { assigned_to: assign_id },
        where: { id: id },
      });

      return ctx.send({ message: `Lead Assigned to ${assign_id}` }, 201);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  async searchLeads(ctx) {
    try {
      const query = ctx.request.query;
      const qs = query.qs.trim();
      var meta;
      var leadsList;

      const leads = await strapi.db.query("api::lead.lead").findMany({
        where: {
          $or: [
            {
              assigned_to: {
                $or: [
                  { username: { $containsi: qs } },
                  { email: { $containsi: qs } },
                ],
              },
            },
            {
              user: {
                $or: [
                  { username: { $containsi: qs } },
                  { email: { $containsi: qs } },
                ],
              },
            },
            { phone: { $containsi: qs } },
            { name: { $containsi: qs } },
            { status: { $containsi: qs } },
            { source: { $containsi: qs.replaceAll(" ", "_") } },
          ],
        },
        populate: {
          assigned_to: {
            select: [
              "name",
              "username",
              "email",
              "phone",
              "isAdmin",
              "businessName",
            ],
            populate: { businessLogo: true },
          },
          user: {
            select: [
              "name",
              "username",
              "email",
              "phone",
              "isAdmin",
              "businessName",
            ],
            populate: { businessLogo: true },
          },
        },
      });

      if (leads) return ctx.send({ data: leads, meta }, 200);
      else return ctx.send({ error: "no leads found!" }, 404);
    } catch (error) {
      console.log(error);
      return ctx.send(error, 500);
    }
  },
}));
