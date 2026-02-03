const express = require("express")
const app = express()
require("dotenv").config()
const {connectDb} = require("./config/db.js")
connectDb()
const {getFruits, addFruits} = require("./controllers/fruitsController.js")


app.use(express.json())
app.use(express.urlencoded(true))

app.get("/", (req, res)=>{
    res.json({message:"server running healthy"})
})


app.get("/fruits", getFruits)


app.post("/fruits", addFruits)

app.listen(process.env.port, ()=>{
    console.log("server started on port "+ process.env.port)
})