// eslint-disable-next-line
const SnakeNamingStrategy = require('typeorm-naming-strategies').SnakeNamingStrategy;
const dotenv = require('dotenv');
dotenv.config();

const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME
} = process.env;

module.exports = {
    "type": "mysql",
    "host": DATABASE_HOST,
    "port": DATABASE_PORT,
    "username": DATABASE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": DATABASE_NAME,
    "synchronize": false,
    "migrations": ["src/database/migrations/*.ts"],
    "entities": ["src/entities/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations"
    },
    "namingStrategy": new SnakeNamingStrategy()
}