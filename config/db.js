
// importing mongoose package to connect database
const mongoose = require("mongoose");

// imporing dotenv package
require("dotenv").config();

// importing compass url
const url = process.env.url;

// creating a function to connect database

const connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connection successful");
    }).catch((error) => {
        console.log("DB connection failed");
        console.error(error.message);
        process.exit(1);
    })
}

// exporting connect function
module.exports = connect;