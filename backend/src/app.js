const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/router');
const cors = require('cors');
//connect database
const { connectDB } = require('./models/database');

connectDB();
//
const app = express();
// Cấu hình body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Cấu hình CORS
app.use(cors());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next(); // Tiếp tục xử lý request
});
app.use('/', require('./routes/router'));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});