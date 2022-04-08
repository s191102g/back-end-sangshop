var modelUser = require("../models/users_models");
var jwt = require("jsonwebtoken");

class User{
    create(req , res , next){
        let data = req.body; 
        modelUser.create(data,  ()=> {
          res.json({ pp: "Created !" });
        });
    }
     check(req,res){
        let data = req.body;
      
        let output = '';
         modelUser.checkUser((users)=>{
            users.forEach(e => {
                if (e.username == data.username && e.pass == data.pass) {
                    const accessToken =   jwt.sign(
                        {
                            id:e.idUser,
                            u: e.username
                        },
                       process.env.JWT_ACCESS_KEY,
                       {
                           expiresIn:'2h'
                       }
                    )
                   output = accessToken;
                }else{
                    output = "false"
                }
            });  
            res.json(output);
        })
       
    
    }
}

module.exports = new User();