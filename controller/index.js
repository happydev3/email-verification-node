
exports.index = function(req, res){
    res.render('index', { title: 'Express' });
}

exports.login = function(req, res){
    res.render('login', { messages: req.flash('loginMessage') });
}

exports.register = function(req, res){
    res.render('register', { messages: req.flash('loginMessage') });
}

exports.forget = function(req, res){
    res.render('forget');
}