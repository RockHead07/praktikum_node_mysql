const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'praktikum_web'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Koneksi ke database berhasil!');
});

module.exports = connection;