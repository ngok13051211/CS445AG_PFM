/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("transactions", (table) => {
    table.increments("id").primary();
    table.decimal("amount", 15, 2).notNullable();
    table.text("description");
    table
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories");
    table.integer("user_id").unsigned().references("id").inTable("users");
    table.timestamp("transaction_date").notNullable();
    table.timestamps(true, true);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("transactions");
};
