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
/*=========================
     Scroll Animation
=========================*/

const animatedItems = document.querySelectorAll(
".about-company,.services,.why-us,.work-process,.coverage,.portfolio,.testimonials,.blog,.contact"
);

function revealOnScroll(){

animatedItems.forEach(item=>{

const itemTop=item.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(itemTop < windowHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*=========================
      Visitor Counter
=========================*/

const visitor=document.getElementById("visitor-count");

if(visitor){

let count=localStorage.getItem("nanofannavaranVisitor");

if(!count){

count=1;

}else{

count=parseInt(count)+1;

}

localStorage.setItem("nanofannavaranVisitor",count);

visitor.innerText=count.toLocaleString("fa-IR");

}

/*=========================
     Back To Top Button
=========================*/

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.className="top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
