const jwt = require('jsonwebtoken');
const users = require('../model/pgQueries');
/*const auth_ver =  (req,res,next) => {
const token = req.cookies.jwt;
if(token){

    jwt.verify(token,process.env.TOKEN_SECRET,async (err, decodedToken) => {
     try{
        if(err){ 
          res.locals.user = null;
            res.redirect('/signin');
            }
            else{ 
              res.locals.user = await users.findEmail(decodedToken.id);  
             
             // const user = await users.findById(decodedToken.id);
                next();
              //  
}
 }
catch(err){
console.log(err)
} });
    }
    else{
       // console.log('error 2:  ==== ' ,err);
       res.locals.user = null;
       console.log('here 2222')
        res.redirect('/signin');
        }

}*/

//module.exports = auth_ver;