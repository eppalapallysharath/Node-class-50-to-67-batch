const { query, param, body, header, check} = require("express-validator")


exports.checkAuthHeader = [header("Authorization").isJWT().isLength({min:7}).withMessage("minimum 7 characters or more")]
exports.allUsersValidationCheck = [query("city").optional().isLength({ min: 2 }).withMessage("city name should be above 2 characters").isAlpha().withMessage("only a-z A-Z")]


exports.addProductValidation = [
    body("title").isLength({min:3}).withMessage("Provide title minimum 3 and above characters").isAlpha().withMessage("only a-z A-Z allowed"),
    check("image").custom((value, {req})=>{
        if(!req.file){
                throw new Error("required image to upload")
        }else{
            return true
        }
    })
]