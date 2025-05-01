const db = require('./db');

function tambahMahasiswa(data) {
  db.query('INSERT INTO mahasiswa SET ?', data, (err, result) => {
    if (err) throw err;
    console.log('Data berhasil ditambahkan:', result.insertId);
  });
}

const data1 = { nama: 'Rina Marlina', npm: '23400501', jurusan: 'Teknik Informatika' };
tambahMahasiswa(data1);

const data2 = { nama: 'Bagus Insan Pradana', npm: '23400502', jurusan: 'Teknik Mesin' };
tambahMahasiswa(data2);

const data3 = { nama: 'Pius Hari Purba', npm: '23400524', jurusan: 'Akutansi' };
tambahMahasiswa(data3);

setTimeout(() => db.end(), 1000);
