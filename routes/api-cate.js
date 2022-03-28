var express = require("express");
var router = express.Router();
var apiCateController = require("../controller/apiCateController");

router.get("/", apiCateController.index );
router.post("/", apiCateController.addNewCate);
router.put("/:id" , apiCateController.fixCate);
router.delete("/:id", apiCateController.deleteCate);
module.exports = router;