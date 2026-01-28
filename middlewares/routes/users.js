const express = require("express")
const router = express.Router()
const {signup, login, profile} = require("../controller/usercontroller.js")
const {checkappkey} = require("../middlewares/appkey.js")

router.post("/signup", signup )
router.post("/login", login)
router.get("/profile",checkappkey, profile)

module.exports = router