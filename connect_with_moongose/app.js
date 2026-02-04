const express = require("express")
const app = express()
require("dotenv").config()
const {connectDb} = require("./config/db.js")
connectDb()
const {getFruits, addFruits, updateFruits, deleteFruit} = require("./controllers/fruitsController.js")
const fruitRoutes = require("./routes/fruitsRoutes.js")
const cors = require("cors")

const corsOptions = {
    origin:["http://localhost:5173"],
    methods:["GET","POST", "PUT", "DELETE"]
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded(true))

app.get("/", (req, res)=>{
    res.json({message:"server running healthy"})
})

app.use("/fruits", fruitRoutes)


app.listen(process.env.port, ()=>{
    console.log("server started on port "+ process.env.port)
})