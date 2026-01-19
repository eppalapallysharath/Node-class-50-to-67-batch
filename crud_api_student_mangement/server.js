const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

//middlewares to get data from req body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("iam default endpoint");
});

app.get("/getAllStudents", (req, res) => {
  const studentsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "students.json"), "utf-8"),
  );
  console.log(studentsData.length);
  if (studentsData.length > 0) {
    return res.status(200).json({
      status: "success",
      data: studentsData,
    });
  } else {
    return res
      .status(404)
      .json({ status: "success", message: "no students data found in server" });
  }
});

app.get("/getStudent/:studentId", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      studentID: req.params.studentId,
    },
  });
});

app.post("/addStudent", (req, res) => {
  const student = {
    name: req.body.name,
    class: req.body.class,
    studentID: v4(),
  };
  const studentData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "students.json"), "utf-8"),
  );
  studentData.push(student);
  fs.writeFile(
    path.join(__dirname, "data", "students.json"),
    JSON.stringify(studentData),
    (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ status: "failed", message: err.message });
      } else {
        return res.status(201).json({
          status: "success",
          message: "student added successfully",
        });
      }
    },
  );
});

app.put("/updateStudent/:studentId", (req, res) => {
  res.status(200).json({ status: "success", data: "updated successfully" });
});

app.delete("/deleteStudent/:studentId", (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "delete student successfully" });
});

const port = 8080;
app.listen(port, () => {
  console.log("server started at " + port);
});
