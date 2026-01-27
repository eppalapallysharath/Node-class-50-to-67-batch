const express = require("express")
const app =express()
const url = require("url")
const fs = require("fs")
const path = require("path")
const cors = require("cors")
// importing users routes
const users = require("./routes/users.js")
const videos = require("./routes/videos.js")
const history = require("./routes/history.js")

//app level cors middleware
app.use(cors({
    origin:["http://localhost:5173"]
}))

// application level logging middleware to monitor all apis
function checkApiLogs (req, res, next){
    const urlPath = url.parse(req.path)
    console.log("headers: ",req.headers)
    console.log("body: ",req.body)
    // console.log({method: req.method, api_name:urlPath.path})
    const getdata = JSON.parse(fs.readFileSync(path.join(__dirname, "analystics_data","data.json"), "utf-8"))
    getdata.push({method: req.method, api_name:urlPath.path})
    fs.writeFile(path.join(__dirname, "analystics_data","data.json"), JSON.stringify(getdata), (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("saved successfully")
        }
    })
    next()
    // if(urlPath.path==="/orders" && req.method == "GET"){
    //     console.log("before")
    //     next()
    //     console.log("after")
    // }else{
    //     res.send("please enter valid url")
    // }
}
// ------------- builtin middlewares
app.use(express.json())  // -> built middleware always it will search content type === application/json
app.use(express.urlencoded(true)) // -> built middleware always it will search content type === application/x-www-form-urlencoded
app.use(express.static('pdfs'))

// -----------------

app.use(checkApiLogs)
// app.use(express.urlencoded(true)) //
// app.use(express.json())

// to get info from req.body than we need to use only these methods post, put, patch

// router level middlewares
app.use("/users",users)
app.use("/api/v2/videos", videos)
app.use("/api/v1/history", history)

app.get("/",(req, res)=>{
    // console.log("api:","/", "method: ", req.method,)
    return res.send({message:"server running healthy"})
})


app.get("/orders", (req, res)=>{
    // console.log("api:","/orders", "method: ", req.method)
    return res.json({ message:"your order details", data:[]})
})


app.post("/createOrder", (req, res)=>{
    res.send({data:req.body})
})


app.post("/products",(req, res)=>{
    return res.send({message:"products info", data:req.body })
})


const errorMiddleware = (err, req, res, next)=>{
    console.log("global error:",err)
    res.status(400).send("there is error")
}

app.use(errorMiddleware)

// 2nd example for application middlewares 
const api_not_found=(req, res)=>{
    res.status(404).send({message:"API not found with given endpoint and method", method:req.method ,api_name: url.parse(req.path).path})
}
app.use(api_not_found)


const port = 3000
app.listen(port, ()=>{console.log("server started at port " +port)})