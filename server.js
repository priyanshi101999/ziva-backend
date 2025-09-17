const mongoose = require('mongoose')
const url = process.env.MONGO_URL

const connectDb = async () =>{
 await mongoose.connect(url)
 console.log('connected');
 
}

module.exports = { connectDb }