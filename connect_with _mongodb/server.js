const express = require("express");
const app = express();
const { dbConnection, getData, create} = require("./configs/db.js")
dbConnection()
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res)=>{
    res.json({message:"running healthy"})
})


app.get("/user", async(req, res)=>{
    // console.log("get data",await getData())
    const users =  await getData()
    
    console .log(users)
        res.json({data:users})
})


app.post("/createuser", async(req, res)=>{
    const s = await create(req.body) 
    res.send("created successfully")
})

app.listen(process.env.port, ()=>{console.log("server started on " + process.env.port)})