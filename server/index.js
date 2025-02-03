const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./db')
const employeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.post('/register',(req,res)=>{
    employeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    employeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record exists")
        }
    })
    // .catch(err => res.json(err))
})
app.listen(3000,(req,res)=>{
    console.log("server is running")
})