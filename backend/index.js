const express = require('express')
const employeeModel = require("./model")
const cors = require('cors')

//initialize
const app = new express()

//middleware
app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use(cors())

//api
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send('Employee Created')
})

app.get('/view',async(req,res)=>{
    const data = await employeeModel.find()
    res.json(data)
    console.log(data)
})

app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send('Employee Deleted')
})

app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send('Employee Updated')
})


//listening
app.listen(3001,() => {
  console.log('Listening')
})