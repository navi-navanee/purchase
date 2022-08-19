const express = require('express')
const { cuItem, maxPurchase, totalvalue, itemtotal } = require('../controllers/customerItem')

const router =express.Router()

router.post('/',cuItem)
router.get('/maxPurchase',maxPurchase)
router.get('/totalvalue',totalvalue)
router.get('/itemtotal',itemtotal)

module.exports = router