module.exports = {
    routes: [
        {
            method: "PUT",
            path: "/ship-rocket-orders/cancel/:id",
            handler: "ship-rocket-order.cancelOrder"
        }
    ]
}