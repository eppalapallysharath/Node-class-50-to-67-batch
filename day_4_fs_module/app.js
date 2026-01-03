const { error } = require("console")
const fs = require("fs")

// console.log("first")
// fs.writeFileSync("./data/data.txt","item 1 price is low" )
// console.log("hi")

// fs.writeFile("hello.txt", "hi ",(err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }else{
//         console.log("file created successfully")
//     }
// })

// fs.readFile("hello.txt","utf-8" ,(err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     if(data){
//         console.log("file read successfully")
//         console.log(data)
//     }
// })

// const filedata =  fs.readFileSync("./data/data.txt", "utf-8")
// console.log(filedata)

// fs.appendFile("./data/data.txt","the best tv show it tom and jerry", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("added new content in file successfully")
//     }
    
// })

// fs.appendFileSync("./sharath.txt", "hi my names is sharath")



// fs.unlink("hello.txt", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file deleted successfully")
//     }
// })

// const a = fs.unlinkSync("sharath.txt")
// console.log(a)

// fs.mkdir("./uploads/images",{recursive:true},(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder created successfully")
//         const users = [
//             {name:"tom"},
//             {name: "jerry"}
//         ]
//         fs.writeFile("./uploads/images/d.json", JSON.stringify(users), (err)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("file create successfully")
//             }
//         })
//     }
// })

// const d =  fs.mkdirSync("./uploads/profiles", {recursive:true})
// if(d){
//     console.log(d)
// }else{
//     console.log("folder created")
// }


// fs.readdir("./uploads/images", (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     if(data){
//         console.log("folders readed successfully")
//         console.log(data)
//     }
// })

// fs.rmdir("./data",{recursive:true}, (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("folder deleted successfully")
//     }
// })

// fs.rm("./data",{recursive:true}, (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("folder deleted successfully")
//     }
// })



console.log("node js")