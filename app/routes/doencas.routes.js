module.exports = app => {
    const doenca = require("../controllers/doencas.controller");
  
    var router = require("express").Router();
  
    router.post("/", doenca.create);
  
    router.get("/:id", doenca.findAllByUserId);
    
    router.put("/:id", doenca.update);
  
    router.delete("/:id&:iddoenca", alergia.delete);

    app.use('/api/doenca', router);
  };