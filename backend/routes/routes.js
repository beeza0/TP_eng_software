const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/getAllUsers', (req, res) => {
    user.find({})
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/login', (req, res) => {
    user.findOne({cpf: req.body.cpf})
    .then(user => {
        if(req.body.password == user.password) res.json(user)
        else res.json(300) // the password doesn`t match
    })
    .catch(_ => {
        res.json(400) // cpf is not registered (melhorar)
    })
})

router.post('/signup', (req, res) => {
    const signup = new user({
        userName:reqi.body.userName,
        cpf:reqi.body.cpf,
        password:reqi.body.password
    })
    signup.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})




module.exports = router