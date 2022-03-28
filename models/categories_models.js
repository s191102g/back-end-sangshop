var db = require("./db");


exports.list = ( callback)=> { 
    let sql = `SELECT *  FROM category`;
    db.query(sql, (err, d)=> { callback(d); }  );
}

exports.create = (data, callback )=> { 
    let sql = 'INSERT INTO category SET ?';
    db.query(sql, data, (err, d)=> { callback(d) }  );    
} 
exports.update = (id, data, callback)=> { 
    let sql = 'UPDATE category  SET ? WHERE idCT = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.delete = (id,data,callback) => {
    let sql = 'DELETE FROM category WHERE idCT = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        callback();
    });
}
