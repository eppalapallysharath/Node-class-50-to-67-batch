const express = require("express");
const router = express.Router()
const {login, signup, getProfile} = require("../controllers/users.js")
const {authentications} = require("../middlewares/authentication.js")
const authorizatation = require("../middlewares/authorizatation.js")
const authModel = require("../models/auth.js")


router.post("/signup",signup)

router.post("/login",login)

router.get("/profile", authentications,getProfile)

router.post("/changeRoles", authentications,authorizatation("superAdmin"), async(req, res)=>{
  try {
    console.log("hi")
    if(req?.body?.new_role && req.body.userId){
        const data = await authModel.findOneAndUpdate({_id: Object(req.body.userId)}, {user_type:req?.body?.new_role}, {new:true})
        res.json(data)
    }
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }  
})

module.exports=router