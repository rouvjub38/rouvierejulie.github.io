<?php
require '../config/database.php';

$stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
$stmt->execute([$_GET['id']]);

header("Location: ../index.php");
