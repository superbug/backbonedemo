
/*
 * GET home page.
 */
var mysql = require('mysql');
var data = null;
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        socketPath: '/var/run/mysqld/mysqld.sock',  
        password: '123456',
        database: 'test'
});

connection.connect(function(err) {
    console.log(err);    
});

connection.query('SELECT * from  `wine`', function(err, rows, fields) {
  if (err) throw err;
  data = rows;
});

connection.end();
exports.index = function(req, res){
  res.render('index', { title: 'Cars' });
}; 