const validateTransaction = (req, res, next) => {
  const { amount, transaction_date } = req.body;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: "Valid amount is required" });
  }

  if (!transaction_date || isNaN(new Date(transaction_date).getTime())) {
    return res
      .status(400)
      .json({ message: "Valid transaction date is required" });
  }

  next();
};

const validateCategory = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.trim().length === 0) {
    return res.status(400).json({ message: "Category name is required" });
  }

  next();
};

module.exports = {
  validateTransaction,
  validateCategory,
};
