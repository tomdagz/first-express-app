const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const sequelize_package = require('sequelize');
const session = require('express-session');
const methodOverride = require('method-override')

const app = express();

const registrationRoutes = require('./routes/registration_routes');
const sessionsRoutes = require('./routes/session_routes');
const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(session(
    {
        secret: ['sdg4536h547hdsrererty', '45tgt67ydrty64ssdg4'],
        saveUninitialized: false,
        resave: false
    }
))
app.use(findUserMiddleware);
app.use(authUser);
app.use(registrationRoutes);
app.use(sessionsRoutes);

app.get('/', function(request, response) {
    response.render('home', {user: request.user});
});

app.listen(3000);