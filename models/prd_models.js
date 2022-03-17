var db = require("./db")

exports.list = function( callback) { 
    let sql = `SELECT *  FROM product`;
    db.query(sql, function(err, d) { callback(d); }  );
}
exports.listNew= function( callback) {
    let sql = 'SELECT * FROM product  order by date_prd  desc limit 5'    
    db.query(sql, function(err, d) { callback(d); }  );
}
exports.listHot= function(callback) {
    let sql = 'SELECT * FROM product  order by view  desc limit 5'    
    db.query(sql, function(err, d) { callback(d); }  );
}

exports.listSale= function(callback) {
    let sql = 'SELECT * FROM product  order by price asc  limit 5'    
    db.query(sql, function(err, d) { callback(d); }  );
}


exports.getPrdbyCate= function(id, callback) {
    let sql = 'SELECT * FROM product WHERE idCT = ?'    
    db.query(sql, id, (err, data) => {
        callback(data);
    });
}

exports.create = function(data, callback ) { 
    let sql = 'INSERT INTO product SET ?';
    db.query(sql, data, function(err, d) { callback(d) }  );    
} 
exports.update = function(id, data, callback) { 
    let sql = 'UPDATE product  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    let sql = 'SELECT * FROM product WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
}