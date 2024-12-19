/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("icon");
    table.integer("user_id").unsigned().references("id").inTable("users");
    table.timestamps(true, true);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
