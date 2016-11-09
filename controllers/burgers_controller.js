var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

console.log("routing burger works")

router.get('/', function(req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  console.log('here i am')
  burger.selectAll(function (data){
    var burgerObject = {burgers: data};
    console.log("burgerObj", burgerObject);
    res.render('index', burgerObject);
  });
});

router.post('/burgers/insert', function(req, res){
  console.log(req + "heeeeee")
  var date = new Date()
  burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false, date], function(){
    res.redirect('/burgers');
  });
});

router.put('/burgers/updateOne/:id', function(req, res){
  console.log(req.params)
  var selected = req.params.id;

  console.log('selected', req.params.id);

  burger.updateOne(req.params.id, function(){
    res.redirect('/burgers');
  })
})

module.exports = router;
