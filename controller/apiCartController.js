var modelCart = require("../models/cart_models");

class ApiCartController {
  getCart(req, res) {
    let idUser = req.id;

    modelCart.getIdOrder(idUser, (data) => {
      if (data == null) {
        res.json("Don't have cart")
      }else{
        let id_order = data;
      modelCart.getIdPrd(id_order, (data) => {
        let mycart = data;
        let Cart = []
        
        for (let i = 0; i < mycart.length; i++) {
            modelCart.getCustomerPrd(mycart[i].id_prd , (data)=>{
                Cart.push(data)
                if (Cart.length == mycart.length) {
                    res.json(Cart)
                }
            })
            
        }
      
       

      });
      }
      


    });
  }


  addCart(req,res) {
    
  }
}

module.exports = new ApiCartController();
