const crypto = require("crypto");

const generateTransactionId = async () => {
  const prefix = "TXN_";
  const randomBytes = crypto.randomBytes(4).toString("hex");
  const transactionId = prefix + randomBytes;
  return transactionId;
};

module.exports = {
  generateTransactionId,
};
