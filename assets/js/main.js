const btns = document.querySelectorAll(".btn-modale");
const modaleEquipement = document.querySelector(".bloc-modale");
const fermetureModale = document.querySelector(".fermeture-modale");
const imgIndex = document.querySelector(".bloc-modale img");


if(window.matchMedia('(min-width:850px)').matches){
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      imgIndex.src = `assets/images/pic-${e.target.getAttribute("data-index")}.jpg`;
      modaleEquipement.classList.add('active-modale');
    });
  });
modaleEquipement.addEventListener('click', function(){
  modaleEquipement.classList.remove('active-modale')
})
}
