module.exports = app => {
    const medicamento = require("../controllers/medicamentos.controller");
  
    var router = require("express").Router();
  
    router.post("/", medicamento.create);
  
    router.get("/:id", medicamento.findAllByUserId);
    
    router.put("/:id", medicamento.update);
  
    app.use('/api/medicamento', router);
  };