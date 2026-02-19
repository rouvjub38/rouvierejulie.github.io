<?php
require 'config/database.php';
require 'includes/header.php';

$stmt = $pdo->query("SELECT * FROM products ORDER BY id DESC");
$products = $stmt->fetchAll();
?>

<a class="button" href="products/create.php">Ajouter un produit</a>
<br><br>

<table>
    <tr>
        <th>Nom</th>
        <th>Quantité</th>
        <th>Prix (€)</th>
        <th>Actions</th>
    </tr>

    <?php foreach ($products as $product): ?>
    <tr class="<?= $product['quantity'] <=$product['alert_threshold'] ? 'low-stock' : '' ?>">
        <td><?= htmlspecialchars($product['name']) ?></td>
        <td><?= $product['quantity'] ?></td>
        <td><?=$product['price'] ?></td>
        <td>
            <a class= "button" href="products/edit.php?id=<?= $product['id'] ?>">Modifier</a>
            <a class="button delete" href="products/delete.php?id=<?= $product['id'] ?>">Supprimer</a>
            
        </td>
    </tr>
    <?php endforeach; ?>
    </table>

    <?php require 'includes/footer.php'; ?>
