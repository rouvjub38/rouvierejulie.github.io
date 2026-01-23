let Nomutilisateur=prompt("Quel est votre Prénom?");

if (Nomutilisateur===null || Nomutilisateur.trim()===""){
    Nomutilisateur="Joueur";
}
    alert("Bonjour "+Nomutilisateur);

let score=0;

for (let i=0 ; i<100; i++) {

let chiffre1 = Math.floor(Math.random()*9+1);
let chiffre2 = Math.floor(Math.random()*9+1);
let calcul = chiffre1*chiffre2;

let calculUtilisateur= prompt("combien font "+chiffre1 + " x " +chiffre2 + "?");


//cas annuler ou vide
    if (calculUtilisateur===null||calculUtilisateur.trim()===""){
        alert("tu n'as pas répondu");
    }
//cas bonne réponse
    else if (Number(calculUtilisateur)===calcul){
        score++;
        alert(
            "la réponse est : "+ calcul + 
              ", \nBravo "+Nomutilisateur +
              ", \nTon scrore est de : " + score
            );
    }
//mauvaise réponse
    else{
        alert(
            "La response était : " +calcul +
            " \nCe n'est pas la bonne réponse, " + Nomutilisateur + 
            ", \nTon score est de : "+ score
        );
}
//option pour arrêter le jeu
    let continuer=confirm("Veux-tu continuer?");
    if(!continuer){
        break;
}
}
    alert("Jeu terminé \nScore final :" + score);





      
        



