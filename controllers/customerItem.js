const Cu_item = require('../models/custItem')
const moment = require('moment')

// @desc  add cuItem
// @rout  POST /api/cuItem/
const cuItem = async (req, res) => {

    try {
        const { cno, itemno, quantity_purchased, date_purchase } = req.body
        console.log("helooo", req.body);
        const cuItem = await Cu_item.create({
            cno,
            itemno,
            quantity_purchased,
            date_purchase: moment().format(date_purchase),
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

// @desc  the customer with maximum number of purchase
// @rout  get /api/cuItem/maxPurchase
const maxPurchase = async (req, res) => {
    try {
        const item = await Cu_item.aggregate(
            [
                { $sort: { quantity_purchased: -1 } },
                { $limit: 1 }
            ]
        )
        res.status(200).json(item)
    } catch (error) {
        console.log("error", error);
    }
}

// @desc  to display the total value for each item
// @rout  get /api/cuItem/totalvalue
const totalvalue = async (req, res) => {
    try {
        const item = await Cu_item.aggregate(
            [
                {
                    $lookup: {
                        from: "items",
                        localField: "itemno",
                        foreignField: "itemno",
                        as: "final"
                    }
                },

                {
                    $unwind: "$final"
                },
                {
                    $project: { itemno: 1, quantity_purchased: 1, total: { $multiply: ["$quantity_purchased", "$final.price"] } }
                }
            ]
        )
        res.status(200).json(item)
    } catch (error) {
        console.log("error", error);
    }
}

// @desc  Display total price item wise
// @rout  get /api/cuItem/itemtotal
const itemtotal = async (req, res) => {
    try {
        const item = await Cu_item.aggregate(
            [
                {
                    $lookup: {
                        from: "items",
                        localField: "itemno",
                        foreignField: "itemno",
                        as: "final"
                    }
                },
                {
                    $unwind: "$final"
                },
                {
                    $project: { itemname: '$final.itemname', quantity_purchased: 1, total: { $multiply: ["$quantity_purchased", "$final.price"] } }
                },
                {
                    $group: {
                        _id: "$itemname",
                        sum: {
                            $sum: "$total"
                        }
                    }
                }
            ]
        )
        res.status(200).json(item)
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = {
    cuItem,
    maxPurchase,
    totalvalue,
    itemtotal
}
