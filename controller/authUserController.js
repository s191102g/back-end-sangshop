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
                    const accessToken =  jwt.sign(
                                            {
                                                id:e.idUser,
                                                u: e.username
                                            },
                                            process.env.JWT_ACCESS_KEY,
                                            {
                                                expiresIn:'2h'
                                            }
                                        )
                   output = "ok";
                   res.cookie("token",accessToken,{
                       httpOnly:true,
                       secure:true,
                       sameSite:"strict"
                   })
                }else{
                    output = "false";
                    res.cookie("token",output)
                }
            });  
            res.json(output);
        })
       
         
    }

    test(req,res,next){
        
        modelUser.checkUser((data)=>{
              res.json(data)
        })
    }
}

module.exports = new User();