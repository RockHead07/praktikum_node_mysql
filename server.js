const express = require('express');
const db = require('./db');
const app = express();

app.get('/mahasiswa', (req, res) => {
  db.query('SELECT * FROM mahasiswa', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});