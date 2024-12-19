const db = require("../config/database");

class Category {
  static async getAll(userId) {
    return db("categories").where({ user_id: userId });
  }

  static async getById(id, userId) {
    return db("categories").where({ id, user_id: userId }).first();
  }

  static async create(data) {
    return db("categories").insert(data).returning("*");
  }

  static async update(id, userId, data) {
    return db("categories")
      .where({ id, user_id: userId })
      .update(data)
      .returning("*");
  }

  static async delete(id, userId) {
    return db("categories").where({ id, user_id: userId }).del();
  }
}

module.exports = Category;
