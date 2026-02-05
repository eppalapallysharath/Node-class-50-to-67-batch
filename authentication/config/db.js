const mongoose = require("mongoose")
require("dotenv").config()

function connectDb() {
    try {
        mongoose.connect(process.env.mongouri, {dbName:process.env.dbName})
        console.log("database connected")
    } catch (error) {
        console.log("mongodb not connected")
        console.log(error)
    }
}

module.exports = connectDb