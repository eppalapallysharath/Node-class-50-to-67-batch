const Mongoose = require("mongoose")

exports.connectDb = async()=>{
    try {
        await Mongoose.connect("mongodb://localhost:27017/", {dbName:"files_upload_db"})
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}
