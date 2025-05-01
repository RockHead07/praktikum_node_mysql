const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {}, async (err, client) => {
  if (err) throw err;
  const db = client.db('praktikum_web');
  const mahasiswa = {
    nama: 'Budi Santoso',
    npm: '23400502',
    jurusan: 'Sistem Informasi'
  };
  await db.collection('mahasiswa').insertOne(mahasiswa);
  console.log("Data MongoDB berhasil ditambahkan");
  client.close();
});