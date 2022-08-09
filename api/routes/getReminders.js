const db = require('../../db');

module.exports = app => {

  app.route('/reminders').get(async (req, res) => {

    let id = req.query?.id

    try {

      if(id != undefined){
        //caso a rota tenha o parametro id, retorna o lembrete correspondente ao mesmo
        db.query("SELECT * FROM reminders WHERE id = ?", [id], function (err, result) {
          if (err){
            res.status(500).send(err)
          }
          res.status(200).send(result)
        });
      }
      else{
        //caso não tenha um id, retorna todos os lembretes
        db.query("SELECT * FROM reminders", function (err, result) {
          if (err){
            res.status(500).send(err)
          }
          res.status(200).send(result)
        });
      }

    }
    catch (error) {
      res.status(500).send(error)
    }

  });

}

