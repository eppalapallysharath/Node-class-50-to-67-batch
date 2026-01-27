const express = require("express")
const routes = express.Router()

routes.get("/allhistory",(req, res)=>{
    res.send({message:"your watch history fetched successfully"})
})

module.exports = routes