const mongoose = require("mongoose")

async function connectDb(){
    try {
        await mongoose.connect(process.env.mongoConnection, {dbName:"demomongose_db"})   
        console.log("connected successfully with mongodb")
    } catch (error) {
        console.log("mongodb connection error")
        console.log(error)
    }
}

module.exports = {connectDb}