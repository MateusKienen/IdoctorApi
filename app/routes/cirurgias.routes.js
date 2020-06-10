module.exports = app => {
    const cirurgia = require("../controllers/cirurgias.controller");
  
    var router = require("express").Router();
  
    router.post("/", cirurgia.create);
  
    router.get("/:id", cirurgia.findAllByUserId);
    
    router.put("/:id", cirurgia.update);

    router.delete("/:id&:idcirurgia", alergia.delete);
  
    app.use('/api/cirurgia', router);
  };