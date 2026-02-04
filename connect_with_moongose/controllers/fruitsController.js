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


exports.updateFruits = async(req, res)=>{
    try {
        console.log(req.params.fruitId)
        const fruitId = req.params.fruitId
        // const checkFruit =  await FruitsModel.findById(fruitId, {fruit_name:true})
        const checkFruit =  await FruitsModel.findOne({_id: Object(fruitId)})
        if(checkFruit){
            // const updateDoc = await FruitsModel.updateOne({_id:Object(fruitId)}, {$set:{fruit_name:req.body.fruit_name}}, {new:true})
            const updateDoc = await FruitsModel.findByIdAndUpdate(fruitId, {$set:{fruit_name:req.body.fruit_name}}, {new:true})
            console.log(updateDoc)
            res.json({message: "updated successfully", updateDoc})
        }else{
            res.status(404).json({message:"fruit not found to update"})
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

}

exports.deleteFruit = async(req, res) =>{
    try {
        const checkFruit = await FruitsModel.findById(req.params.fruitId)
        if(checkFruit){
            const delete_doc = await FruitsModel.findByIdAndDelete(req.params.fruitId)
            console.log(delete_doc)
            res.status(200).json({message: "deleted successfully"})
        }else{
            res.status(404).json({message: "fruit not found"})
        }
        
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getFruitById = async(req, res)=>{
    try {
        const fruitData = await FruitsModel.findById(req.params.fruitId, {fruit_name:true, _id:false, fruit_season:true, fruit_taste:true})
        if(fruitData){
            res.json({data:fruitData})
        }else{
            res.status(404).json({message:"fruit not found"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}