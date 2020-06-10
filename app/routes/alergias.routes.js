module.exports = app => {
    const alergia = require("../controllers/alergias.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", alergia.create);
  
    router.get("/:id", alergia.findAllByUserId);
    
    router.put("/:id", alergia.update);
  
    router.delete("/:id&:idalergia", alergia.delete);

    app.use('/api/alergia', router);
  };