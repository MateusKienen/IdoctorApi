const usuario = require("../models/usuario.model");

module.exports = (sequelize, Sequelize) => {
    const Alergia = sequelize.define("alergia", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      observacao: {
        type: Sequelize.STRING,
      },
      dt_alergia: {
        type: Sequelize.DATE,
      },
      id_usuario:{
          type: Sequelize.INTEGER,
          references: usuario.Model.tableName,
          referencesKey: 'id'
      }
    });
  
    return Usuario;
  };
  