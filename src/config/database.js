import { Sequelize } from "sequelize";

const dbConnectionOptions = {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
}

export const sequelize = new Sequelize(dbConnectionOptions.database,dbConnectionOptions.user,dbConnectionOptions.password,{
    host: dbConnectionOptions.host,
    dialect: dbConnectionOptions.dialect
})