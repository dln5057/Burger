var express = require('express');
var router = express.Router();
var cat = require('../models/burger.js');

router.get('/', function(req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  buger.selectAll(function (data){
    var burgerObject = {bugers: data};
    console.log(burgerObject);
    res.render('index', burgerObject);
  });
});

router.post('/burgers/insert', function(req, res){
  burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(){
    res.redirect('/burgers');
  });
});

router.put('/burgers/updateOne/:id', function(req, res){
  var selected = 'id = ' + req.params.id;

  console.log('selected', selected);

  burger.updateOne({devoured: req.body.devoured }, selected, function(){
    res.redirect('/burgers');
  })
})

module.exports = router;
