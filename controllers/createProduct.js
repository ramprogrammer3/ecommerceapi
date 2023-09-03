
// importing the model
const Products = require("../models/project");

// define the route handler

exports.create = async (req, res) => {
    try {
        // extracting name and quantity from request body
        const { name, quantity } = req.body;
        // creating a new product items
        const response = await Products.create({ name, quantity });
        return res.status(200).json({
            success: true,
            data: response,
            message: "Product added successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: error.message,
            message: "Inter server error"
        })
    }
}