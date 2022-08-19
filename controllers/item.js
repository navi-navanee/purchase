const moment = require('moment')
const Item = require('../models/item')

// @desc  add customer
// @rout  POST /api/item/
const item = async (req, res) => {
    try {
        const { itemno, itemname, color, weight, expire_date, price, shop_name } = req.body

        const item = await Item.create({
            itemno,
            itemname,
            color,
            weight,
            expire_date: moment().format(expire_date),
            price,
            shop_name,
        })
        if (item) {
            res.status(201).json({
                itemno: item.itemno,
                itemname: item.itemname,
                color: item.color,
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
        console.log("error", error);
    }
}

// @desc  add customer
// @rout  POST /api/item/delete
const deleteitem = async (req, res) => {
    try {
        const item = await Item.deleteMany({ "price": { $gte: 50000 } })
        res.status(200).json({ msg: "items deleated successsfully" })
    } catch (error) {
        console.log("error", error);
    }
}
// @desc  add customer
// @rout  POST /api/item/delete
const colors = async (req, res) => {
    try {
        const item = await Item.find({ $or: [{ color: "black" }, { color: "white" }, { color: "brown" }] });

        res.status(200).json(item)
    } catch (error) {
        res.status(401).json(error)
    }
}


// @desc  add customer
// @rout  POST /api/item/delete
const weight = async (req, res) => {
    try {
        const item = await Item.aggregate(
            [
                { $sort: { weight: 1 } },
                { $limit: 1 }
            ]
        )

        res.status(200).json(item)
    } catch (error) {
        res.status(401).json(error)
    }
}


// @desc  items that expires in next month
// @rout  POST /api/item/date
const date = async (req, res) => {
    try {
        const item = await Item.find({expire_date:{$gte:moment("2022-09-01"),$lt:moment("2022-10-01")}})
        res.status(200).json(item)
    } catch (error) {
        res.status(401).json(error)
    }
}


module.exports = {
    item,
    deleteitem,
    colors,
    weight,
    date
}
