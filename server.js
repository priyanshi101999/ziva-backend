const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGO_URL
console.log(url);

const connectDb = async () =>{
 await mongoose.connect(url)
 console.log('connected');
 
}

module.exports = { connectDb }