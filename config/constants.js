const domain = "https://api.thevdc.in";
const baseURL = domain + "/api";

const PaymentStatus = {
  authorized: "AUTHORIZED",
  captured: "CAPTURED",
  failed: "FAILED",
};

const OrderStatuses = {
  new: "NEW",
  accepted: "ACCEPTED",
  declined: "DECLINED",
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

const LeadStatuses = {
  new: "NEW",
  calling: "CALLING",
  called: "CALLED",
  converted: "CONVERTED",
  completed: "COMPLETED",
};

module.exports = {
  PaymentStatus: PaymentStatus,
  order_status: OrderStatuses,
  payment_method: TransactionPaymentMethods,
  payment_methods: payment_methods,
  baseURL,
  getHeaders,
  domain,
  txn_purpose,
  activity_status: ActivityStatus,
  notify_type: NotificationType,
  lead_status: LeadStatuses,
};
