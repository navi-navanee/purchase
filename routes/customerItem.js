const express = require('express')
const { cuItem } = require('../controllers/customerItem')

const router =express.Router()

router.post('/',cuItem)

module.exports = router