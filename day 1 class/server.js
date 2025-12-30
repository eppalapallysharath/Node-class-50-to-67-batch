const http = require("http")

http.createServer((req, res)=> {
    console.log(req)
    res.write("hi im node js server ");
    res.end()
}).listen(8080,()=>{console.log("http server started")})

console.log("hello")