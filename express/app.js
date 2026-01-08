const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded(true))

app.get("/", (req, res)=>{ 
    console.log(req.query)
   return res.status(400).json({message:"get response you query", data:req.query}) 
})

app.post("/", function(req, res){
    return res.status(401).json({name:"sharath", age:20})
})

app.put("/",(req, res)=>{
    return res.send("updated successfully")
})

app.patch("/", (res, req)=>{
    req.send("patch method")
})

app.delete("/", (req, res)=>{
    res.json({status: "success", message: "deleted successfully"})
})


app.get("/user", (req, res)=>{
    console.log(req.query)
    res.json({username:req.query.username, age:req.query.age})
})

const data = [
    {
        id:1,
        name:"sharath",
        age:20
    },{
        id:2,
        name:"tom",
        age:15
    }
]

app.get("/userinfo/:userid",(req, res)=>{
    const newdata = data.filter(user => user.id == req.params.userid)
    console.log(newdata)
    newdata.length > 0 ? res.status(200).json(newdata) : res.status(404).json({message: "not found"})
})

// app.post("/datageting", (req, res)=>{
//     console.log(req.body)
//     res.json({message: "data added successfully", data:req.body, q:req.query})
// })
app.post("/datageting/:gender", (req, res)=>{
    console.log(req.body)
    res.json({message: "data added successfully", data:req.body, q:req.query, gender:req.params})
})


app.listen(4000, ()=>{console.log("express server started")})