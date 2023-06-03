const jwt = require('jsonwebtoken');
const data = require("../model/pgQueries");

module.exports.getSignUpPage = (req,res) =>{
    res.render('signup');
    };
    module.exports.getSignInPage = (req,res) =>{
        res.render('signin');
        };

         module.exports.getSignOut = (req,res) =>{
                res.cookie('jwt' , '' , {maxAge:1} );
                res.status(200).redirect('/');
                };
                
         /*   module.exports.postSignInPage = async (req,res) =>{
                console.log(req.body.email , req.body.password)
               const maxAge =24*60*60*1000;
                try{
                const user = await data.insertWorker(req.body.email , req.body.password);

                console.log('user ====== > >> >  ',user.name)
                const token = jwt.sign({id:user.name}, process.env.TOKEN_SECRET);
                res.cookie('jwt' , token , {httpOnly : true , maxAge:maxAge} );
                    res.status(201).json({user :'successfully'});
                  
                }
                catch(err){
                    console.log(err); 
                    res.json({error : 'Email or password is wrong'});
                }
               
    
    
                };
             */

              