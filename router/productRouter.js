
// importing express package to create router
const express = require("express");
const router = express.Router();

// importing create router
const { create } = require("../controllers/createProduct");

// import getProducts controller
const { getProducts } = require("../controllers/getProducts");

// import update controller
const { update } = require("../controllers/updateProduct");

// import delete controller
const { deleteOne } = require("../controllers/deleteOneProduct");

// to create add product router
router.post("/create", create);

// get all products router
router.get("/", getProducts);

// update product
router.put("/:id/quant", update);

// delete product
router.delete("/:id", deleteOne)


// exporting router
module.exports = router;