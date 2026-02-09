const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    name:{
        type:String, required:true, trim:true
    },
    email:{
        type:String, required:true, trim:true, unique:[true, "email already exist enter new email"] 
    },
    password:{
        type:String, required:true
    },
    bio:{
        type:String, required:true, lowercase:true, trim:true
    },user_type:{
        type:String, default:"buyer", enum:["seller", "buyer", "superAdmin"]
    }
},{timestamps:true})

module.exports = mongoose.model("users",authSchema )