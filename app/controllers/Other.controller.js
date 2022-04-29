const mongoose=require("mongoose");

const { BadRequestError } = require("../errors");
const Cart = require("../models/Other.model");
exports.createCart = async (req, res,next) => {
 
    // create a cart
    const newCart = new Cart({
        
        username: req.body.name,
        email:req.body.email,
        address:req.body.address,
        phone:req.body.phone,
        products: req.body.products,
      },
       
      
      
    )
     
      
    try {
        //Save cart in the database
        const document = await newCart.save();
        return res.send(document);
        
    }catch(error){
        return next(
            new BadRequestError(
                500,
                "An error occurred while creating the product"
            )
        );
    }
};
exports.getallCart = async (req, res,next) => {
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
exports.getCart = async (req, res,next) => {
    const condition = {};
    const {cartname}=req.query;
    if(cartname){
        condition.cartname={ $regex: new RegExp(cartname), $options: "i"};
    }
    try{
        const document = await Cart.find(condition);
        return res.send(document);
    }catch (error){
        return next (
            new BadRequestError(
                500,
                "An error occurred while retrieving cart"
            )
        );
    }
};

// exports.deleteCart= async (req,res,next) =>{
  
//     try{
//         const document = await Cart.findOneAndDelete({id: req.params.id});
//         if (!document){
//             return next (new BadRequestError(404, "Cart not found"));
//         }
//         return res.send({ message:"Cart was deleted successfully"});
//     }catch (error){
//         return next(
//             new BadRequestError(
//                 500,
//                 'Could not delete Cart with id =${req.params.id}'
//             )
//         );
//     }
// };

// exports.deleteCartAll = async(req, res, next)=>{
//     try{
//         const data = await Cart.deleteMany({});
//         return res.send({
//             message: 'delete Cart were deleted successfully',
//         });
//     }catch (error){
//         return next(
//             new BadRequestError(
//                 500,
//                 "An error occurred while removing all contacts"
//             )
//         );
//     }
// };
