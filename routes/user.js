var express = require("express");
var router = express.Router();
var User = require("../controller/authUserController")
var middlewareController = require("../controller/middlewareController")

router.post("/sign-up", User.create);
router.post("/", User.check);
router.get("/test", middlewareController.verifyToken, User.test);
module.exports = router;
