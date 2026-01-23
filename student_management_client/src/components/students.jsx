import React,{useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'

const baseurl = "https://student-managemnet-api.onrender.com"

const Students = () => {
    const [data, setData] = useState()
    const [studentName,setStudentName] = useState()
    const [studentClass, setStudentClass] = useState()

    const getStudents = () =>{
        fetch(baseurl+"/getallstudents")
        .then(res => res.json())
        .then(data=> {console.log(data); setData(data)})
        .catch(err=> console.error(err))
    }
    useEffect(()=>{
        getStudents()
    },[])

    const addStudent = () =>{
        fetch(baseurl+"/addStudent", {
            method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({
                name:studentName,
                class:studentClass
            })
        })
        .then(res=>res.json())
        .then(data=>{alert(data.message); getStudents()})
        .catch(err=>console.log(err))
    }
   
    const deleteStudent=(studentID)=>{
        fetch(`${baseurl}/deletestudent/${studentID}`, {method:"DELETE"})
        .then(res=>res.json())
        .then(data=>{alert(data.message); getStudents()})
        .catch(err=>console.log(err))
    }
    const editStudent = (studentID)=>{
        const editname = prompt("enter student name")
        const editclass = prompt("enter student class")

        fetch(`${baseurl}/updateStudent/${studentID}`, {
            method:"PUT",
            headers:{
                "Content-Type" :"application/json"
            },
            body: JSON.stringify( {
                name:editname,
                class:editclass
            })
        })
        .then(res=> res.json())
        .then(data=>{alert(data.data); getStudents()})
    }
    
  return (
    <div className='container'>
        <div>
            <input type='text' name="name" onChange={(e)=>setStudentName(e.target.value)}/>
            <input type='number' name='class' onChange={(e)=>setStudentClass(e.target.value)}/>
            <Button onClick={addStudent}>Add</Button>
        </div>
        <div>
            <p>{data?.message && data?.message}</p>
            {data?.data?.map(val=><div><p>student name {val.name}</p>
            <p>class name {val.class}</p>
            <Button variant='info' onClick={()=>editStudent(val.studentID)}>Edit</Button> 
            <Button variant='danger' onClick={()=>deleteStudent(val.studentID)}>delete</Button> 
            </div>)}
        </div>
    </div>
  )
}

export default Students