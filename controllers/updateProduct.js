
// import the model
const Products = require("../models/project");

// define route handler

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        // fetching name and quantity
        const { name, quantity } = req.body;
        const product = await Products.findByIdAndUpdate(
            { _id: id },
            { name, quantity },
            { new: true },
        );

        return res.status(200).json({
            success: true,
            data: product,
            message: "Update successfully"
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

