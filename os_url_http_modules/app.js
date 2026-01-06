// const os = require("os")

// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os.totalmem())
// console.log(os.freemem())

const http = require("http")

http.createServer(
    (req, res)=>{
        console.log(req.url)
        console.log(req.method)
        if(req.method ==="GET"){
            res.write("it is get method")
            res.end()
        }
        else if(req.method ==="POST"){
            res.write("its post method")
            res.end()
        }
        else if(req.method === "PUT"){
            res.write("its put method")
            res.end()
        }
        else if(req.method === "PATCH"){
            res.write("its patch method")
            res.end()
        }
        else if(req.method === "DELETE"){
            res.write("its delete method")
            res.end()
        }

        // res.write("hi im node server")
        // res.end()
    }
).listen(3000, ()=>{
    console.log("server started")
})