// require the food models
const Food=require('../models/foodModel')
// import mongoose
const mongoose=require('mongoose');

// create food via a POST request
const createFood =async(req,res)=>{
    const{title,quantity,price}=req.body
    try {
        const food=await Food.create({title,quantity,price})
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}
// delete food
const deleteFood=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No food with such Id found!"})
    }
    try {
        const food=await Food.findOneAndDelete({_id: id})
    if(!food){
        res.status(400).json({error:"No food found"})
    }
    res.status(200).json(food) 
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// get All foods availabe
const getFoods=async(req,res)=>{
    try {
        const food=await Food.find({}).sort({createdAt:-1});
        res.status(200).json(food)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={
    createFood,
    deleteFood,
    getFoods
}
