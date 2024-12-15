// MODAL
const modal = document.getElementById("contact-modal");
const btn = document.getElementById("myBtn"); // Le bouton qui ouvre la fenêtre modale

//Récupérez l'élément <span> qui ferme la modale
const span = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrez la fenêtre modale
btn.onclick = function () {
  modal.style.display = "block";
};

// Lorsque l'utilisateur clique sur <span> (x), fermez la fenêtre modale
span.onclick = function () {
  modal.style.display = "none";
};

// Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre modale, fermez-la
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* ** POPUP **/

jQuery(document).ready(function ($) {
  // Afficher la popup au clic sur le bouton "Contact"
  $("#contact-button").on("click", function () {
    var reference = $('p:contains("Référence :")')
      .text()
      .replace("Référence :", "")
      .trim();
    $("#ref-photo").val(reference); // Préremplir le champ Réf. PHOTO
    $("#popup").removeClass("hidden");
  });

  // Fermer la popup avec le bouton de fermeture
  $(".popup-close").on("click", function () {
    $("#popup").addClass("hidden");
  });

  // Fermer la popup en cliquant en dehors du contenu
  $(window).on("click", function (event) {
    var popup = $("#popup");
    if (event.target == popup[0]) {
      popup.addClass("hidden");
    }
  });
});
