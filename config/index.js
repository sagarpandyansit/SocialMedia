const databaseConnectionObject = require("../knexfile");

const knex = require("knex")({
  client: "pg",
  connection: databaseConnectionObject.connection,
  searchPath: ["knex", "public"],
  pool: {
    min: 2,
    max: 2,
    afterCreate: function (connection, callback) {
      connection.query('SET timezone="GMT";', function (err) {
        console.log(`DB connection created`);
        callback(err, connection);
      });
    },
  },
  acquireConnectionTimeout: 10000,
});

module.exports = {
  getDb: () => {
    return knex;
  },
};
