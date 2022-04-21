var express = require("express");
var router = express.Router();
var middlewareController = require("../controller/middlewareController");
var apiCartController = require("../controller/apiCartController");
router.get("/",middlewareController.verifyToken,apiCartController.getCart)

module.exports = router;