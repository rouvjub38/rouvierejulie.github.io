document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();//empeche l'envoi reel

  //afficher le message
  document.getElementById("successMessage").slyle.display="block";

  // vider le formulaire
  this.reset();
});
                                                        
