const Customer = require('../models/customer')

// @desc  add customer
// @rout  POST /api/user/
const customer = async (req, res) => {

    try {
        const { cno, cust_name, cust_phone, location, gender } = req.body
        console.log("helooo", req.body);
        const customer = await Customer.create({
            cno,
            cust_name,
            cust_phone,
            location,
            gender,
        })
        if (customer) {
            res.status(201).json({
                cno: customer.cno,
                cust_name: customer.cust_name,
                cust_phone: customer.cust_phone,
                location: customer.location,
                gender: customer.gender,
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


// @desc  add customer
// @rout  POST /api/customerd/findcustomer
const findcustomer =async(req,res) =>{
    const {place} =req.body
    try {
        const item =await Customer.find({location:place},{cust_name:1 ,_id:0})
        res.status(200).json(item)
    } catch (error) {
      res.status(401).json(error)
    }
}


module.exports = {
    customer,
    findcustomer
}
