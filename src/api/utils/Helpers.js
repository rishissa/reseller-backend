const addCommission = (amount) => {
  const percentage = 2;
  const totalAmount = amount + (amount * percentage) / 100;
  return totalAmount;
};

module.exports = {
  commission: addCommission,
};
