const { payment_method } = require("../../../config/constants");

const commissionAmount = (amount, mode) => {
  var totalAmount = 0;
  if (mode === "upiId") {
    switch (true) {
      case amount <= 1000:
        totalAmount = deductCommission(amount, 1.5);
        break;
      case amount <= 25000:
        totalAmount = deductCommission(amount, 3);
        break;
      case amount > 25000:
        totalAmount = deductCommission(amount, 7);
        break;

      default:
        break;
    }
  } else {
    totalAmount = deductCommission(amount, 2);
  }

  return totalAmount;
};

const addCommission = (amount, per) => {
  const percentage = per;
  const totalAmount = amount + (amount * percentage) / 100;
  return totalAmount;
};

const deductCommission = (amount, dedAmt) => {
  // const percentage = per;
  const totalAmount = amount - dedAmt;
  return totalAmount;
};

module.exports = {
  commissionAmount,
};
