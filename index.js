const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//customer
app.use('/api/customer', require('./routes/customer'))

//item
app.use('/api/item', require('./routes/item'))

//cust_item
app.use('/api/cust_item', require('./routes/customerItem'))


app.listen(port, () => {
    console.log(`server start on the port ${port}`);
})