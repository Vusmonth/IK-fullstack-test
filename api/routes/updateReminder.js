const db = require('../../db');

module.exports = app => {

  app.route('/update-reminder').patch(async (req, res) => {

    if (Object.keys(req.body).length !== 0) {

      try {
        const update = req.body

        const sql = "UPDATE reminders SET ? WHERE id=?";
        const value =
          [
            { name: update.name, title: update.title, datetime: update.datetime },
            update.id
          ]

        con.query(sql, value, function (err, result) {
          if (err) throw err;
          console.log("Reminder updated");
          res.status(200).send("Reminder updated")
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

