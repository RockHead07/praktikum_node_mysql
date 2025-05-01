const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'praktikum_web';
let db;

MongoClient.connect(url, {}, (err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  console.log("Koneksi MongoDB berhasil");
});

module.exports = () => db;