const productModel = require('../models/product.model')

exports.getall = async(req,res) =>{
    try {
        const products = await productModel.find(  {userID : req.body.userID})
        res.json(products)
    } catch (error) {
        res.json({msg : error.message})
    }
}

exports.create = async(req,res) =>{
    const {title ,body,device} = req.body;
    let userID = req.body.userID;
    try {
        const newproduct = new productModel({title ,body,device,userID})
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
    
    const product = await productModel.find({_id})
    
    console.log(userID ,product);
    try {
        if(userID !== product[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
            const data  = await productModel.findByIdAndUpdate({_id},payload)
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
    
    const product = await productModel.find({_id})
    
    console.log(userID ,product);
    try {
        if(userID !== product[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
             await productModel.findByIdAndDelete({_id})
            res.json({msg : "product deleted"})
        }
        
    } catch (error) {
        
        res.json({msg : error.message})
    }
}

