const express = require("express");
const router = express.Router()
const {login, signup, getProfile} = require("../controllers/users.js")
const {authentications} = require("../middlewares/authentication.js")

router.post("/signup",signup)

router.post("/login",login)

router.get("/profile", authentications,getProfile)

module.exports=router