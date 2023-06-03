module.exports.getHomePage =(req,res) =>{
    res.render('home');
    };
    module.exports.getSmoothiesPage =(req,res) =>{
        res.render('smoothies');
        };
        module.exports.getEnterPage = (req,res) =>{
            res.render('enter');
            };
            module.exports.getSignOut = (req,res) =>{
                res.cookie('jwt' , '' , {maxAge:1} );
                res.status(200).redirect('/');
                };