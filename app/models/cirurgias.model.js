module.exports = (sequelize, Sequelize) => {
    const Cirurgia = sequelize.define("cirurgia", {
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
      dt_cirurgia: {
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
  
    return Cirurgia;
  };
  
