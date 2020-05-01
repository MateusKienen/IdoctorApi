const db = require("../models");
const Medicamento = db.medicamentos;
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
  const medicamento = {
    descricao: req.body.descricao,
    observacao: req.body.observacao,
    dosagem: req.body.dosagem,
    dt_inicio: req.body.dt_inicio,
    dt_fim: req.body.dt_fim,
    usuario_id: req.body.usuario_id,
  };

  // Insert user in db
  Medicamento.create(medicamento)
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

  Medicamento.findAll({
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
        message: err.message || "Ocorreu um erro na busca",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Medicamento.update(req.body, {
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
