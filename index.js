const express = require('express')
const cors = require('cors')
const http = require('http')
const { productRouter } = require('./routes/product.route')
const { cartRouter } = require('./routes/cart.route.js')
const { userRoute } = require('./routes/user.route.js')
const { connectDb } = require('./server.js')


connectDb()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/user', userRoute)

const server = new http.createServer(app)

server.listen(5000, () =>{
    console.log(`listening at port 5000`);
})