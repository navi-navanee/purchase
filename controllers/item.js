const moment = require('moment')
const Item = require('../models/item')

// @desc  add customer
// @rout  POST /api/item/
const item = async (req, res) => {
    try {
        const { itemno, itemname, weight, expire_date, price ,shop_name } = req.body

        const item = await Item.create({
            itemno,
            itemname,
            weight,
            expire_date:moment().format(expire_date),
            price,
            shop_name,
        })
        if (item) {
            res.status(201).json({
                itemno: item.itemno,
                itemname: item.itemname,
                weight: item.weight,
                expire_date: item.expire_date,
                price: item.price,
                shop_name: item.shop_name,      
            })
        }
        else {
            res.status(400)
            res.send("errorr")
        }
    } catch (error) {
        console.log("error",error);
    }
}

// @desc  add customer
// @rout  POST /api/item/delete
const deleteitem =async(req,res) =>{
    try {
        const item =await Item.deleteMany({"price":{$gte:50000}})
        res.status(200).json({msg:"items deleated successsfully"})
    } catch (error) {
        console.log("error",error);
    }
}


module.exports = {
    item,
    deleteitem
}
