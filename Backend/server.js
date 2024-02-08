// require dotenv
require ('dotenv').config()
// require mongoose
const mongoose=require('mongoose');
// require express
const express=require('express');
// create express app
const app=express();
// use express.json
app.use(express.json());
// create food router
const foodRouter=require('./Routes/foodRoutes')
app.use('/api/foods',foodRouter)
// listen to request
app.listen(process.env.PORT,()=>{
    // connect to db
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Listening on port ",process.env.PORT)
    })
    .catch((error)=>{
        console.log(error)
    })
})

