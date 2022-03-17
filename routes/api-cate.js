var express = require("express");
var router = express.Router();
var modelCate = require("../models/categories_models");


router.get("/", function (req, res, next) {
    modelCate.list((data) => {
      res.json(data);
    });
  });
  
  module.exports = router;