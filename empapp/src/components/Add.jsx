import { Button, TextField, Typography, } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[inputs,setinputs]=useState(props.data)
  var navigate=useNavigate()

  const inputhandler=(e)=>{
    const{name,value}=e.target
    setinputs((prevData)=>({...prevData,[name]:value}))
    console.log(inputs)
  }
  const addhandler=()=>{
    console.log("btn clicked")
    if(props.method === "post"){
      axios.post("http://localhost:3001/create",inputs)
   .then((response)=>{
    console.log(response.data)
    alert(response.data)
    navigate('/view')
   })
   .catch((err)=>console.log(err))
    }
    if(props.method === "put"){
      axios.put("http://localhost:3001/edit/"+inputs._id,inputs)
      alert("Data updated")
      navigate('/add')
      setTimeout(() => {
        navigate('/view')
      },10);
  }
  }
  return (
    <div>
      <Typography variant='h4' style={{color:'green', fontFamily:'fantasy'}}>ADD EMPLOYEE FORM</Typography><br/><br/><br/>
        <TextField variant='outlined' label='username' name='ename' value={inputs.ename} onChange={inputhandler}></TextField><br/><br/><br/>
        <TextField variant='outlined' label='age' name='eage' value={inputs.eage} onChange={inputhandler}></TextField><br/><br/><br/>
        <TextField variant='outlined' label='position' name='eposition' value={inputs.eposition} onChange={inputhandler}></TextField><br/><br/><br/>
        <TextField variant='outlined' label='salary' name='esalary' value={inputs.esalary} onChange={inputhandler}></TextField><br/><br/><br/>
        <Button variant="contained" color='success'  onClick={addhandler}>SUBMIT</Button>
    </div>
  )
}

export default Add