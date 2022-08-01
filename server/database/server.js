const express = require("express");
const path = require("path");
const env = require('dotenv');
const app = express();
env.config({path:"process.env"});
const PORT = process.env.PORT || 8080;
const webRoutes = require('../routes/web');
const apiRoutes = require('../routes/api');
const { dirname } = require("path");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const hbs = require('hbs');
const DB = process.env.DB;
const passport = require('passport')
const session = require('express-session')
const mysqlStore = require('express-mysql-session')(session)

//load files
app.use('/dcss',express.static("assets/css/admin"));
app.use('/dfonts',express.static('assets/fonts/admin'));
app.use('/dimg',express.static('assets/images/admin'));
app.use('/djs',express.static('assets/js/admin'));
app.use('/dvendor',express.static('assets/vendor'));
app.use('/dscss',express.static('assets/scss/'));

//log request
// app.use(morgan('tiny'));

// using flash

//hbs helpers
hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

//using body-parser
app.use(express.json())

//mongodb connection
require('../database/connectdb');

//getting schema
const creator = require('../model/influencer'); 
const { options } = require("../routes/api");

//parse request to body-parser
app.use(express.urlencoded({extended:false}));

//set assets folder as static folder
app.use('/static',express.static('assets'));
app.use('/img',express.static('uploads'))

//set view engine
// app.set('views','views');
app.set('view engine', 'hbs');

//set partials
hbs.registerPartials("views/partials");

//set use routes file routes
app.use(webRoutes);

//set api routes
app.use(apiRoutes);

//session details
const details ={
    connectionLimit: 10,
    password: 'rahim12345',
    user: 'root',
    database: 'influencer',
    host: 'localhost',
    port: '3306',
    createDatabaseTable: true
    
}

//session config
const sessionStore = new mysqlStore(details);
app.use(session({
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.secrete_key,
    cookie: {
        maxAge: 1000*60*60*24,
        sameSite: true,
    }
}))

// Passport config
const passportInit = require('../helper/passport')
passportInit(passport);
app.use(passport.initialize())
app.use(passport.session())

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}/`);
});