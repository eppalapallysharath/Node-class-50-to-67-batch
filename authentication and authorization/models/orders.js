const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema(
    {
        order_name:{
            type:String, required:true, trim:true
        },
        order_price:{
            type:Number, required:true
        },
        userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            required:true
        }
    },{
        timestamps:true
    }
)

module.exports = mongoose.model("orders", orderSchema)