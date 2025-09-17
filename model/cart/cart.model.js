const mongoose = require('mongoose')
const { cartSchema } = require('./cart.schema')

const cartModel = mongoose.model('cart' , cartSchema)

module.exports = { cartModel }