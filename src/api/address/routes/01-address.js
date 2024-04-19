module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/custom/addAddress",
      handler: "address.addAddress",
    },
    {
      method: "PATCH",
      path: "/custom/address/:id",
      handler: "address.updateAddress",
    },
    {
      method: "DELETE",
      path: "/custom/address/:id",
      handler: "address.deleteAddress",
    },
  ],
};
