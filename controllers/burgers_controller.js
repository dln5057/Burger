var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// index get route
router.get('/', function(req,res) {
		res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	//express callback response by calling burger.selectAllBurger
	burger.all(function(burger_data){
		//render burger data from orm.js to the index page
		res.render('index', {burger_data});
	});
});

//create burger route 
router.post('/burgers/create', function(req, res) {
	//requested object is created into burger
	burger.create(req.body.burger_name, function(result){
		console.log(result);
		res.redirect('/');
	});
});

//update burger route 
router.put('/burgers/update', function(req,res){
	burger.update(req.body.burger_id, function(result){
		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;
