const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const sequelize_package = require('sequelize');

const app = express();

const registrationRoutes = require('./routes/registration_routes');

app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));
app.set('view engine', 'pug');

app.use(registrationRoutes);

app.listen(3000);