const { appkey } = require("./usercontroller.js");


exports.allvideos = (req, res) => {
  // if (req.query.appkey === appkeyx`) {
    res.status(200).send({ message: "fetched all videos" });
  // } else {
    // res.send({ message: "failed to fetch videoos invalid app key" });
  // }
};

exports.myvideos = (req, res) => {
  // if (req.query.appkey === appkey) {
    res.send({ message: "my videos" });
  // } else {
    // res.send({ message: "failed to fetch video invalid app key" });
  // }
}