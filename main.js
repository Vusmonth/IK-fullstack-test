const db = require('./db');

const app = require('./config/express')();
const port = app.get('port');
require('dotenv').config()

app.listen(port, () => {
  console.log(`\n----> Server listening on port ${port} <----`)
});

db.query("CREATE DATABASE IF NOT EXISTS heroku_6203d4477bec9ed", function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log("Database created");
});

db.query("CREATE TABLE IF NOT EXISTS reminders (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), title VARCHAR(255), datetime VARCHAR(255))",
  function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log("Table created");
  });