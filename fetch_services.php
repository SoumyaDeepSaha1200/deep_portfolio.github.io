<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT title, description, image FROM services";
$result = $conn->query($sql);

if ($result === false) {
    // Log error to file or display error message
    echo json_encode([
        "error" => "SQL query failed: " . $conn->error
    ]);
    exit();
}

$services = [];

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $services[] = $row;
    }
} else {
    echo json_encode([]);
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($services);
?>
