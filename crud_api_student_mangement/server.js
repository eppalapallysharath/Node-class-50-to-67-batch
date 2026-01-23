const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const cors = require("cors")


app.use(cors({
  // origin:"http://localhost:5173"
  origin:["http://localhost:5173","http://localhost:5174" ],
  methods:["GET","POST", "DELETE", "PUT"]
}))
//middlewares to get data from req body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("iam default endpoint");
});

app.get("/getAllStudents", (req, res) => {
  const studentsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "students.json"), "utf-8"),
  );
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
  const studentId = req.params.studentId
  const studentData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "students.json"), "utf-8"))
  
  const student = studentData.find((val)=> val.studentID == studentId )
  if(student !== undefined){
      return res.status(200).json({
    status: "success",
    data: student,
  });
  }else{
    return res.status(404).json({status:"failed", message:"Student record not found"})
  }
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
  const studentId = req.params.studentId
  const studentsData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "students.json"), "utf-8"))
  const student = studentsData.find(val => val.studentID == studentId)
  if(student != undefined){
      for( stu of studentsData){
        if (stu.studentID == studentId){
          stu.name=req.body.name
          stu.class=req.body.class
        }
      }
      fs.writeFile(path.join(__dirname, "data", "students.json"),JSON.stringify(studentsData),(err)=>{
        if(err){
          return res.status(500).json({status:"failed", message: "internal server error"})
        }else{
          return res.status(200).json({ status: "success", data: "updated successfully for student id " +studentId });
        }
      })
  }else{
    return res.status(404).json({status:"failed", message: "student record not found to update try again later"})
  }
});

app.delete("/deleteStudent/:studentId", (req, res) => {
  const studentId = req.params.studentId
  const studentData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "students.json"), "utf-8"))
  const student = studentData.find(val => val.studentID == studentId)

  if(student != undefined){
    const newStudentData = studentData.filter(val => val.studentID != studentId)
    fs.writeFile(path.join(__dirname, "data", "students.json"), JSON.stringify(newStudentData), (err)=>{
      if(err){
        return res.status(500).json({status:"failed", message:"internal server error try again later"})
      }else{
        return res.status(200).json({status:"success", message:"student record delete successfully"})
      }
    })
  }else{
    return res.status(404).json({status:"failed", message:"no student record found with given id "+ studentId})
  }

});

const port = 8080;
app.listen(port, () => {
  console.log("server started at " + port);
});
