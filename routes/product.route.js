const express = require("express");
const router = express.Router();
const Product = require("../models/product.models.js")
const {getProducts, updateProduct} = require ('../controler/product.controler.js')
const {getProduct} = require ("../controler/product.controler.js")
const {createProduct, deleteProduct} = require("../controler/product.controler.js")

router.get('/', getProducts);

router.get("/:id", getProduct)

router.post("/", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct) 




module.exports = router