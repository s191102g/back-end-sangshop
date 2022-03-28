var express = require("express");
var router = express.Router();
var apiPrdController = require("../controller/apiPrdController")

router.get("/", apiPrdController.index);
router.get("/hot-prd", apiPrdController.hotPrd);
router.get("/new-prd", apiPrdController.newPrd);
router.get("/sale-prd", apiPrdController.salePrd);
router.get("/prd-in-cate/:id", apiPrdController.prdInCate);
router.get("/:id", apiPrdController.getPrdbyId);
router.post("/", apiPrdController.addNewPrd);
router.put("/:id", apiPrdController.fixPrd);
router.delete("/:id", apiPrdController.deletePrd)
module.exports = router;
