const domain = "https://api.sumeetonline.in";
const baseURL = domain + "/api";
const admin_url = "https://admin.sumeetonline.in";

const PaymentStatus = {
  authorized: "AUTHORIZED",
  captured: "CAPTURED",
  failed: "FAILED",
};

const OrderStatuses = {
  new: "NEW",
  all: "ALL",
  accepted: "ACCEPTED",
  declined: "DECLINED",
  cancelled: "CANCELLED",
  processing: "PROCESSING",
  intransit: "INTRANSIT",
  out_for_delivery: "OUT_FOR_DELIVERY",
  delivered: "DELIVERED",
  completed: "COMPLETED",
  payout_done: "PAYOUT_DONE",
  rto: "RTO",
  return_request: "RETURN_REQUEST",
  return_accepted: "RETURN_ACCEPTED",
  return_declined: "RETURN_DECLINED",
  return_received: "RETURN_RECEIVED",
  return_pending: "RETURN_PENDING",
};

const TransactionPaymentMethods = {
  UPI: "upi",
  CARD: "card",
  NET_BANKING: "netbanking",
};

const payment_methods = {
  wallet: "WALLET",
  prepaid: "PREPAID",
  cod: "COD",
};

const getHeaders = (ctx) => {
  const tokenKey = ctx.request.headers.authorization;
  let header = {
    headers: { Authorization: tokenKey },
  };
  return header;
};

const txn_purpose = {
  purchase: "PURCHASE",
  refund: "REFUND",
  added_to_wallet: "ADDED_TO_WALLET",
};

const ActivityStatus = {
  admin_login: "ADMIN_LOG_IN",
  user_login: "RESELLER_LOG_IN",
  order_placed: "ORDER_PLACED",
  order_accepted: "ORDER_ACCEPTED",
  order_declined: "ORDER_DECLINED",
  order_shipped: "ORDER_SHIPPED",
  order_delivered: "ORDER_DELIVERED",
  new_subscription: "SUBSCRIPTION_ADDED",
  new_campaign: "NEW_CAMPAIGN_ADDED",
  new_product: "NEW_PRODUCT_ADDED",
  new_collection: "NEW_COLLECTION_ADDED",
  new_tutorial: "NEW_TUTORIAL_ADDED",
  new_lead: "NEW_LEAD_ADDED",
  new_group: "NEW_GROUP_ADDED",
  lead_completed: "LEAD_COMPLETED",
  reseller_withdraw: "RESELLER_WITHDRAW",
  reseller_payout: "RESELLER_PAYOUT",
  wallet_debit: "WALLET_DEBIT",
  wallet_credit: "WALLET_CREDIT",
};

const NotificationType = {
  product: "PRODUCT",
  collection: "COLLECTION",
  order: "ORDER",
  subscription: "SUBSCRIPTION",
  promotion: "PROMOTION",
  information: "INFORMATION",
  transaction: "TRANSACTION",
};

const ShiprocketStatus = {
  new: "NEW",
  cancelled: "CANCELLED",
  delivered: "DELIVERED",
  shipped: "SHIPPED",
  rto_initiated: "RTO INITIATED",
  rto_delivered: "RTO DELIVERED",
  out_for_delivery: "OUT FOR DELIVERY",
  in_transit: "IN TRANSIT",
  out_for_pickup: "OUT FOR PICKUP",
};

const LeadStatuses = {
  new: "NEW",
  calling: "CALLING",
  called: "CALLED",
  converted: "CONVERTED",
  completed: "COMPLETED",
};

const payment_gateways = {
  razorpay: "RAZORPAY",
  cashfree: "CASHFREE",
  phonepe: "PHONEPE",
  none: "NONE",
};

const PhonePePaymentStatuses = {
  payment_success: "PAYMENT_SUCCESS",
  payment_failed: "PAYMENT_ERROR",
};

const ShippingOptions = {
  shipping_price: "SHIPPING_PRICE",
  shipping_percentage: "SHIPPING_PERCENTAGE",
  free_shipping: "FREE_SHIPPING",
};

module.exports = {
  PaymentStatus: PaymentStatus,
  order_status: OrderStatuses,
  payment_method: TransactionPaymentMethods,
  payment_methods: payment_methods,
  baseURL,
  getHeaders,
  domain,
  admin_url,
  txn_purpose,
  activity_status: ActivityStatus,
  shiprocket_status: ShiprocketStatus,
  notify_type: NotificationType,
  lead_status: LeadStatuses,
  payment_gateways,
  phonepe_status: PhonePePaymentStatuses,
  shipping_options: ShippingOptions,
};
