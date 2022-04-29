const express=require('express');
const Product=require('../controllers/Product.controller');

const router = express.Router();

router.post("/post", Product.createProduct);
router.get("/", Product.getallProduct);
router.get("/:id", Product.getProduct);
module.exports=router;
