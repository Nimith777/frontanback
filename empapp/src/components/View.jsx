import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, formLabelClasses, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Add from './Add'

const View = () => {
  var[users,setusers]=useState([])
  var[update,setupdate]=useState(false)
  var[singlevalue,setsinglevalue]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/view")
    .then((res)=>{
      console.log(res.data)
      setusers(res.data)

    })
  },[])
  const deleteValue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3001/remove/"+id)
   .then((response)=>{
     alert(response.data)
     window.location.reload(true)
   })
   .catch((err)=>console.log(err))
  }
  const updateValue=(val)=>{
    console.log('update')
    setupdate(true)
    setsinglevalue(val)
  }
      var finalJSX=<TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color:'green', fontFamily:'fantasy'}}>USERNAME</TableCell>
            <TableCell style={{color:'green', fontFamily:'fantasy'}}>AGE</TableCell>
            <TableCell style={{color:'green', fontFamily:'fantasy'}}>POSITION</TableCell>
            <TableCell style={{color:'green', fontFamily:'fantasy'}}>SALARY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((val,i)=>{
            return(
              <TableRow>
                <TableCell>{val.ename}</TableCell>
                <TableCell>{val.eage}</TableCell>
                <TableCell>{val.eposition}</TableCell>
                <TableCell>{val.esalary}</TableCell>
                <TableCell>
                  <Button variant='contained' color='success' onClick={()=>updateValue(val)}>Update</Button>
                </TableCell>
                <TableCell>
                  <Button variant='contained' color='success' onClick={()=>deleteValue(val._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  

if(update) finalJSX = <Add data={singlevalue} method='put' />

 return finalJSX
}

export default View