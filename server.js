const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/ziva'

const connectDb = async () =>{
 await mongoose.connect(url)
 console.log('connected');
 
}

module.exports = { connectDb }