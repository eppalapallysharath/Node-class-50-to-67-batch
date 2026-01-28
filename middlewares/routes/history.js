const express = require("express")
const routes = express.Router()

routes.get("/allhistory",(req, res, next)=>{
    try {
        const a=b
        res.send({message:"your watch history fetched successfully"})
    } catch (error) {
        const er = new Error(error)
        er.status = 429
        next(er)
    }
})

module.exports = routes