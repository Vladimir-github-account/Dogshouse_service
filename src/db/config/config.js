require('dotenv').config();
const {DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT} = process.env;
const config = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mssql',
    port: DB_PORT,
    migrationStorage: 'json',
    seederStorage: 'json'
  },
  test: {},
  production: {}
};

module.exports = config;