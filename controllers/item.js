const moment = require('moment')
const Item = require('../models/item')

// @desc  add item
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

// @desc  deleate the iteam which price more than 50000
// @rout  POST /api/item/deleteitem
const deleteitem = async (req, res) => {
    try {
        const item = await Item.deleteMany({ "price": { $gte: 50000 } })
        res.status(200).json({ msg: "items deleated successsfully" })
    } catch (error) {
        console.log("error", error);
    }
}
// @desc  show the items with the color balck,white , brown
// @rout  POST /api/item/colors
const colors = async (req, res) => {
    try {
        const item = await Item.find({ $or: [{ color: "black" }, { color: "white" }, { color: "brown" }] });

        res.status(200).json(item)
    } catch (error) {
        res.status(401).json(error)
    }
}


// @desc  sort the list with the weight
// @rout  POST /api/item/weight
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
        const item = await Item.find({ expire_date: { $gte: moment("2022-09-01"), $lt: moment("2022-10-01") } })
        res.status(200).json(item)
    } catch (error) {
        res.status(401).json(error)
    }
}


// @desc  List name of items, customer details with quantity purchased.
// @rout  get /api/item/itempurchase
const itempurchase = async (req, res) => {
    try {
        const item = await Item.aggregate(
            [
                {
                    $lookup: {
                        from: "custitems",
                        localField: "itemno",
                        foreignField: "itemno",
                        as: "final"
                    }
                },
                {
                    $unwind: "$final"
                },
                {
                    $lookup: {
                        from: "customers",
                        localField: "final.cno",
                        foreignField: "cno",
                        as: "customer"
                    }
                },
                {
                    $project: { itemname: 1, quantity_purchased:  '$final.quantity_purchased', customerdetails:'$customer' }
                },
              
            ]
        )
        res.status(200).json(item)
    } catch (error) {
        console.log("error", error);
    }
}



module.exports = {
    item,
    deleteitem,
    colors,
    weight,
    date,
    itempurchase
}
