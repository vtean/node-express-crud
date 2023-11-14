const Sequelize = require("sequelize");
const db = {
    init: async () => {
        const connection = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: process.env.DB_DIALECT
            }
        )

        try {
            await connection.authenticate();
            console.error('\x1b[32m', 'Connection to database: OK');

        } catch (error) {
            console.error('\x1b[31m', 'Unable to connect to the database:', error);
        }
    }
};

module.exports = db