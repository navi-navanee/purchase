const express = require('express')
const { item, deleteitem, colors, weight, date, itempurchase } = require('../controllers/item')

const router = express.Router()

// @desc  add item
router.post('/', item)

// @desc  deleate the iteam which price more than 50000
router.delete('/delete', deleteitem)

// @desc  show the items with the color balck,white , brown
router.get('/color', colors)

// @desc  sort the list with the weight
router.get('/weight', weight)

// @desc  items that expires in next month
router.get('/date', date)

// @desc  List name of items, customer details with quantity purchased.
router.get('/itempurchase', itempurchase)

module.exports = router