const app = require('./config/express')();
const port = app.get('port');
require('dotenv').config()

app.listen(port, () => {
  console.log(`\n----> Server listening on port ${port} <----`)
});


/* const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query("CREATE TABLE IF NOT EXISTS reminders (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), title VARCHAR(255), datetime VARCHAR(255))",
    function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

  var sql = "INSERT INTO reminders (name, title, datetime) VALUES ('Company Inc', 'Highway 37', 'teste')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
 */