<?php
header("Access-Control-Allow-Origin:  *");
header("Content-Type: application/json; charset=utf-8");
$servername = "127.0.0.1";
$username = "root";
$password = "12345678";
$database="repulok";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql  = 'SELECT * FROM `repulo` ORDER BY `id`  asc';
$result = $conn->query($sql);
$array = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $array[] = $row;
   // echo "@id:" . $row["id"]. "@repulo_gyarto:" . $row["repulonev"]. "@tipus:" . $row["repulotipus"]. "@max_sebesseg:". $row["maxseb"]."@kapacitas:". $row["kapacitas"]. "@max_tav:". $row["maxtav"]. "@gyartas_kezdet:". $row["gyartaskezdet"]." "."<br>";
  }
} else {
  echo "Adatbázis hiba!";
}
echo json_encode($array);

$conn->close();
?>
