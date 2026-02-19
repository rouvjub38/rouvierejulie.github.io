<?php
require '../config/database.php';

$stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
$stmt->execute([$_GET['id']]);
$product = $stmt->fetch();
?>

<form action="update.php" method="POST">
    <input type="hidden" name="id" value="<?= $product['id'] ?>">
    <input name="name" value="<?= $product['name'] ?>" required>
    <input type="number" name="quantity" value="<?= $product['quantity'] ?>" required>
    <input type="number" step="0.01" name="price" value="<?= $product['price'] ?>" required>
    <input type="number" name="alert_threshold" value="<?= $product['alert_threshold'] ?>" required>
    <button type="submit">Mettre à jour</button>
    
</form>
