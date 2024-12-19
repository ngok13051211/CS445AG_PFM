const db = require("../config/database");
class User {
  static async create(userData) {
    return db("users").insert(userData).returning("*");
  }
  static async findByEmail(email) {
    return db("users").where({ email }).first();
  }
  static async findById(id) {
    return db("users").where({ id }).first();
  }
}
module.exports = User;
