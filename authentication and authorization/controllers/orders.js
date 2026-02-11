const ordersModel = require("../models/orders.js")

exports.getUserOrders = async(req, res)=>{
    try {
        const orderData = await ordersModel.find({userID:req.user.id}).populate("userID", ["name", "email"])
        res.json({message:"order list", data:orderData})
    } catch (error) {
        res.send(error)
    }
}

exports.createOrders = async(req, res)=>{
    try {
        const {orderPrice, orderName} = req.body
        const createDoc = await ordersModel.create({order_name: orderName, order_price:orderPrice, userID: req.user.id})
        res.json({message:"order created successfully", order_info: createDoc})
    } catch (error) {
        res.send(error)
    }
}
