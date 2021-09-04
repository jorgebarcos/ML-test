const express = require("express");
const categoriesController = require("../controllers/categoriesControllers");

const router = express.Router();

router.get("/:id", categoriesController.getCategoriesById);

module.exports = router;
