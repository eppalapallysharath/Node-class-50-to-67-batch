const jwt = require("jsonwebtoken")
require("dotenv").config()
const authModel = require("../models/auth.js")

exports.authentications = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      if (req.headers.authorization.startsWith("Bearer")) {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(
          token,
          process.env.jwt_secret_key,
        );
        const checkuser = await authModel.findOne({
          email: decodedToken.email
        }, {email:true, user_type:true});
        if (checkuser) {
            req.user={email:checkuser.email, id:checkuser._id, role:checkuser.user_type }
            next()
        } else {
          res.status(403).json({ message: "access denied" });
        }
      } else {
        res.status(401).send("not ok");
      }
    } else {
      res.status(401).send("not ok");
    }
  } catch (error) {
    if (error.message == "jwt expired") {
      res.status(401).json({ message: "token expired" });
    }
    if (error.message == "invalid signature") {
      res.status(401).json({ message: "provide correct jwt token" });
    }
    console.log(error);
    res.status(400).json(error);
  }
};
