const { payment_method } = require("../../../config/constants");

const commissionAmount = (amount, mode) => {
  var totalAmount = 0;
  if (mode === "upiId") {
    switch (true) {
      case amount <= 1000:
        totalAmount = addCommission(amount, 1.5);
        break;
      case amount <= 25000:
        totalAmount = addCommission(amount, 3);
        break;
      case amount > 2500:
        totalAmount = addCommission(amount, 7);
        break;

      default:
        break;
    }
  } else {
    totalAmount = addCommission(amount, 2);
  }

  return totalAmount;
};

const addCommission = (amount, per) => {
  const percentage = per;
  const totalAmount = amount + (amount * percentage) / 100;
  return totalAmount;
};

module.exports = {
  commissionAmount,
};
