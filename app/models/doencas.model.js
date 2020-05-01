module.exports = (sequelize, Sequelize) => {
    const Doenca = sequelize.define("doenca", {
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
      dt_doenca: {
        type: Sequelize.DATE,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: "id",
        },
      },
    });
  
    return Doenca;
  };
  
