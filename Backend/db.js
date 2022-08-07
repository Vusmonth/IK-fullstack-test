const mysql = require('mysql');
require('dotenv').config()

module.exports = con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    
    //Cria nova base de dados caso não exista assim que o servidor é iniciado
    con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

    //Cria nova tabela caso não exista assim que o servidor é iniciado
    con.query("CREATE TABLE IF NOT EXISTS reminders (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), title VARCHAR(255), datetime VARCHAR(255))",
        function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
});

