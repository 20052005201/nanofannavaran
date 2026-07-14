/*=================================
  اسلایدر شرکت نانوفناوران
=================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

setInterval(nextSlide,5000);

showSlide(currentSlide);
/*=========================
   Mobile Menu
=========================*/

const menuButton = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
});
/*=========================
     Previous & Next
=========================*/

const prevBtn = document.getElementById("prev-slide");

const nextBtn = document.getElementById("next-slide");

prevBtn.addEventListener("click",()=>{

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

});

nextBtn.addEventListener("click",()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

});
/*=========================
      Slider Dots
=========================*/

const dots=document.querySelectorAll(".dot");

function updateDots(){

dots.forEach(dot=>dot.classList.remove("active"));

dots[currentSlide].classList.add("active");

}

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

updateDots();

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentSlide=index;

showSlide(currentSlide);

});

});
