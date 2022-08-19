const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//add customer
app.use('/api/customer', require('./routes/customer'))

//add item
app.use('/api/item', require('./routes/item'))

//add cust_item
app.use('/api/cust_item', require('./routes/customerItem'))

//delete item
app.use('/api/item', require('./routes/item'))

//find  same location
app.use('/api/customer', require('./routes/customer'))

//find  find by color
app.use('/api/item', require('./routes/item'))

//find  find by weight
app.use('/api/item', require('./routes/item'))

//find  find by number
app.use('/api/customer', require('./routes/customer'))

app.listen(port, () => {
    console.log(`server start on the port ${port}`);
})