// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", // our DBMS driver
    useNullAsDefault: true, //necessary when using SQLite
    connection: {
      filename: "./produce.db3",
    },
  },
};
