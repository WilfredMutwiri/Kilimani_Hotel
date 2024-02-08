// require express
const express=require('express');
// import food controllers
const{
    createFood,
    deleteFood,
    getFoods
}=require('../controllers/foodsController');
// create express router
const router=express.Router();
// get all foods
router.get('/',getFoods);
// create food
router.post('/',createFood);
// delete food
router.delete('/',deleteFood)
// export router
module.exports=router;