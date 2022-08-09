"use strict";

module.exports = {
  client: "pg",
  connection: {
    host: `localhost`,
    database: `SocialMedia`,
    port: 5432,
    user: "postgres",
    password: "qwer1234",
  },
  migrations: {
    directory: __dirname + "/db/migrations",
    schemaName: "public",
    tableName: "knex_migrations",
  },
  seeds: {
    directory: __dirname + "/db/seeds",
  },
};
