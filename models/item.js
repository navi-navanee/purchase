const mongoose = require('mongoose')

const item = mongoose.Schema({
    
    itemno:{
        type: Number,
        require:[true,'please enter the item number']
    },
    itemname:{
        type: String,
        require:[true,'please enter itemName']
    },
    color:{
        type: String,
        require:[true,'please enter color']
    },
    weight:{
        type: Number,
        require:[true,'please enter the weight']
    },
    expire_date:{
        type: Date,
    },
    price:{
        type: Number,
        require:[true,'please enter the Price']
    },
    shop_name:{
        type: String,
        require:[true,'please enter shop name']
    },
})

module.exports =mongoose.model('Item',item)