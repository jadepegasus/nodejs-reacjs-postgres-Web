const { client } = require('./database');
const compareWithUsers = async (email, password) => {
    const dataLogin = [email, password];
    try {
        const query = 'SELECT * FROM "Users" WHERE "Email" = $1 AND "Password"= $2 ';

        const res = await client.query(query, dataLogin);
        return res.rows;
    } catch (err) {
        throw err;
    }
};
module.exports = {
    compareWithUsers
}