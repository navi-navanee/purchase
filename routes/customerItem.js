const express = require('express')
const { cuItem, maxPurchase, totalvalue } = require('../controllers/customerItem')

const router =express.Router()

router.post('/',cuItem)
router.get('/maxPurchase',maxPurchase)
router.get('/totalvalue',totalvalue)

module.exports = router