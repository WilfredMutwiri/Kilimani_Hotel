// in this file, we create the food model used to enter food values in the database
// import mongoose
const mongoose=require('mongoose');
// initiate schema creation
const Schema=mongoose.Schema;
// create food schema
const foodSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('food',foodSchema)