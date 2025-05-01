Langkah-langkah:

1. Buat database di phpMyAdmin:
   CREATE DATABASE praktikum_web;
   USE praktikum_web;
   CREATE TABLE mahasiswa (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(100),
     npm VARCHAR(20),
     jurusan VARCHAR(50)
   );

2. Jalankan:
   npm install express mysql

3. Jalankan insert:
   node insert.js

4. Jalankan server:
   node server.js

5. Buka browser:
   http://localhost:3000/mahasiswa

6. Buka mahasiswa.php di server XAMPP:
   http://localhost/praktikum_node_mysql/mahasiswa.php