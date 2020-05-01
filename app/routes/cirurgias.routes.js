module.exports = app => {
    const cirurgia = require("../controllers/cirurgias.controller");
  
    var router = require("express").Router();
  
    router.post("/", cirurgia.create);
  
    router.get("/:id", cirurgia.findAllByUserId);
    
    router.put("/:id", cirurgia.update);
  
    app.use('/api/cirurgia', router);
  };