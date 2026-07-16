/*=========================================
      شرکت سمپاشی نانوفناوران بهداشت تهران
      nanofannavaran.ir
=========================================*/

/*=========================
      Hero Slider
=========================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("next-slide");
const prevBtn = document.getElementById("prev-slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

dots.forEach(dot=>{
dot.classList.remove("active");
});

slides[index].classList.add("active");
dots[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide = slides.length - 1;

}

showSlide(currentSlide);

}

if(nextBtn){

nextBtn.addEventListener("click",nextSlide);

}

if(prevBtn){

prevBtn.addEventListener("click",prevSlide);

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentSlide=index;

showSlide(currentSlide);

});

});

setInterval(nextSlide,5000);

/*=========================
      Mobile Menu
=========================*/

const mobileMenu=document.querySelector(".mobile-menu");

const navbar=document.querySelector(".navbar");

if(mobileMenu){

mobileMenu.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}
