const express = require('express');
const router = express.Router();

const customer = require('../controllers/customerCo.js');
const user = require('../controllers/userCo')
router.get('/customer', customer.getHomePage);
router.post('customer/delete/:id', customer.deleteCus);
router.post('/customer/add', customer.addCus);
router.get('/admin', customer.getAdminPage);
router.post('/login', user.getCheckUser);
module.exports = router;