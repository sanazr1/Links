const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const routes = require('./routes/routes')
const cors = require('cors');
//const adminRoute = require('./routes/routes_admin')
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.static('public'));
app.use(cookieParser());
//app.use(cors());
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
/*
app.use(session({
  secret : process.env.TOKEN_SECRET,
  resave : true,
  saveUninitialized: true
}));
*/
app.use(routes);
//app.use(adminRoute);

 app.listen(3000)

 //console.log("http://localhost:3000")
