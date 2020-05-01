module.exports = (sequelize, Sequelize) => {
    const Medicamento = sequelize.define("medicamento", {
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
      dosagem: {
        type: Sequelize.STRING,
      },
      dt_inicio: {
        type: Sequelize.DATE,
      },
      dt_fim: {
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
  
    return Medicamento;
  };
  
