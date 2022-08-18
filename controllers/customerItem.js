const Cu_item = require('../models/custItem')
const moment = require('moment')

// @desc  add cuItem
// @rout  POST /api/cuItem/
const cuItem = async (req, res) => {

    try {
        const { cno, itemno, quantity_purchased, date_purchase } = req.body
        console.log("helooo",req.body);
        const cuItem = await Cu_item.create({
            cno,
            itemno,
            quantity_purchased,
            date_purchase:moment().format(date_purchase),
        })
        if (cuItem) {
            res.status(201).json({
                cno: cuItem.cno,
                itemno: cuItem.itemno,
                quantity_purchased: cuItem.quantity_purchased,
                date_purchase: cuItem.date_purchase,
            })
        }
    
        else {
            res.status(400)
            res.send("errorrrr")
        }
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    cuItem,
}
