const express = require('express')
const { customer, findcustomer } = require('../controllers/customer')
const router =express.Router()

router.post('/',customer)
router.post('/findcustomer',findcustomer)

module.exports = router