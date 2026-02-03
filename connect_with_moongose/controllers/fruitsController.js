const FruitsModel = require("../models/fruits.js")

exports.getFruits = async(req, res) => {
    const data = await FruitsModel.find()
    res.json({fruits_Data:data})
}


exports.addFruits = async (req, res)=>{
    try {
         const newDoc = await FruitsModel.create(req.body)
    res.json({message:"added fruits", data:newDoc})
    } catch (error) {
        console.log(error);
        res.status(400).send("something went wrong try again")
    }
   
}