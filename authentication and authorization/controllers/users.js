const authModel = require("../models/auth.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {sendEmail} = require("../config/nodemailer.js")

exports.login = async (req, res) => {
  try {
    if (Object.keys(req.body).length < 1) {
      return res
        .status(429)
        .json({
          message: "validation error",
          data: "email, password are required",
        });
    }

    if (req?.body?.email?.length < 1 || req?.body?.password?.length < 1) {
      return res
        .status(400)
        .json({
          message: "validation error",
          data: "email, password are required",
        });
    } else {
      const checkuser = await authModel.findOne({ email: req.body.email });
      if (checkuser) {
        const decryptPassword = await bcryptjs.compare(
          req.body.password,
          checkuser.password,
        );
        if (decryptPassword) {
          const token = await jwt.sign(
            { email: checkuser.email },
            process.env.jwt_secret_key,
            { expiresIn: "24h", algorithm: "HS256" },
          );
          console.log(token);
            sendEmail(checkuser.email, "login successfully", "hi, you have login successfully")

          return res
            .status(200)
            .json({
              message: "login successfully",
              userinfo: {
                email: checkuser.email,
                name: checkuser.name,
                bio: checkuser.bio,
                user_type: checkuser.user_type,
              },
              token: token,
            });
        } else {
          return res.status(429).json({ message: "invalid credentials" });
        }
      } else {
        res.status(429).json({ message: "invalid credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

exports.signup = async (req, res) => {
  try {
    if (Object.keys(req.body).length < 1) {
      return res
        .status(429)
        .json({
          message: "validation error",
          data: "name, email, password, bio are required",
        });
    }
    if (
      req?.body?.name?.length < 1 ||
      req?.body?.email?.length < 1 ||
      req?.body?.password.length < 1 ||
      req?.body?.bio.length < 1
    ) {
      return res.json({
        message: "validation error",
        data: "name, email, password, bio are required",
      });
    } else {
      const { password, bio, name, email } = req.body;
      const chekemail = await authModel.findOne({ email: email });
      if (chekemail) {
        return res
          .status(400)
          .json({ message: "email already exists try new email" });
      } else {
        const hashpassword = bcryptjs.hashSync(password, 12);
        const signupuser = await authModel.create({
          email: email,
          password: hashpassword,
          name: name,
          bio: bio,
        });
        console.log(signupuser);
        // mailConfig().sendMail({from:"noreplay@gmail.com",to:email, subject:"welcome to ecommerece platform",text:"you have successfully registered"},(er)=>{
        //     if(er){
        //         console.log(er)
        //     }
        // })
        sendEmail(email, "signup successfully", "hi, you have successfully signup")
        res.send({message:"user register successfully and mail sent for for given email", userInfo: signupuser})
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profileData = await authModel.findById(req.user.id);
    res.json({ profile_info: profileData });
    //    if(req.headers.authorization){
    //         if(req.headers.authorization.startsWith("Bearer")){
    //             const token = req.headers.authorization.split(" ")[1]
    //             const decodedToken =  await jwt.verify(token, process.env.jwt_secret_key)
    //             const checkuser = await authModel.findOne({email:decodedToken.email})
    //             if(checkuser){
    //                 res.status(200).json(checkuser)
    //             }else{
    //                 res.status(403).json({message: "access denied"})
    //             }
    //         }else{
    //             res.status(401).send("not ok")

    //         }
    //    }else{
    //     res.status(401).send("not ok")
    //    }
  } catch (error) {
    // if(error.message == "jwt expired"){
    //     res.status(401).json({message:"token expired"})
    // }
    // if(error.message =="invalid signature"){
    //      res.status(401).json({message:"provide correct jwt token"})
    // }

    res.status(400).json(error);
  }
};
