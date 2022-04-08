var express = require("express");
var router = express.Router();
var User = require("../controller/authUserController")
router.post("/sign-up", User.create);
router.post("/", User.check);

module.exports = router;
