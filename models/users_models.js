var db = require('./db');

exports.create = (data, callback)=>{
    let sql = 'INSERT INTO user SET ? ';
    db.query(sql, data, (err, d)=> { callback(d) }  ); 
}

exports.checkUser = ( callback)=> {
    let sql = `SELECT * FROM user `    
    db.query(sql, (err, d) => {
        callback(d);
    });
}