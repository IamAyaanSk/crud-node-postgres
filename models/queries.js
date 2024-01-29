require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRES_DB_USER,
  host: "localhost",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
