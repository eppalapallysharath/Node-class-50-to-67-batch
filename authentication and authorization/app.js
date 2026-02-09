const express = require('express')
const app = express()
require("dotenv").config()
const connectDb = require("./config/db.js")
connectDb()
const jwt = require("jsonwebtoken")
const a= {message:"hi"}


app.use(express.json())
app.use(express.urlencoded(true))

app.get("/", (req, res)=>{
    res.send("hello im server")
})

const authRouter = require("./routes/users.js") 
const productsRouter = require("./routes/products.js")
app.use("/auth",authRouter )
app.use("/products", productsRouter)

app.listen(process.env.port, ()=>{
    console.log("server started at ", process.env.port)
})