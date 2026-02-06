const jwt = require("jsonwebtoken")
require("dotenv").config()
const authModel = require("../models/auth.js")

exports.getProducts=async(req, res)=>{
    try {   
    
                    res.status(200).json({message:"products info", data:[{name:"washing machine"}]})
               
        
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}