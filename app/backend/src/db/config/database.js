"use strict";
exports.__esModule = true;
var config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: "HARRY_POTTER_QUIZ",
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;