var db = require('./db')


exports.getIdOrder = (id,callback) =>{
    let sql = 'select id_order from cus_order where id_user = ?';
    db.query(sql,id,(err,data)=>{
         d = data[0];
        callback(d)
    })
}

exports.getIdPrd = (id,callback) =>{
  let sql = 'select  id_prd from order_detail where id_order = ?'
  db.query(sql,id,(err,data)=>{
    callback(data)
})
}

exports.getCustomerPrd = (id,callback)  =>{
    let sql = 'SELECT * FROM product WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
}