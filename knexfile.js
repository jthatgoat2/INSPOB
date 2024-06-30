// Update with your config settings.

import dotenv from "dotenv";
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "DB_USER",
    password: "DB_PASSWORD",
    database: "DB_NAME",
    charset: "utf8",
  },
};
