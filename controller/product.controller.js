const product = require('../model/product/product.model')

const addProduct = async (req, res) => {
    const addProduct = new product(req.body)
    const data = await addProduct.save()
    res.send(data)
}

const getProductById = async (req, res) => {
    const {id} = req.params
    const data = await product.findOne({_id : id})
    res.send(data)
}

const getProduct =  async (req, res) => {
    const data = await product.find()
    res.send(data)
}

module.exports = { addProduct, getProductById, getProduct }