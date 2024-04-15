const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  development: {
    url: process.env.DB_CONNECTION,
    dialect: "postgres",
  },
  test: {
    url: process.env.DB_CONNECTION,
    dialect: "postgres",
  },
  production: {
    url: process.env.DB_CONNECTION,
    dialect: "postgres",
  },
};