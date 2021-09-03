const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3008;

const sess = {
    secret: 'very secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => console.log('App listening on port: ' + PORT));
});