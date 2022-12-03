 /*MENY*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

 /*darkmode*/
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 /*slideshow*/
 let slideIndex = 0;
 showSlides();
 
 function showSlides() {
   let i;
   let slides = document.getElementsByClassName("Picture-slide");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 4000);
 }