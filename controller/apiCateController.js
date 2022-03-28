var modelCate = require("../models/categories_models");

class ApiCateController {
   index(req, res, next) {
    modelCate.list((data) => {
      res.json(data);
    });
   }
   addNewCate(req, res , next){
       let data = req.body;
       modelCate.create(data, ()=>{
         res.json({ pp: "Created !" });
       })
   }

   fixCate(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelCate.update(id, data,  ()=> {
      res.json({ pp: "Update sucssesfully " });
    });
  }
  deleteCate(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelCate.delete(id, data,  ()=> {
      res.json({ pp: "Delete sucssesfully " });
    });
  }
}

module.exports = new ApiCateController();