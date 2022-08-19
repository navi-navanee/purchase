const express = require('express')
const { cuItem, maxPurchase, totalvalue, itemtotal } = require('../controllers/customerItem')

const router = express.Router()

// @rout  POST /api/cuItem/
router.post('/', cuItem)

// @desc  the customer with maximum number of purchase
router.get('/maxPurchase', maxPurchase)

// @desc  to display the total value for each item
router.get('/totalvalue', totalvalue)

// @desc  Display total price item wise
router.get('/itemtotal', itemtotal)

module.exports = router