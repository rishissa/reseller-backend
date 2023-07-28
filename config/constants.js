const domain = "https://api.hangs.in";
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

module.exports = {
  PaymentStatus: PaymentStatus,
  order_status: OrderStatuses,
  payment_method: TransactionPaymentMethods,
  payment_methods: payment_methods,
  baseURL,
  getHeaders,
  domain,
  txn_purpose,
};
