
// importing module to create server and basic setup
const express = require("express");
require("dotenv").config();
const port = process.env.port || 8080;

// creating server
const app = express();

// adding middleware
app.use(express.json());

// importing connect function to connect mongodb compass
const connect = require("./config/db");

// importing  router file
const productRouter = require("./router/productRouter");
app.use("/",productRouter);

// connecting mongodb compass
connect();

// activating server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
