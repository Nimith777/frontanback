const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Nimith:ayushnimith@cluster0.rsi7ofu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema =  new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel