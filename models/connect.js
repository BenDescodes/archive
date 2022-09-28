const mysql = require('mysql')
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'archive'
    })
    module.exports = con
}
/* 
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'archive'
}) */
