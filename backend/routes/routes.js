const express = require('express')
const router = express.Router()
const user = require('../models/user')
const bike = require('../models/bike')
const rent = require('../models/rent')


/*--- users -- */

router.get('/getAllUsers', (req, res) => { //get all users from database
    user.find({})
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/login', (req, res) => { // log user in the plataform
    user.findOne({cpf: req.body.cpf})
    .then(user => {
        if(req.body.password == user.password) res.json(user)
        else res.json(300) // the password doesn`t match
    })
    .catch(_ => {
        res.json(400) // cpf is not registered (melhorar)
    })
})

router.post('/signup', (req, res) => { // create new user in the database
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

router.post('/getUserByCpf', (req, res) => { //get user by its cpf
    user.findOne({cpf: req.body.cpf})
    .then(user => {
        if(user) res.json(user)
        else res.json(null)
    })
    .catch(err => {
        res.json(err)
    })
})

/* --- bike -- */


router.post('/createBike', (req, res) => { //create new bike in the database
    const newBike = new bike({
        id:req.body.id,
        color:req.body.color,
        price:req.body.price
    })
    newBike.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/getAllBikes', (req, res) => { //get all bikes from database
    bike.find({})
    .then(bikes => {
        res.json(bikes)
    })
    .catch(err => {
        res.json(err)
    })
})

router.patch('/updateBike', (req, res) => { //get all bikes from database
    bike.findOneAndUpdate({cpf: req.body.cpf}, {...req.body})
    .then(_ => {
        res.send("Success")
    })
    .catch(err => {
        res.json(err)
    })
})


/* --- Rents --- */

router.post('/createRent', (req, res) => { //create new rent in the database
    const newRent = new rent({
        id:req.body.id,
        cpf:req.body.cpf,
        price:req.body.price,
        imgUrl:req.body.imgUrl
    })
    newRent.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/getAllRentsByCpf', (req, res) => { //get rent its by cpf from database
    rent.find({cpf: req.body.cpf})
    .then(rents => {
        res.json(rents)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/getAllRents', (req, res) => { //get all rents by from database
    rent.find({})
    .then(rents => {
        res.json(rents)
    })
    .catch(err => {
        res.json(err)
    })
})



module.exports = router