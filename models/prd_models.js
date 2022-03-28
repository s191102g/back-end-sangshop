var db = require("./db")

exports.list = ( callback)=> { 
    let sql = `SELECT *  FROM product`;
    db.query(sql, (err, d) => { callback(d); }  );
}
exports.listNew= ( callback)=> {
    let sql = 'SELECT * FROM product  order by date_prd  desc limit 5'    
    db.query(sql, (err, d)=> { callback(d); }  );
}
exports.listHot= ( callback)=> {
    let sql = 'SELECT * FROM product  order by view  desc limit 5'    
    db.query(sql,  (err, d)=>  { callback(d); }  );
}
exports.listSale= ( callback)=> {
    let sql = 'SELECT * FROM product  order by price asc  limit 5'    
    db.query(sql, (err, d)=>  { callback(d); }  );
}
exports.getPrdbyCate= (id, callback)=> {
    let sql = 'SELECT * FROM product WHERE idCT = ?'    
    db.query(sql, id, (err, data) => {
        callback(data);
    });
}

exports.create = (data, callback ) => { 
    let sql = 'INSERT INTO product SET ?';
    db.query(sql, data, (err, d)=> { callback(d) }  );    
} 
exports.update = (id, data, callback)=> { 
    let sql = 'UPDATE product  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.delete = (id,data,callback)=>{
    let sql = 'DELETE FROM product WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        callback();
    });
}
exports.read= (id, callback)=> {
    let sql = 'SELECT * FROM product WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
}