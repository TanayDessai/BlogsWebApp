const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()

//database

const connectDB=async()=>{
    try{
        await mongoose.connect()
    }
    catch(err){

    }
}
app.listen(5000,()=>{
    console.log("App is running on port 5000")
})