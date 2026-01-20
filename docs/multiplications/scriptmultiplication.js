let Nomutilisateur=prompt("Quel est votre Prénom?");
    alert("Bonjour "+Nomutilisateur);

let score=0;


for (let i=0 ; i<100; i++){

var chiffre1=Math.floor(Math.random()*9+1),chiffre2=Math.floor(Math.random()*9+1);
var calcul=chiffre1*chiffre2

let calculUtilisateur= prompt("combien font "+chiffre1 + " x " +chiffre2 + "?");


    if (calcul==calculUtilisateur){
        score+=1;
        alert("la réponse est : "+ calcul + ", bravo "+Nomutilisateur +", ton scrore est de : " + score);
       
    }
    else{
        score+=0;
        alert("la response était : " +calcul +
        " ce n'est pas la bonne réponse, " + Nomutilisateur + ", ton score est de : "+ score);
}
}




      
        



