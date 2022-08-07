const mysql = require('mysql');
require('dotenv').config()

// mysql://ba91d16472ca32:62c390bf@us-cdbr-east-06.cleardb.net/heroku_6203d4477bec9ed?reconnect=true

module.exports = con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    
    //Cria nova base de dados caso não exista assim que o servidor é iniciado
    con.query("CREATE DATABASE IF NOT EXISTS heroku_6203d4477bec9ed", function (err, result) {
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

