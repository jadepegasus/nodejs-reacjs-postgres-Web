const { client } = require('./database');
const getCustomers = async () => {
    try {
        const result = await client.query('SELECT * FROM "Customers" ORDER BY "Id"');
        return result.rows;
    } catch (err) {
        console.error('Query error', err.stack);
        throw err;
    }
};
const deleteCustomer = async (id) => {
    try {
        const query = 'DELETE FROM "Customers" WHERE "Id" = $1';
        await client.query(query, [id]);

    } catch (err) {
        throw err;
    }
};
const addCustomer = async (displayname, address, phone) => {
    try {
        const query = 'INSERT INTO "Customers" ("DisplayName", "Address","Phone") VALUES ($1, $2, $3)';
        const values = [displayname, address, phone];
        const res = await client.query(query, values);
        // Trả về Id của khách hàng mới được thêm
        console.log(res.rows[0].id);
    } catch (err) {
        throw err;
    }
};
module.exports = {
    getCustomers,
    deleteCustomer,
    addCustomer
};
