const db = require("../models");
const InfosBasicas = db.infosBasicas;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nome && !req.body.) {
  //   res.status(400).send({
  //     message: "O campo não pode ser vazio",
  //   });
  //   return;
  // }

  // Create object
  const infos = {
    tipo_sang: req.body.tipo_sang,
    peso: req.body.peso,
    altura: req.body.altura,
    imc: req.body.imc,
    cpf: req.body.cpf,
    rg: req.body.rg,
    nome_pai: req.body.nome_pai,
    nome_mae: req.body.nome_mae,
    nacionalidade: req.body.nacionalidade,
    dt_nasc: req.body.dt_nasc,
    usuario_id: req.body.usuario_id,
  };

  // Insert user in db
  InfosBasicas.create(infos)
    .then((data) => {
      res.send({
        message: "1",
        status: "Success",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao inserir registro " + err,
      });
    });
};

exports.findAllByUserId = (req, res) => {
  const zid_usuario = req.params.id;

  InfosBasicas.findAll({ where: { usuario_id: { [Op.eq]: zid_usuario } } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  InfosBasicas.update(req.body, {
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
          status: "Registro não foi encontrado",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao atualizar registro " + err,
      });
    });
};

