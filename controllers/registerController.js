module.exports.register = function(req, res){
    return res.render('register', { 
        title: "Register"
    });
}