<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO testimonial (name, feedback, image_url, date) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    die('MySQL prepare error: ' . $conn->error);
}

$name = $_POST['name'];
$feedback = $_POST['feedback'];
$imagePath = '';
$timestamp = date('Y-m-d H:i:s');

if (isset($_FILES['image']) && $_FILES['image']['error'] == UPLOAD_ERR_OK) {
    $targetDir = "uploads/";
    $safeFileName = preg_replace('/[^A-Za-z0-9\-\_\.]/', '', basename($_FILES['image']['name']));
    $targetFile = $targetDir . $safeFileName;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    if (getimagesize($_FILES['image']['tmp_name']) !== false) {
        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
            $imagePath = $targetFile;
        } else {
            echo "Sorry, there was an error uploading your file.";
            exit;
        }
    } else {
        echo "File is not an image.";
        exit;
    }
}

$stmt->bind_param("ssss", $name, $feedback, $imagePath, $timestamp);
if ($stmt->execute()) {
    echo "New record created successfully with timestamp: $timestamp";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
