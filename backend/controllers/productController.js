import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//------------- FETCH ALL PRODUCTS ---------------//
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products);
})
//---------------- FETCH SINGLE PRODUCT BY PARAM ID------------ //
const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.find(req.params.id)

    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error('Product not found')
    }
})

export { getProducts, getProductById }