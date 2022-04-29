const mongoose = require("mongoose");
const cartItems = new mongoose.Schema(
   { 
      username:{ type: String, },
     email: { type: String, },
     phone: { type: String, },
     address: {  type: String,  },
      products: 
      [
         { 
            id:{ type:String},
            name: {type: String},
          
            price:{type: Number},
            
            img:{type: String},
            description:{type: String},
            size: {type:String},
            qantityCart: {type: Number},
            totalCart: {type: Number},
            
         }
      ]
          
},
   { timestamps: true }

);

module.exports = mongoose.model("Other", cartItems);