const express = require("express")
const router = express.Router()
const {getUserOrders, createOrders} = require("../controllers/orders.js")
const { authentications } = require("../middlewares/authentication.js")
const authorization = require("../middlewares/authorizatation.js")

router.post("/createOrder", authentications, authorization("buyer"),createOrders )
router.get("/userOrders", authentications,  authorization("buyer"),getUserOrders)

module.exports = router