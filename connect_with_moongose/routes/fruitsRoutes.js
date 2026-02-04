const express = require("express");
const router = express.Router()
const {getFruits, addFruits, deleteFruit, updateFruits, getFruitById} = require("../controllers/fruitsController.js")

router.get("/allFruits",getFruits)
router.post("/addfruits", addFruits)
router.put("/updatefruit/:fruitId", updateFruits)
router.delete("/deletefruit/:fruitId", deleteFruit)
router.get("/fruit/:fruitId", getFruitById)


module.exports = router