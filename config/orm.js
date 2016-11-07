var connection = require("./connection.js")

//ORM example from class
var orm = {
  selectAll: function(table, cb){
    var queryString = 'SELECT * FROM ' + table + ';';
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }

  insertOne: function(table, name, ate, cb){
    var queryString = 'INSERT INTO burgers (burger_name, devoured, date) VALUES ("' + cols + '", false;';
    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }

  updateOne: function(list, name, ate, id, cb){
    var queryString = 'UPDATE burgers SET devoured=true WHERE id =' + id + ';';
    // console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;