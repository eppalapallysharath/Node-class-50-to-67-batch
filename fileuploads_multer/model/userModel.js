const Mongoose = require("mongoose")

const userSchema = new Mongoose.Schema(
    {
        username:{type:String},
        gender:{type:String},
        age:{type:String},
        profile_pic:{type:String}
    },{timestamps:true}
)

exports.UserModel = Mongoose.model("users", userSchema)
 