var keystone = require('keystone');

exports = module.exports = function(req, res) {
	res.redirect('/keystone');//直接跳转到后台，不需要显示前台
	return;
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// Render the view
	view.render('index');
	
};
