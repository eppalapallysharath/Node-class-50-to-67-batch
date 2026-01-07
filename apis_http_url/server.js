const http = require("http")
const url = require("url")
const uuid = require("uuid")
let usersData = []

http.createServer((req, res)=>{
    // console.log(req.url)
    // console.log(req.headers)
    // req.on("data",(chunk)=>{
    //    console.log( chunk.toString())
    // })
    const {pathname, query} = url.parse(req.url, true)
    console.log(url.parse(req.url, true))
    if(pathname === "/" && req.method ==="GET"){
        res.write("default api endpoint to check server is running")
        return res.end()
    }else if(pathname === "/adduser" && req.method === "POST"){
        let data="";  
        req.on("data", (chunk)=>{
            data+=chunk.toString()
        })
        req.on("end",()=>{
            const user = {id: uuid.v4(),...JSON.parse(data)}
            usersData.push(user)
            res.writeHead(201)
            res.write("user added")
            return res.end()
        }) 
    }else if(pathname==="/getallusers" && req.method==="GET"){
        res.writeHead(200)
        res.write(JSON.stringify(usersData))
        return res.end()
    }else if(pathname === "/updateuser" && req.method==="PUT"){
        let data = ""
        req.on("data", (chunk)=>{
            data=+chunk.toString
        })
        req.on("end",()=>{

            const newdata = usersData.map((item)=>{
                if(item.id === query.id){
                    return {...item, name:data.name, age:data.age} 
                }
                return item
            })
            usersData = newdata
            res.writeHead(200)
            res.write("updated successfully")
            return res.end()
        })
    }else if(pathname === "/deleteUser" && req.method==="DELETE"){
        const newdata = usersData.filter((value)=> value.id !== query.id)
        usersData = newdata
        res.writeHead(204);
        res.write("delete successfully")
        return res.end()
    }
    else{
        res.writeHead(404)
        res.write("no api found")
        return res.end()
    }
  
}).listen(3000, ()=>{console.log("server started")})