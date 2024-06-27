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

$sql = "SELECT id, title, description, image FROM achievements";
$result = $conn->query($sql);

$achievements = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $achievements[] = $row;
    }
} else {
    echo json_encode(['error' => 'No achievements found']);
    exit;
}

echo json_encode($achievements);

$conn->close();
?>
