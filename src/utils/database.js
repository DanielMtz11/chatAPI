const {Sequelize} = require('sequelize');
require("dotenv").config();

const db = new Sequelize({
    username: process.env.DB_USER ,
    database: process.env.DB_NAME ,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: false,

})


module.exports = db;