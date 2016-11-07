var connection = require("./connection.js")

//ORM example from class
var orm = {
  selectAll: function(list){
    queryString = 'Select * FROM' + list ;
    connection.query(queryString, function(err, data){
      if (err) throw err;
      console.log(data);
    })
  }

  insertOne: function(list, name, ate){
    queryString = 'INSERT INTO' + list + (name, ate) + 'VAlUES (?, ?)'
    connection.query(queryString, [req.bod.burger_name, req.body.devoured], function(err, data){
      if (err) throw err;
      console.log(data);
    })
  }

  updateOne: function(list, name, ate, id){
    queryString = 'UPDATE' + list + 'SET' + name + '= ? ,' + ate + '= ? WHERE' + id + '= ?'
    connection.query(queryString, [req.body.name, req.body.ate, req.body.id], function(err, data){
      if(err) throw err;
      console.log(data);
    })
  }
}

module.exports = orm;