var connection = require("./connection.js")

console.log("orm is ok")

//ORM example from class
var orm = {

  selectAll: function(table, cb){
    var queryString = 'SELECT * FROM ' + table + ';';
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb){
    console.log(table)
    console.log(cols)
    console.log(vals)
    var queryString = 'INSERT INTO burgers (' + cols + ') VALUES ("' + vals[0]  +'",' +vals[1] + ');';
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(id, cb){
    console.log(id)
    var queryString = 'UPDATE burgers SET devoured='+true+' WHERE id =' + id + ';';
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;