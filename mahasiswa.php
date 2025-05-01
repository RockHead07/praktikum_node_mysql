<?php
$conn = new mysqli("localhost", "root", "", "praktikum_web");
$result = $conn->query("SELECT * FROM mahasiswa");
?>

<!DOCTYPE html>
<html>
<head>
  <title>Data Mahasiswa</title>
  <link rel="stylesheet" href="student-table.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div class="table-container">
    <h2>Data Mahasiswa</h2>
    <div class="responsive-table-wrapper">
      <table>
        <tr><th>ID</th><th>Nama</th><th>NPM</th><th>Jurusan</th></tr>
        <?php while($row = $result->fetch_assoc()): ?>
        <tr>
          <td><?= $row['id'] ?></td>
          <td><?= $row['nama'] ?></td>
          <td><?= $row['npm'] ?></td>
          <td><?= $row['jurusan'] ?></td>
        </tr>
        <?php endwhile; ?>
      </table>
    </div>
  </div>
</body>
</html>
