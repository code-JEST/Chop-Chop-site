let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }