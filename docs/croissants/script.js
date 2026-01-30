function confirmerCommande() {
    const message= document.getElementById("confirmation");
    message.innerText="Commande enregistrée";
    message.style.color="green";
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
   
}
