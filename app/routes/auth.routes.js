module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", usuario.authenticate);
  
    app.use('/api/auth', router);
  };