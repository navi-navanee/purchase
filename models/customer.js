const mongoose =require('mongoose')

const customerSchema = mongoose.Schema({

    cno:{
        type: Number,
        require:[true,'please enter the cunumber']
    },
    cust_name:{
        type: String,
        require:[true,'please enter your user name']
    },
    cust_phone:{
        type: Number,
        require:[true,'please enter your phoneNumber']
    },
    location:{
        type: String,
        require:[true,'please enter the location']
    },
    gender:{
        type: Number,
        require:[true,'please enter your gender']
    },
})

module.exports =mongoose.model('Customer',customerSchema)