const express = require('express')
const { addCart, updateCart, getCart, deleteCart, getByIdCart } = require('../controller/cart.controller')
const cartRouter = express.Router()

cartRouter.post('/add', addCart)
cartRouter.put('/update/:id', updateCart)
cartRouter.get('/get', getCart )
cartRouter.get('/get/:id' , getByIdCart)
cartRouter.delete('/delete/:id' , deleteCart)

module.exports = { cartRouter }