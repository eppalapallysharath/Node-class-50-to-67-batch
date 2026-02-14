const express = require("express")
const app = express()
const userRoutes = require("./routes/users.js")
const productsRoutes = require("./routes/products.js")



app.use(express.json())
app.use(express.urlencoded(true))

app.use("/users", userRoutes)
app.use("/products",productsRoutes)

app.get("/", (req, res)=>{res.send("iam default api")})

app.listen(3000,()=>{
    console.log("server started at 3000")
})