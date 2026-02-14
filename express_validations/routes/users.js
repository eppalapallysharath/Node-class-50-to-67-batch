const express = require("express");
const router = express.Router();
const { body, validationResult, query, param } = require("express-validator");
const {allUsersValidationCheck} = require("../validations/userValidation.js")
const {validationMiddleware} = require("../middlewares/validationMiddleware.js")

router.get(
  "/allusers",
  allUsersValidationCheck, 
    validationMiddleware,
  (req, res) => {
    if (req.query.city) {
      return res
        .status(200)
        .json({ message: "favorite city", city_name: req.query.city });
    } else {
      res.json({ message: "all users", data: [{ name: "jermy" }] });
    }
  },
);

router.post(
  "/adduser",
  [
    body("name").isAlpha().isLength({ min: 3, max: 30 }),
    body("gender").isAlpha().isLength({ max: 1 }).isIn(["m", "f"]),
  ],
  (req, res, next) => {
    const validationError = validationResult(req);
    console.log(validationError);
    if (!validationError.isEmpty()) {
      return res.status(400).json({ error: validationError.errors });
    } else {
      next();
    }
  },
  (req, res) => {
    const data = [{ name: req.body.name, gender: req.body.gender }];
    res.json({ message: "user added", data });
  },
);

router.get(
  "/getuserbyid/:id",
  [param("id").isInt()],
  (req, res, next) => { 
    const valError = validationResult(req);
    if (!valError.isEmpty()) {
      return res.status(400).json({ error: valError.errors });
    } else {
      next();
    }
  },
  (req, res) => {
    const id = Number(req.params.id);
    console.log(id)
    const data = [
      { userID: 122, name: "tome" },
      { userID: 142, name: "jerry" },
      { userID: 1892, name: "ben" },
    ];
    const user = data.find((val) => val.userID === id);
    if (user) {
      res.status(200).json({ message: "user info fetched successfully", user });
    } 
    else {
      res.status(404).json({ message: "user not found" });
    }
  },
);

module.exports = router;
