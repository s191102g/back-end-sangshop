const jwt = require("jsonwebtoken")


class middlewareController{
    verifyToken(req,res,next){
        const token = req.cookies.token;
        if (token) {
            const accessToken = token;
            jwt.verify(
                accessToken,
                process.env.JWT_ACCESS_KEY,
                (err,user)=>{
                    if (err) {
                        res.status(403).json("Token is not valid")
                        throw err;
                       
                    }
                    req.user = user;
                    next();
                }
            )
        }else{
            res.status(401).json("You are not authenticated")
        }
    }
}

module.exports = new middlewareController();