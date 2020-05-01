module.exports = (sequelize, Sequelize) => {
    const Info_Basicas = sequelize.define("info_basicas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_sang: {
        type: Sequelize.STRING,
      },
      peso: {
        type: Sequelize.INTEGER,
      },
      altura: {
        type: Sequelize.INTEGER,
      },
      imc: {
        type: Sequelize.INTEGER,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      nome_pai: {
        type: Sequelize.STRING,
      },
      nome_mae: {
        type: Sequelize.STRING,
      },
      nacionalidade: {
        type: Sequelize.STRING,
      },
      dt_nasc: {
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
  
    return Info_Basicas;
  };
  
