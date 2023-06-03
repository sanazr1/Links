const {Router} = require('express');
const route = Router();
const authVer = require('../protect_routes/protect_verify');
const auth = require("../controller/auth_controller")
const links =  require("../controller/links")
route.get('/',auth.getSignInPage);
//route.post('/',auth.postSignInPage);
//route.get('/links',authVer,links.getHomePage);
//route.post('/',auth.getSignInPage);
//route.get('/signout',auth.getSignOut);
module.exports = route;    