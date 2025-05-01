const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.get('/mahasiswa', async (req, res) => {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('praktikum_web');
  const data = await db.collection('mahasiswa').find().toArray();
  res.json(data);
  client.close();
});

app.listen(4000, () => {
  console.log('MongoDB Server jalan di http://localhost:4000');
});