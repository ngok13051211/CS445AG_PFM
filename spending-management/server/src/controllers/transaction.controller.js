const Transaction = require("../models/transaction.model");

class TransactionController {
  static async getAll(req, res) {
    try {
      const transactions = await Transaction.getAll(req.user.id);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const transaction = await Transaction.getById(req.params.id, req.user.id);
      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { amount, description, category_id, transaction_date } = req.body;
      const transaction = await Transaction.create({
        amount,
        description,
        category_id,
        transaction_date,
        user_id: req.user.id,
      });
      res.status(201).json(transaction[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { amount, description, category_id, transaction_date } = req.body;
      const transaction = await Transaction.update(req.params.id, req.user.id, {
        amount,
        description,
        category_id,
        transaction_date,
      });
      if (!transaction.length) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      res.json(transaction[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const result = await Transaction.delete(req.params.id, req.user.id);
      if (!result) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getMonthlyTotal(req, res) {
    try {
      const { year, month } = req.params;
      const total = await Transaction.getMonthlyTotal(req.user.id, year, month);
      res.json(total);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = TransactionController;
