module.exports = app => {
    const medicamento = require("../controllers/medicamentos.controller");
  
    var router = require("express").Router();
  
    router.post("/", medicamento.create);
  
    router.get("/:id", medicamento.findAllByUserId);
    
    router.put("/:id", medicamento.update);

    router.delete("/:id&:idmedicamento", medicamento.delete);
  
    app.use('/api/medicamento', router);
  };