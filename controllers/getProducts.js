
// import the model
const Products = require("../models/project");

// define route handler

exports.getProducts = async (req, res) => {
    try {

        // fetch all products items from database
        const products = await Products.find({});

        // response
        return res.status(200).json({
            success: true,
            data: products,
            message: "Entire products data is feteched"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        })
    }
}

