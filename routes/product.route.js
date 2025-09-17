
const express = require('express')
const productRouter = express.Router()
const {addProduct, getProductById, getProduct} = require('../controller/product.controller')

productRouter.post('/add', addProduct )

productRouter.get('/getById/:id', getProductById )

productRouter.get('/getProduct', getProduct )

module.exports = { productRouter }