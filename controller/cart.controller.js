const { cartModel } = require('../model/cart/cart.model')

const addCart = async (req, res) => {
    console.log(req.body);
    
    const cart = new cartModel(req.body)
    const data = await cart.save()
    res.send(data)
}

const updateCart = async (req, res) => {
    const { id } = req.params;
    const data = await cartModel.updateOne({ _id: id }, { $set: req.body })
    res.send(data)
}


const getCart = async (req, res) => {
    const data = await cartModel.find()
    res.send(data)
}

const deleteCart = async (req, res) => {
    const { id } = req.params
    const data = await cartModel.deleteOne({ _id: id })
    res.send(data)
}

const getByIdCart = async (req, res) => {
    const { id } = req.params
    const data = await cartModel.find({ _id: id })
    res.send(data)
}

module.exports = { addCart, getCart, deleteCart, getByIdCart, updateCart }