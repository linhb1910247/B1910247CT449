const mongoose=require("mongoose");
const { BadRequestError } = require("../errors");
const Products = require("../models/Product.model");
//const Crypto= require("cryto-js");

//tao product
exports.createProduct = async (req, res,next) => {
    if(!req.body.name){
        return next(new BadRequestError(400,"Name can not be emty"));
    }

    const newProducts = new Products({
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    size: req.body.size,
    price: req.body.price,
    id:req.body.id,
    });
    
    try {
        const document = await newProducts.save();
        return res.send(document);

    }catch(error){
        return next(
            new BadRequestError(
                500,
                "An error occurred while creating the product"
            )
        );
    }
}
// get 1 product

exports.getProduct = async (req, res,next) => {
    
    
    try {
        const product = await Products.findOne({id: req.params.id});
        if(!product){
            return next (new BadRequestError(404,"Product not found"));
        }
        return res.send(product);
    }catch (error){
     return next(
         new BadRequestError(
             500,
             'Error retrueving product with id =${req.params.id}'
         )
     );
    }
 };
 exports.getallProduct = async (req, res,next) => {
    const condition = {};
    const {name}=req.query;
    if(name){
        condition.name={ $regex: new RegExp(name), $options: "i"};
    }
    try{
        const document = await Products.find(condition);
        return res.send(document);
    }catch (error){
        return next (
            new BadRequestError(
                500,
                "An error occurred while retrieving Products"
            )
        );
    }
};