module.exports = {
  routes: [
    {
      method: "POST",
      path: "/leads",
      handler: "lead.create",
      config: {
        policies: [],
        middlewares: ["api::lead.lead-body-validation"], //query validator
      },
    },
    {
      method: "PUT",
      path: "/leads/:id/assign",
      handler: "lead.assignLead",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/leads/search",
      handler: "lead.searchLeads",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/leads/stats",
      handler: "lead.getLeadStats",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
    {
      method: "GET",
      path: "/user/leads",
      handler: "lead.userLeads",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
  ],
};
