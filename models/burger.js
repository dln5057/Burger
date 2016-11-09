var orm = require('../config/orm.js');

//CODE to call ORM functions

console.log("burger is loaded")

var burger = {

  selectAll: function(cb){
    orm.selectAll('burgers', function (res){
      cb(res);
    });
  },
  

  insertOne: function(cols, vals, cb){
    orm.insertOne('burgers', cols, vals, function(res){
      cb(res);
    });
  },

  updateOne: function(selected, cb){
    orm.updateOne('burgers', selected, function(res){
      cb(res);
    });
  }
};

module.exports = burger;