const db = require('../../db');

module.exports = app => {

  app.route('/delete-reminder').delete(async (req, res) => {

    if (Object.keys(req.body).length !== 0) {

      try {

        const id = req.body.id
        const sql = "DELETE FROM reminders WHERE id=?";

        con.query(sql, id, function (err, result) {
          if (err) throw err;
          console.log("Reminder deleted");
          res.status(200).send("Reminder deleted")
        });

      }
      catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify(error))
      }

    }
    else {
      res.status(400).send("O corpo da requisição está vazio!")
    }

  });

}

