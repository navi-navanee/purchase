const express = require('express')
const { customer, findcustomer, findnumber } = require('../controllers/customer')
const router =express.Router()

router.post('/',customer)
router.post('/findcustomer',findcustomer)
router.post('/findnumber',findnumber)

module.exports = router