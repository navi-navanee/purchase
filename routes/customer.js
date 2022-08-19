const express = require('express')
const { customer, findcustomer, findnumber } = require('../controllers/customer')
const router = express.Router()

// @desc  add customer
router.post('/', customer)

// @desc  find the customer with same location
router.post('/findcustomer', findcustomer)

// @desc  find customer with number starting with 99
router.post('/findnumber', findnumber)

module.exports = router