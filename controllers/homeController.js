module.exports.home = function(req, res){
    return res.render('home', { 
        title: "Todos"
    });
}