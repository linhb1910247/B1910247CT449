const mongoose = require("mongoose");

/*const reviewsSchema = mongoose.Schema({
   name: {type: String, required: true},
   rating: {type: String, required: true, default: '0'},
   comment: {type: String, required: true},
   User: {type: Mongoose.Schema.Typese.ObjectId, 
      required: true,
      ref: "User",
   },
})*/
const ProductSchema = new mongoose.Schema(
   { 
      id:{type:String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true, },
    size: {type: String},
    price: {type: Number, required: true,default: '1'},
},
   { timestamps: true }

);

module.exports = mongoose.model("Products", ProductSchema);