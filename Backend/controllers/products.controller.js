const productData = require('../config/productData')    // scrapped product data
const ProductModel = require('../models/product.model')

exports.getall = async(req,res) =>{
    const _id = req.params.id;
    let products;
    try {
        if (_id)  products = await ProductModel.find({_id})
        else  products = await ProductModel.find()
        res.json(products)
    } catch (error) {
        res.json({msg : error.message})
    }
}

// only admin panel will have this access
exports.create = async(req,res) =>{
    const { product_id,product_img,brand_img,product_name,average_rating,review_count,product_specs,stability,traction,dry_traction,ride_comfort,tire_wear,wet_traction,noise_level} = req.body;
    try {
        const newproduct = new ProductModel({ product_id,product_img,brand_img,product_name,average_rating,review_count,product_specs,stability,traction,dry_traction,ride_comfort,tire_wear,wet_traction,noise_level})
        await newproduct.save()
        res.json({msg :" product created" })
        
    } catch (error) {
        res.json({msg : error.message })
    }
}


exports.update = async(req,res) =>{
    const payload = req.body;
    const _id = req.params.id;
    const userID = req.body.userID;
    
    const product = await ProductModel.find({_id})
    
    console.log(userID ,product);
    try {
        if(userID !== product[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
            const data  = await ProductModel.findByIdAndUpdate({_id},payload)
            res.json({msg : "product updated"})
        }
        
    } catch (error) {
        
        res.json({msg : error.message})
    }
}
exports.delete = async(req,res) =>{
    const payload = req.body;
    const _id = req.params.id;
    const userID = req.body.userID;
    
    const product = await ProductModel.find({_id})
    
    console.log(userID ,product);
    try {
        if(userID !== product[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
             await ProductModel.findByIdAndDelete({_id})
            res.json({msg : "product deleted"})
        }
        
    } catch (error) {
        
        res.json({msg : error.message})
    }
}





// ! adding all products data to the server

exports.addAllDuckingData = async(req,res) =>{
    
    try {
       
        
        await ProductModel.insertMany(productData)
        res.json({msg :" product created" })
        
    } catch (error) {
        res.json({msg : error.message })
    }
   
}