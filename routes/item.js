const express = require('express')
const { item, deleteitem, color } = require('../controllers/item')

const router =express.Router()

router.post('/',item)
router.delete('/delete',deleteitem)
router.get('/color',color)

module.exports = router