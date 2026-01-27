const appkey = "545aedaasaaa"

const signup = (req, res)=>{
    res.status(200).send({message: "registered successfully"})
}


const login = (req, res, next)=>{
    try {
        const a = b
        if(req.body.number==="7702146910" && req.body.password ==="tom@123"){
        res.status(200).send({message:"login successfully", appkey: appkey})
    }else{
        // res.status(400).send({message:"invalid credentials"})
        next({msg_err :"invalid credentials" , status:400})
    }
    } catch (error) {
        // console.log(error.message)
        next({msg_err : error.message, status:400})
    }
    
}


const profile = (req, res)=>{
    try {
        console.log(h)
        res.status(200).send({message:"fetched profile successfully", data:{
        name:"tom"
    }})
    } catch (error) {
        console.log(error)
        res.status(400).send("internal server error")
    }
  
    // }else{
        // res.status(404).send({message:"profile not found"})
    // }
   
}

module.exports = {signup, login, profile, appkey}