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
    usuario_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Usuarios',
        key: "id",
      },
    },
  });

  return Alergia;
};
