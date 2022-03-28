var express = require("express");
var router = express.Router();
var modelPrd = require("../models/prd_models");
var apiPrdController = require("../controller/apiPrdController")
/* GET home page. */
router.get("/", apiPrdController.index);

router.get("/hot-prd", function (req, res, next) {
  modelPrd.listHot((data) => {
    res.json(data);
  });
});
router.get("/new-prd", function (req, res, next) {
  modelPrd.listNew((data) => {
    res.json(data);
  });
});
router.get("/sale-prd", function (req, res, next) {
  modelPrd.listSale((data) => {
    res.json(data);
  });
});

router.get("/prd-in-cate/:id", (req, res) => {
    let id = req.params.id;
    modelPrd.getPrdbyCate(id, function (data) {
      res.json(data);
    });
  });

router.post("/", (req, res) => {
  let data = req.body;
  modelPrd.create(data, function () {
    res.json({ pp: "Created !" });
  });
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  modelPrd.read(id, function (data) {
    res.json(data);
  });
});
router.put("/:id", (req, res) => {
  let data = req.body;
  let id = req.params.id;
  modelPrd.update(id, data, function () {
    res.json({ pp: "Update sucssesfully " });
  });
});

router.delete("/:id", (req, res)=>{
  let data = req.body;
  let id = req.params.id;
  modelPrd.delete(id, data, function (){
    res.json({ pp: "delete sucssesfully " });
  })
})
module.exports = router;
