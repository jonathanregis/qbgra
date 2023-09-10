var express = require("express");
const {
  addSaleController,
} = require("../controllers/salesControllers");
var router = express.Router();

router.post("/add", addSaleController);

module.exports = router;
