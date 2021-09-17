require('dotenv').config()

module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.BD_HOST,
            user: process.env.BD_USER,
            password: process.env.BD_PASSWORD,
            database: process.env.BD_DATABASE
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds`
        }
    }
};