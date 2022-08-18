const express = require('express')
const { item, deleteitem } = require('../controllers/item')

const router =express.Router()

router.post('/',item)
router.delete('/delete',deleteitem)

module.exports = router