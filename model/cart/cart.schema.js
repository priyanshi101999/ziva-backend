const mongoose = require('mongoose')


  
  const cartSchema = new mongoose.Schema({
      name: {
          type: String,
          require: true,
          trim: true
      },
      price: {
          type: Number,
          require: true
      },
      quantity: {
          type: Number,
          require: true,
          default: 1
      },
      img: {
          type: String,
          require: true
      }, 
      total:{
        type: Number,
        require: true
      }
  
  })

  module.exports = { cartSchema }