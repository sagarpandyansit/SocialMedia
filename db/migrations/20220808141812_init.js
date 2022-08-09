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
        table.text("gender");
        table.timestamps(true, true);
      });
  
    const createPostsTablePromise = knex.schema
      .withSchema("application")
      .createTable("posts", (table) => {
        table.increments("id").primary();
      table.integer("user_id").notNullable();
        table.text("title").unique().notNullable();
        table.text("text");
        table.timestamps(true, true);
      });
    
    const createFollowersTablePromise = knex.schema
    .withSchema("application")
    .createTable("followers", (table) => {
    table.increments("id").primary();
    table.integer("user_id1").notNullable();
    table.integer("user_id2").notNullable();
    table.timestamps(true, true);
    });

    await Promise.all([
      createSchemaPromise,
      createUsersTablePromise,
      createPostsTablePromise,
      createFollowersTablePromise,
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
  