
// importing module to create server and basic setup
const express = require("express");
require("dotenv").config();
const port = process.env.port || 8080;

// importing connect function to connect mongodb compass
const connect = require("./config/db");

// creating server
const app = express();

// connecting mongodb compass
connect();






// activating server

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
