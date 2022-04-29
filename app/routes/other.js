const express=require('express');
const other=require('../controllers/Other.controller');

const router = express.Router();

router.post("/create", other.createCart);
router.get("/getall", other.getallCart);
router.get("/", other.getCart);

module.exports=router;
