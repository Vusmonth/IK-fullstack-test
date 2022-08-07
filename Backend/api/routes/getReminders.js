const db = require('../../db');

module.exports = app => {

  app.route('/reminders').get(async (req, res) => {

    let id = req.query?.id

    try {

      if(id != undefined){
        //caso a rota tenha o parametro id, retorna o lembrete correspondente ao mesmo
        con.query("SELECT * FROM reminders WHERE id = ?", [id], function (err, result) {
          if (err) throw err;
          res.status(200).send(result)
        });
      }
      else{
        //caso não tenha um id, retorna todos os lembretes
        con.query("SELECT * FROM reminders", function (err, result) {
          if (err) throw err;
          res.status(200).send(result)
        });
      }

    }
    catch (error) {
      res.status(500).send(error)
    }

  });

}

