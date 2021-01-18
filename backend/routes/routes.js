const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.post('/signup', (req, res) => {
    const signup = new user({
        name:req.body.name,
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