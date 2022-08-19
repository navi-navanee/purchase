const express = require('express')
const { item, deleteitem, colors, weight, date, itempurchase } = require('../controllers/item')

const router =express.Router()

router.post('/',item)
router.delete('/delete',deleteitem)
router.get('/color',colors)
router.get('/weight',weight)
router.get('/date',date)
router.get('/itempurchase',itempurchase)

module.exports = router