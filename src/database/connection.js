const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;