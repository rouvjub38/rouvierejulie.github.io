<?php
require '../config/database.php';

$stmt = $pdo->prepare(
    "UPDATE products
     SET name = ?, quantity = ?, price = ?, alert_threshold = ?
     WHERE id = ?"
);
$stmt->execute([
    $_POST['name'],
    $_POST['quantity'],
    $_POST['price'],
    $_POST['alert_threshold'],
    $_POST['id']
]);


header("Location: ../index.php");
