
// import model
const Products = require("../models/project");

// define route
exports.deleteOne = async (req, res) => {
    try {
        // fetching id
        const { id } = req.params;
        // fetch product by id and deleting
        await Products.findByIdAndDelete(id);

        // sending response
        return res.status(200).json({
            success: true,
            message: "product item deleted successfully"
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}
