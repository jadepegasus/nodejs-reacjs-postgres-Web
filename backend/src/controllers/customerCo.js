const { getCustomers, deleteCustomer, addCustomer } = require('../models/customerDB');
const getHomePage = async (req, res) => {
    try {
        const customers = await getCustomers();
        res.status(200).json({ customers });
    } catch (error) {
        console.error('Error rendering homepage:', error);
        res.status(500).send('Internal Server Error');
    }
}
const deleteCus = async (req, res) => {
    const customerId = parseInt(req.params.id);
    console.log(typeof (customerId));
    console.log(customerId);
    try {
        await deleteCustomer(customerId);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting customer', err);
        res.status(500).send('Internal Server Error');
    }
}
const addCus = async (req, res) => {
    const { displayname, address, phone } = req.body;
    console.log(req.body);
    if (!displayname || !address || !phone) {
        return res.status(400).json({ error: 'Thiếu trường thông tin' });
    }

    try {
        const id = await addCustomer(displayname, address, phone);
        res.status(201).json({ message: 'Đã thêm mới khách hàng thành công', customerId: id });
    } catch (err) {
        console.error('Error adding customer:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAdminPage = async (req, res) => {
    res.render('adminPage');
}
module.exports = {
    getHomePage,
    getAdminPage,
    deleteCus,
    addCus
}