const { userModel } = require('../model/user/user.model')

const register = (req, res) => {

    userModel.findOne({ email: req.body.email }).then(data => {
        console.log(data);

        if (data) {
            res.send("Email already exist")
        } else {
            const user = new userModel(req.body)
            user.save().then(data => res.send({data, status: 'success'}))
                .catch(err => res.err(err))
        }

    })

}

const login = (req, res) => {
    userModel.findOne({ email: req.body.email }).then(data => {
        if (data) {
            if (data.password !== req.body.password) {
                res.send("Incorrect password")
            }
            res.send({data, status: 'success'})
        } else {
            res.send("No records with this email id")
        }
    })
}

module.exports = { register, login }