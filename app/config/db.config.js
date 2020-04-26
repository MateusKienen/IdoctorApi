module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1234",
    DB: "idoctor",
    dialect: "mysql",
    pool: {
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };