var db = require("./db");


exports.list = function( callback) { 
    let sql = `SELECT *  FROM category`;
    db.query(sql, function(err, d) { callback(d); }  );
}