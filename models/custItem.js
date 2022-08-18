const mongoose =require('mongoose')

const custItem =mongoose.Schema({

    cno:{
        type: Number,
        require:[true,'please enter the cno']
    },
    itemno:{
        type: Number,
        require:[true,'please enter itemno']
    },
    quantity_purchased:{
        type: Number,
        require:[true,'please enter the quantity_purchased']
    },
    date_purchase:{
        type: Date,
    },
})

module.exports = mongoose.model('CustItem',custItem)
