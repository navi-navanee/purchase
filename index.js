const express = require('express')
const dotenv = require('dotenv').config()
const connectDB =require('./config/db')

connectDB()

const app=express()
const port=process.env.PORT || 5000

app.get('/',(req,res) =>{
    res.send("heloo")
})

app.listen(port , ()=>{
    console.log(`server start on the port ${port}`);
 })