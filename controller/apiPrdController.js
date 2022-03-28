class ApiPrdController {

    index(){
        (req, res, next) => {
            modelPrd.list((data) => {
            res.json(data);
            });
        }
    }
}

module.exports = new ApiPrdController;