const express = require('express')
const controller  = require('../controllers/cart.controller')
const productRoute = express.Router()

productRoute.get('/' , controller.getall)
productRoute.post('/create', controller.create)
productRoute.delete('/delete/:id', controller.delete)


module.exports = productRoute


// only user can access this route 
// user will get data all data 

// user will get only data added in cart
// user will get only data added in cart