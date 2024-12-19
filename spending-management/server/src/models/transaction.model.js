const db = require("../config/database");

class Transaction {
  static async getAll(userId) {
    return db("transactions")
      .select(
        "transactions.*",
        "categories.name as category_name",
        "categories.icon as category_icon"
      )
      .leftJoin("categories", "transactions.category_id", "categories.id")
      .where("transactions.user_id", userId)
      .orderBy("transaction_date", "desc");
  }

  static async getById(id, userId) {
    return db("transactions")
      .select(
        "transactions.*",
        "categories.name as category_name",
        "categories.icon as category_icon"
      )
      .leftJoin("categories", "transactions.category_id", "categories.id")
      .where("transactions.id", id)
      .where("transactions.user_id", userId)
      .first();
  }

  static async create(data) {
    return db("transactions").insert(data).returning("*");
  }

  static async update(id, userId, data) {
    return db("transactions")
      .where({ id, user_id: userId })
      .update(data)
      .returning("*");
  }

  static async delete(id, userId) {
    return db("transactions").where({ id, user_id: userId }).del();
  }

  static async getMonthlyTotal(userId, year, month) {
    return db("transactions")
      .where("user_id", userId)
      .whereRaw("EXTRACT(YEAR FROM transaction_date) = ?", [year])
      .whereRaw("EXTRACT(MONTH FROM transaction_date) = ?", [month])
      .sum("amount as total")
      .first();
  }
}

module.exports = Transaction;
