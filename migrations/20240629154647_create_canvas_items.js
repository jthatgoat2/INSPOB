/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("canvas_items", function (table) {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.string("type");
    table.text("content");
    table.json("position");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("canvas_items");
};
