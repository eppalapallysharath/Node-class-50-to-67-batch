const express = require("express")
const app = express()
const multer =require("multer")
const {connectDb} = require("./config/db.js")
connectDb()
const {UserModel} = require("./model/userModel.js")
const cloudinary = require("./config/cloudinary.js")
const fs = require("fs")

const upload = multer({
    // disk storage
    storage:multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null, __dirname+"/photo")
        },
        filename:(req, file, cb)=>{
            cb(null, Date.now() + "-" + file.originalname)
        }
    }),
    // memory storage
    // storage: multer.memoryStorage(),
    fileFilter:(req, file, cb)=>{
        if(file.mimetype.startsWith("image/")){
            cb(null, true)
        }else{
            cb(new Error("only supports image no other files formats"), false)
        }
    }, limits: {fileSize: 2 * 1024 * 1024}
})


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("photo"))

app.get("/", (req, res)=>{
    res.send("hi im server")
})

// app.post("/createAccount", upload.single("image"),async(req, res)=>{ 
//     if(!req.file){
//         return res.json({message:"image field missing,  please upload image"})
//     }
//     console.log(req.body)
//     console.log(req.file.filename)
//     await UserModel.create({
//         username:req.body.name,
//         age:req.body.age,
//         gender:req.body.gender,
//         profile_pic:req.file.filename
//     })
//     res.send("account created successfully")    
// })


app.post("/createAccount", upload.single("image"),async(req, res)=>{ 
  console.log(req.file)
  if(!req.file){
    res.status(400).json({message:"image field missing,  please upload image"})
  }
  const result = await cloudinary.uploader.upload(req.file.path,{
    folder:"users",
    public_id:Date.now()+req.file.originalname,
    resource_type:"raw"
  })
  if(result){
    fs.unlinkSync(req.file.path)
    const data = await UserModel.create(
        {
            profile_pic:result.secure_url,
            username:req.body.name,
            gender:req.body.gender,
            age:req.body.age
        }

    )
    res.status(201).json({message: "account created successfully", user: data})    
  }
})

app.get("/usersProfiles", async(req,res)=>{
    try {
        const users = await UserModel.find()

        // for(let item of users){
        //     item.profile_pic = "http://localhost:3000/"+item.profile_pic
        // }
        res.json({message:"fetched all user profiles", users: users})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"internal server error try again latter"})
    }  
})


app.listen(3000,()=>{console.log("server started on port 3000")})