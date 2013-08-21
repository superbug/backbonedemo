
/*
 * GET home page.
 */
var mysql = require('mysql');
var data = null;
var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'test'
});

connection.connect();

connection.query('SELECT * from  `ent_GuoJiaAnJianZongJu_datapool_XingZhengZhiFa`', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
  data = rows;
});

connection.end();
console.log(data);
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
}; 