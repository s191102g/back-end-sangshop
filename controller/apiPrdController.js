var modelPrd = require("../models/prd_models");
class ApiPrdController {
  index(req, res, next) {
    modelPrd.list((data) => {
      res.json(data);
    });
  }
  hotPrd(req, res, next) {
    modelPrd.listHot((data) => {
      res.json(data);
    });
  }
  newPrd(req, res, next) {
    modelPrd.listNew((data) => {
      res.json(data);
    });
  }
  salePrd(req, res, next) {
    modelPrd.listSale((data) => {
      res.json(data);
    });
  }
  prdInCate(req, res) {
    let id = req.params.id;
    modelPrd.getPrdbyCate(id,  (data)=> {
      res.json(data);
    });
  }
  addNewPrd(req, res) {
    let data = req.body;
    modelPrd.create(data,  ()=> {
      res.json({ pp: "Created !" });
    });
  }
  getPrdbyId(req, res) {
    let id = req.params.id;
    modelPrd.read(id,  (data)=> {
      res.json(data);
    });
  }
  fixPrd(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelPrd.update(id, data,  ()=> {
      res.json({ pp: "Update sucssesfully " });
    });
  }
  deletePrd(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelPrd.delete(id, data,  ()=> {
      res.json({ pp: "Delete sucssesfully " });
    });
  }
}

module.exports = new ApiPrdController();
