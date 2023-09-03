
// importing module to create server and basic setup
const express = require("express");
require("dotenv").config();
const port = process.env.port || 8080;

// creating server
const app = express();




// activating server

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
