const db = require("../models");
const Alergia = db.alergias;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "O campo não pode ser vazio",
    });
    return;
  }

  // Create object
  const alergia = {
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email,
  };

  // Insert user in db
  Alergia.create(alergia)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na inserção do usuário",
      });
    });
};

// Get all users
exports.findAllByUserId = (req, res) => {
  const zid_usuario = req.query.id_usuario;

  Alergia.findAll({ where: { id_usuario: { [Op.eq]: zid_usuario } } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca das alergias",
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "1",
          status: "success",
        });
      } else {
        res.send({
          message: "0",
          status: "Usuário não foi encontrado",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao atualizar usuário " + err,
      });
    });
};
