
exports.index = function(req, res){
    res.render('dashboard/index');
}
exports.fund = function(req, res){
    res.render('dashboard/fund');
}
exports.voting = function(req, res){
    res.render('dashboard/voting');
}
exports.withdrawal = function(req, res){
    res.render('dashboard/withdrawal');
}
exports.cards = function(req, res){
    res.render('dashboard/cards');
}
exports.roadmap = function(req, res){
    res.render('dashboard/roadmap');
}