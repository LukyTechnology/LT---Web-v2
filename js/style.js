/* KLIKNUTIE NA NOTEBOOK */
function notebook() {
    alert("Tento notebook sa už nepredáva!");
}    

/* MOBILNE MENU */
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
})