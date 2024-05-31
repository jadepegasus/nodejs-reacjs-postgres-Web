// database.js
const dotenv = require('dotenv');
const path = require('path');
const envPath = path.join(__dirname, '../../.env');
dotenv.config({ debug: true, path: envPath });
const { Client } = require('pg');
const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;
const client = new Client({
    host: DB_HOST,       // Địa chỉ host của PostgreSQL
    user: DB_USER,        // Tên người dùng của bạn trong PostgreSQL
    password: DB_PASSWORD,
    database: DB_DATABASE,    // Tên cơ sở dữ liệu của bạn
    port: DB_PORT,              // Cổng mặc định của PostgreSQL
});
const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database success');
    } catch (err) {
        console.error('Connection error', err.stack);
    }
}


module.exports = {
    connectDB,
    client
};
