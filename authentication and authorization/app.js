const express = require('express')
const app = express()
require("dotenv").config()
const connectDb = require("./config/db.js")
connectDb()
const jwt = require("jsonwebtoken")
const a= {message:"hi"}
// const nodemailer = require("nodemailer")
const orderRoutes = require("./routes/orders.js")

// const transpotter  = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"sharath10kcoders@gmail.com",
//         pass:"xlia ixzg yplb fqxj"
//     }
// })

// transpotter.sendMail({from:"sharath10kcoders@gmail.com", to: "sharathealapally14@gmail.com", subject:"greetings", text:"hi hello how are you?"
// }, (error, info)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("mail sent successfully ")
//     }
// })


app.use(express.json())
app.use(express.urlencoded(true))

app.get("/", (req, res)=>{
    res.send("hello im server")
})

const authRouter = require("./routes/users.js") 
const productsRouter = require("./routes/products.js")
app.use("/auth",authRouter )
app.use("/products", productsRouter)
app.use("/api/orders", orderRoutes)

app.listen(process.env.port, ()=>{
    console.log("server started at ", process.env.port)
})