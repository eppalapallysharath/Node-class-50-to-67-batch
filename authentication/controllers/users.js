const authModel = require("../models/auth.js")
const bcryptjs = require("bcryptjs")

exports.login= async(req, res)=>{
    try {
        if(Object.keys(req.body).length<1){
            return res.status(429).json({message:"validation error", data:"email, password are required"})
        }

        if(req?.body?.email?.length <1 || req?.body?.password?.length <1 ){
            return res.status(400).json({message:"validation error", data:"email, password are required"})
        }else{
            const checkuser = await authModel.findOne({email:req.body.email})
            if(checkuser){
                const decryptPassword = await bcryptjs.compare(req.body.password, checkuser.password)
                if(decryptPassword){
                    return res.status(200).json({message: "login successfully", userinfo:{email:checkuser.email, name:checkuser.name, bio:checkuser.bio} })
                }else{
                    return res.status(429).json({message:"invalid credentials"})
                }
            }else{
                res.status(429).json({message:"invalid credentials"})
            }
        }

    } catch (error) {
       res.status(400).json({error:error}) 
    }
     
    
}

exports.signup = async(req, res)=>{
    try {
        if(Object.keys(req.body).length<1){
            return res.status(429).json({message:"validation error", data:"name, email, password, bio are required"})
        }
         if(req?.body?.name?.length < 1 || req?.body?.email?.length <1 || req?.body?.password.length < 1 || req?.body?.bio.length < 1 ){
        return res.json({message:"validation error", data:"name, email, password, bio are required"})
    }else{
        const {password, bio, name, email} = req.body
        const chekemail = await authModel.findOne({email:email})
        if(chekemail){
            return res.status(400).json({message:"email already exists try new email"})
        }else{
            const hashpassword = bcryptjs.hashSync(password, 12)
            const signupuser = await authModel.create({
            email: email,
            password:hashpassword,
            name:name,
            bio:bio
        })
        console.log(signupuser)
        res.send(signupuser)
        }
       
    }

    } catch (error) {
        console.log(error)
     res.status(400).json(error.message)   
    }
   
    
    
}