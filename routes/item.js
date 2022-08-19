const express = require('express')
const { item, deleteitem, colors, weight } = require('../controllers/item')

const router =express.Router()

router.post('/',item)
router.delete('/delete',deleteitem)
router.get('/color',colors)
router.get('/weight',weight)

module.exports = router