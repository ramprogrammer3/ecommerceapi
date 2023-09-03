
// import the model
const Products = require("../models/project");

// define route handler

exports.getProducts = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            error : error.message,
            message : "Internal server error"
        })
    }
}

