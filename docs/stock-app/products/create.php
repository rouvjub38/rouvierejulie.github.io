<?php

require '../config/database.php';



if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $stmt = $pdo->prepare(
        "INSERT INTO products (name, quantity, price, alert_threshold)
         VALUES (?, ?, ?, ?)"
    );

    $stmt->execute([

        $_POST['name'],
        $_POST['quantity'],
        $_POST['price'],
        $_POST['alert_threshold']

    ]);



    header("Location: ../index.php");

}
?>

<form method="POST">
    <input name="name" placeholder="Nom produit" required>
    <input type="number" name ="quantity" placeholder="Quantité" required>
    <input type="number" step="0.01" name="price" placeholder="Prix (€)" required>
    <input type="number" name="alert_threshold" placeholder="Seuil d'alerte (ex:5)" required>


    <button type="submit">Ajouter</button>
</form>
