const mongoose = require("mongoose")

const fruitsSchema = new mongoose.Schema({
    fruit_name:{
        type:String,
        required:true,
        // unique: true,
        trim:true
    },
    fruit_season:{
        type:String,
        required:true,
        trim:true
    },
    fruit_taste:{
        type:String,
        trim: true
    }
},{timestamps: true})

module.exports = mongoose.model("fruit", fruitsSchema)
