
// importing express package to create router
const express = require("express");
const router = express.Router();

// importing create router
const {create }  = require("../controllers/createProduct");

// import getProducts controller
const {getProducts} = require("../controllers/getProducts");

// to create add product router
router.post("/create",create);

// get all products router
router.get("/",getProducts);

// exporting router
module.exports = router;