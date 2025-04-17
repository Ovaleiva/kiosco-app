const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.getAll);

router.post("/add", productsController.create);

router.post("/delete/:id", productsController.delete);

module.exports = router;
