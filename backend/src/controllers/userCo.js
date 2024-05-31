const { compareWithUsers } = require('../models/userModel')
const jwt = require('jsonwebtoken');
const secretKey = 'phongdp112'; // Thay bằng khóa bí mật của bạn

const getCheckUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userCheck = await compareWithUsers(email, password);
        console.log(userCheck.length)
        if (userCheck.length === 0) {
            res.status(400).json({ error: 'Invalid email or password' });
        }
        else {
            const token = jwt.sign({ email: userCheck[0].Email }, secretKey, { expiresIn: '1h' });
            res.status(200).json({
                token: token,
                user: {
                    id: userCheck[0].Id,
                    name: userCheck[0].DisplayName
                }
            });
        }
    } catch (error) {
        console.error('Error rending page', error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = {
    getCheckUser
}