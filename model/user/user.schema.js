
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName : {
    type: String,
    trim : true,
    require : true
  },
  email : {
    type: String,
    trim: true,
    require: true
  },
  password : {
    type: String,
    trim : true,
    require:true
  }
})

module.exports = userSchema