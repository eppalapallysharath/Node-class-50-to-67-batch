const authModel = require("../models/auth.js")
const authorization = (...roles)=>{
    return  (req, res, next)=>{
        console.log(req.user)
        // const data = await authModel.findById(req.user.id)
        if(roles.includes(req.user.role)){
            next()
        }else{
            res.status(403).json({message:"access denied"})
        }
    }
}

module.exports = authorization