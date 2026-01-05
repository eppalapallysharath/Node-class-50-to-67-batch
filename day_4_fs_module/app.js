// const fs = require("fs")

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



// console.log("node js")


// ---------------------day5 class path modules and streams

// console.log(__dirname)
// console.log(__filename)

const fs = require("fs")
const path = require("path")
// console.log(path.basename(__filename))
// console.log(path.extname(__dirname+"uploads/images/d.json"))
// console.log(path.dirname(__dirname))
// console.log(path.join(__dirname,"uploads", "images", "d.json"))
// console.log(path.resolve(__dirname,"uploads", "images", "d.json"))



// fs.mkdir(path.join("E:/10k batches/New folder", "data", "profiles"),{recursive:true},(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         fs.writeFile(path.join("E:/10k batches/New folder", "data", "profiles", "letters.txt"), "hello" , (err)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log("file create successfully")
//             }
//         })
//     }
// })


// fs.writeFile(path.join(__dirname,"uploads" ,"class.json"), JSON.stringify({class: "9th"}), (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created")
//     }
// })

// fs.mkdirSync(path.join("D:/","sharathdocs"))

// const buffer = Buffer.from("names.txt")
// console.log(buffer.toString())

// console.log(new Date())
// const readstream = fs.createReadStream("./names.txt","utf-8")
// readstream.on("data", (chunk)=>{
//     console.log("stream chunks", chunk )
//     console.log(new Date())
// })

// const write = fs.createWriteStream("./tom.txt")
// write.write(`sharath tom condimentum ipsum non tincidunt mattis. Sed ultrices ultrices sem luctus accumsan. Praesent mollis sem id lorem lobortis, in volutpat velit congue. Nunc mollis orci purus, vitae laoreet sapien aliquet id. Phasellus pulvinar enim diam, vel maximus lacus maximus euismod. Vivamus in molestie neque. Fusce sed tortor eget nulla elementum pulvinar.

// Quisque ut urna dui. Curabitur iaculis efficitur neque, vitae egestas ex venenatis sit amet. Suspendisse consectetur turpis ut sapien accumsan, ut dapibus ex tristique. Etiam id venenatis urna. Nullam sit amet urna eget mauris mollis varius id eu libero. Nulla accumsan sit amet est vitae interdum. Nullam sit amet elit turpis. Duis finibus aliquet tellus eget tincidunt. Nunc quis velit pretium, ultricies dolor sed, consequat leo. Quisque nec urna vitae magna pellentesque gravida. In ullamcorper tellus vitae accumsan sodales. In leo quam, ullamcorper vel nulla vel, dapibus commodo leo. Morbi consectetur sollicitudin est ut auctor.

// Ut placerat tristique sapien. Integer non sollicitudin sem. Etiam sollicitudin purus nec nisi lobortis volutpat. Suspendisse magna metus, lacinia faucibus porttitor eu, aliquet a magna. Suspendisse eget lobortis nulla, at aliquam lacus. Nam tristique libero a augue tristique maximus. Quisque id volutpat nisi. Proin congue pellentesque massa id molestie. Sed non sem lectus. Aliquam imperdiet consectetur diam, quis lacinia elit tincidunt sit amet. Nulla imperdiet porta rhoncus. Etiam congue porttitor mi a ultrices.

// Suspendisse potenti. Nulla vehicula sit amet augue ut blandit. Nam vitae luctus turpis. Donec dapibus, lacus quis consectetur gravida, sem dui porta ipsum, vitae iaculis leo libero ut tortor. Phasellus a ipsum velit. Sed vitae porttitor est, non ornare leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porttitor lacus tortor, nec accumsan elit convallis suscipit. Praesent venenatis nulla ac tempor rhoncus. Fusce id ex fringilla, ultricies mauris ac, tincidunt metus. Aliquam erat volutpat. Duis et turpis velit. Praesent maximus pharetra condimentum.`)
// write.write("hello world")
// write.end()



// const readStream = fs.createReadStream("./names.txt", "utf-8")
// const writeStreams = fs.createWriteStream("./tom.txt")
// readStream.pipe(writeStreams)

// without duplex streams
let filedata= ``
fs.readFile("./names.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }
    if(data){
        filedata = data
        fs.writeFile("./tom.txt",filedata, (error)=>{
            if(error){console.log(error)}
            else{
                console.log("data addeed succesfully")
            }
        })
    }
})



// fs.readFile("names.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     if(data){
//         console.log(data)
//     }
// })


