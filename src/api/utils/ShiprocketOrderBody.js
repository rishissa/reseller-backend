const { payment_methods } = require("../../../config/constants");
const { commission } = require("./Helpers");
module.exports = {
  genShirocketOrderBody: (data) => {
    let sub_total = 0;

    for (const it of data.order_product) {
      sub_total = commission(
        it.selling_price ? it.selling_price : it.order_price
      );
    }

    sub_total += data.global.shippingPrice;

    let order_items = [];

    for (const it of data.order_product) {
      order_items.push({
        name: `${it.product_variant.product.name} ${it.product_variant.name}`,
        sku: it.order.slug,
        units: it.quantity,
        selling_price: it.selling_price ? it.selling_price : it.order_price,
        order_item: it.id,
      });
    }

    let payment_method =
      data.order.payment_mode === payment_methods.wallet
        ? payment_methods.prepaid
        : data.order.payment_mode;
    // console.log(order_items)
    let body = {
      order_id: data.order.slug,
      order_date: data.order.createdAt,
      pickup_location: "Primary",
      shipping_is_billing: true,
      billing_customer_name: data.user.name,
      billing_last_name: data.user.name,
      billing_address: data.address.addressLine1,
      billing_city: data.address.city,
      billing_pincode: data.address.pincode,
      billing_state: data.address.state,
      billing_country: data.address.country,
      billing_email: data.user.email,
      billing_phone: data.user.phone,
      payment_method: payment_method,
      order_items: order_items,
      shipping_charges: data.global.shippingPrice,
      giftwrap_charges: 0,
      transaction_charges: 0,
      total_discount: 0,
      sub_total: sub_total,
      length: 10,
      breadth: 15,
      height: 20,
      weight: 2.5,
    };

    return body;
  },
};
