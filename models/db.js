var mysql = require('mysql');
var db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
} );

// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'shop'
// } );
db.connect(() => console.log('Da ket noi database !'));

db.on('error', function(err) {
    console.log(err.code);
  });
setInterval(function () {
    db.query('SELECT 1');
}, 5000);
module.exports = db; 