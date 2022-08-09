/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const createSchemaPromise = knex.raw(
    `create schema if not exists application`
  );
  const createUsersTablePromise = knex.schema
    .withSchema("application")
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.text("name").notNullable();
      table.text("password").notNullable();
      table.text("email").unique().notNullable();
      table.timestamps(true, true);
    });

  const createNotesTablePromise = knex.schema
    .withSchema("application")
    .createTable("notes", (table) => {
      table.increments("id").primary();
    table.integer("user_id").notNullable();
      table.text("title").unique().notNullable();
      table.text("text");
      table.timestamps(true, true);
    });

  await Promise.all([
    createSchemaPromise,
    createUsersTablePromise,
    createNotesTablePromise,
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  const dropSchemaPromise = knex.raw(
    `drop schema if exists application cascade`
  );

  await dropSchemaPromise;
};
