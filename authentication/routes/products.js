const express = require("express")
const router = express.Router()
const {getProducts} = require("../controllers/products.js")
const {authentications} = require("../middlewares/authentication.js")

router.get("/getallproducts", authentications,getProducts)


module.exports = router