
// importing express package to create router
const express = require("express");
const router = express.Router();

// importing create router
const {create }  = require("../controllers/createProduct");

// to create add product router
router.post("/create",create);

// exporting router
module.exports = router;