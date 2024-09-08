const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST_URL,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export = {
  query: (text: any, params: any) => pool.query(text, params),
};
