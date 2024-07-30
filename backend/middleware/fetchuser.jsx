const jwt = require("jsonwebtoken")

const fetchUser =(req,res,next)=>{

const jwt_secret = "adbdullahbillionare"

const token = req.header("auth-token")
if (!token){
    return res.status(400).send({error:"please enter the valid credentials"})
}

const data = jwt.verify(token , jwt_secret)
req.user = data.user
next();
}


module.exports=fetchUser