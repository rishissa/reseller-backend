const transaction_reasons = {
  addition: "ADDITION",
  purchase: "PURCHASE",
  withdrawl: "WITHDRAWL",
  payout_sent: "PAYOUT_SENT",
};

const transaction_types = {
  debit: "DEBIT",
  credit: "CREDIT",
};

module.exports = {
  tz_reasons: transaction_reasons,
  tz_types: transaction_types,
};
