const express = require("express")
const router = express.Router()
const {signup, login, profile} = require("../controller/usercontroller.js")
router.post("/signup", signup )
const {checkappkey} = require("../middlewares/appkey.js")

router.post("/login", login)

router.get("/profile",checkappkey, profile)

module.exports = router