const checkappkey = (req, res, next)=>{
    const appkey = "545aedaasaaa"
    const user_type = "admin"
    console.log(req.query.role)
    if(req.query.appkey === appkey && req.query.role === "admin"){
        next()
    }else{
        return res.status(400).send({message:"invalid app key or role"})
    }
}
module.exports = {checkappkey}