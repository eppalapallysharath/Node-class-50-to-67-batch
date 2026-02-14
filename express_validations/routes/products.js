const express = require("express")
const  router = express.Router()
const {checkAuthHeader} = require("../validations/userValidation.js")
const {validationMiddleware}= require("../middlewares/validationMiddleware.js")
const {upload} = require("../config/multer.js")
const {addProductValidation} = require("../validations/userValidation.js") 

router.get("/allProducts",checkAuthHeader,validationMiddleware, (req, res)=>{
    res.json({message:"fetched all products"})
})

router.post("/create",upload.single("image"),addProductValidation,validationMiddleware,(req, res)=>{
  
    const product = {title: req.body.title, image_path: req.file.originalname}
    const data = []
    data.push(product)
    res.status(201).json({message:"product added successfully", data:data})
})

module.exports = router