const db = require("../models");
const Alergia = db.alergias;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
  // Create object
  const alergia = {
    descricao: req.body.descricao,
    observacao: req.body.observacao,
    dt_alergia: req.body.dt_alergia,
    usuario_id: req.body.usuario_id,
  };

  // Insert user in db
  Alergia.create(alergia)
    .then((data) => {
      res.send({
        message: "1",
        status: "Success",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao inserir registro" + err,
      });
    });
};

exports.findAllByUserId = (req, res) => {

  const zid_usuario = req.params.id;
  
  Alergia.findAll({
    where: {
      usuario_id: {
        [Op.eq]: zid_usuario,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca do registro",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Alergia.update(req.body, {
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
