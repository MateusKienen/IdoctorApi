const db = require("../models");
const Cirurgia = db.cirurgias;
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
  const cirurgia = {
    descricao: req.body.descricao,
    observacao: req.body.observacao,
    dt_cirurgia: req.body.dt_cirurgia,
    usuario_id: req.body.usuario_id,
  };

  // Insert user in db
  Cirurgia.create(cirurgia)
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

  Cirurgia.findAll({
    where: {
      usuario_id: { [Op.eq]: zid_usuario },
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

  Cirurgia.update(req.body, {
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

exports.delete = (req, res) => {
  const user_id = req.params.id;
  const idcirurgia = req.params.idcirurgia;

  Cirurgia.destroy({
    where: {
      id: idcirurgia,
      usuario_id: user_id
    }
  }).then((num) => {
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
