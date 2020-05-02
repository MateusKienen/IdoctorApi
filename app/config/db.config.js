module.exports = {
    HOST: "us-cdbr-east-06.cleardb.net",
    USER: "b30129869f7d66",
    PASSWORD: "3e23d428",
    DB: "heroku_a6f180c1bf6153e",
    dialect: "mysql",
    pool: {
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  //mysql://b30129869f7d66:3e23d428@us-cdbr-east-06.cleardb.net/heroku_a6f180c1bf6153e?reconnect=true