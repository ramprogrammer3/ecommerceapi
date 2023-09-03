
// importing mongoose to create schema

const mongoose = require("mongoose");

// creating product schema

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
},
    { timestamps: true }
)

// exporting product schema 

module.exports = mongoose.model("Products", productSchema);
