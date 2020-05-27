module.exports = app => {
    const infos = require("../controllers/infoBasicas.controller");
  
    var router = require("express").Router();
  
    router.post("/", infos.create);
  
    router.get("/:id", infos.findAllByUserId);
    
    router.put("/:id", infos.update);
  
    app.use('/api/infos', router);
  };