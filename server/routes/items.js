const express = require("express");
const itemsController = require("../controllers/itemsControllers");

const router = express.Router();

// api/items
router.get("/", itemsController.getItems);


router.get("/:id", itemsController.getItemById);




module.exports = router;