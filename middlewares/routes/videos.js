const express = require("express");
const router = express.Router();
// const { appkey } = require("../controller/usercontroller.js");
const {allvideos, myvideos} = require("../controller/videoscontroller.js")
const {checkappkey} = require("../middlewares/appkey.js")

router.get("/allvideos", checkappkey, allvideos)

router.get("/myvideos", checkappkey, myvideos);

module.exports = router;
