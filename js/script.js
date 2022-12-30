var decContenuCours = document.querySelector(".decloncher-contenu-cours");
var decProg = document.querySelector(".decloncher-programmation");
var decYoutube = document.querySelector(".decloncher-youtube");
var decNosCours = document.querySelector(".decloncher-nos-cours");
var decRessources = document.querySelector(".decloncher-ressources");
var decMoi = document.querySelector(".decloncher-moi");
var fermerButton = document.querySelectorAll(".fermer-button");

// pour ajouter la classe show-modal afin d'afficher le modal
function toggleModal(modal) {
    modal.classList.toggle("show-modal");
}
// pour fermer la modal quand on clique a l'exterieur du modal
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function fermerModal(){
    let modal = document.querySelector(".show-modal");
    console.log(modal)
    if(modal){
        toggleModal(modal);
    }
}

function fermerModalEx(event){
    let modal = document.querySelector(".show-modal");
    if(event.target === modal){
        toggleModal(modal);
    }
}

function afficherContenuCours(){
    let modal = document.querySelector(".modal-centenu-cours");
    toggleModal(modal);
}

function afficherProg(){
    let modal = document.querySelector(".modal-programmation");
    toggleModal(modal);
}

function afficherYoutube(){
    let modal = document.querySelector(".modal-youtube");
    toggleModal(modal);
}

function afficherNosCours(){
    let modal = document.querySelector(".modal-nos-cours");
    toggleModal(modal);
}

function afficherRessources(){
    let modal = document.querySelector(".modal-ressources");
    toggleModal(modal);
}

function afficherMoi(){
    let modal = document.querySelector(".modal-moi");
    toggleModal(modal);
}



decContenuCours.addEventListener("click", afficherContenuCours);
decProg.addEventListener("click", afficherProg);
decYoutube.addEventListener("click", afficherYoutube);
decNosCours.addEventListener("click", afficherNosCours);
decRessources.addEventListener("click", afficherRessources);
decMoi.addEventListener("click", afficherMoi);
fermerButton.forEach(function(e){
    e.addEventListener("click", fermerModal);
})
window.addEventListener("click", fermerModalEx);