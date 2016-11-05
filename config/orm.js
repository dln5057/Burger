require("./connection.js")

var selectAll = function {

connection.query('SELECT * FROM burgers;', function(err, data) {
      if (err) throw err;

      res.render('index', {movies: data});

    });
}

var insertOne = function{

connection.query('INSERT INTO burgers (burger_name, 1) VALUES (?)', [req.body.plan], function(err, result) {
      if (err) throw err;
      
    });
};

var updateOne = function{

connection.query('UPDATE burgers SET burger_name, 1 = ? WHERE id = ?', [req.body.movie, req.body.id], function(err, result) {
      if (err) throw err;
      
    });
};

module.exports = orm.js