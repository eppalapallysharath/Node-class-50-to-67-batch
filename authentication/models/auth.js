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
    }

},{timestamps:true})

module.exports = mongoose.model("users",authSchema )