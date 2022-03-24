const mysql = require("mysql");

var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'SwDevVacQ555',
    database:'vacCenter'
});

module.exports=connection;