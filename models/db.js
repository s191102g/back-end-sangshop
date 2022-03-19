var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b4974887c1c471',
    password: '6b304aef',
    database: 'heroku_db08387a40c3c0f'
} );

db.connect(() => console.log('Da ket noi database !'));

db.on('error', function(err) {
    console.log(err.code);
  });
module.exports = db; 