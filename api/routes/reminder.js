const db = require('../../db');

module.exports = app => {

  app.route('/new-reminder').post(async (req, res) => {

    if (Object.keys(req.body).length !== 0) {

      try {
        const reminder = req.body

        const sql = "INSERT INTO reminders (name, title, datetime) VALUES ?";
        const value = [[reminder.name, reminder.title, reminder.datetime]]

        db.query(sql, [value], function (err, result) {
          if (err){
            res.status(500).send(err)
          }
          console.log("1 reminder inserted");
          res.status(201).send("Reminder inserted")
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

