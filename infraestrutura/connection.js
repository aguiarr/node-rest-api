const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'api_rest'
});

module.exports = connection;