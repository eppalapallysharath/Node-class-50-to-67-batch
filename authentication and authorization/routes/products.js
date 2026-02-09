const express = require("express")
const router = express.Router()
const {getProducts, addProducts} = require("../controllers/products.js")
const {authentications} = require("../middlewares/authentication.js")
const authorizatation = require("../middlewares/authorizatation.js")


router.get("/getallproducts", authentications, authorizatation("seller", "buyer", "superAdmin"),getProducts)

router.post("/addproducts", authentications,authorizatation("seller", "superAdmin"),addProducts )

module.exports = router