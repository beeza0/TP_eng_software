const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.post('/signup', (req, res) => {
    console.log('Entrei', req.body);
    const signup = new user({
        userName:req.body.userName,
        cpf:req.body.cpf,
        password:req.body.password
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