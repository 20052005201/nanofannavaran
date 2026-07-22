/* ===========================================
   script.js
   شرکت سمپاشی نانوفناوران بهداشت تهران
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       اسلایدر صفحه اصلی
    ========================== */

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    function showSlide(index){

        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });

        dots.forEach((dot)=>{
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

    function previousSlide(){

        currentSlide--;

        if(currentSlide < 0){

            currentSlide = slides.length-1;

        }

        showSlide(currentSlide);

    }

    const nextBtn=document.getElementById("next-slide");

    const prevBtn=document.getElementById("prev-slide");

    if(nextBtn){

        nextBtn.addEventListener("click",nextSlide);

    }

    if(prevBtn){

        prevBtn.addEventListener("click",previousSlide);

    }

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",function(){

            currentSlide=index;

            showSlide(currentSlide);

        });

    });

    setInterval(nextSlide,5000);

    /* ==========================
       منوی موبایل
    ========================== */

    const mobileMenu=document.querySelector(".mobile-menu");

    const navbar=document.querySelector(".navbar");

    if(mobileMenu){

        mobileMenu.addEventListener("click",function(){

            navbar.classList.toggle("show");

        });

    }

    /* ==========================
       FAQ
    ========================== */

    const faqItems=document.querySelectorAll(".faq-item");

    faqItems.forEach((item)=>{

        item.addEventListener("click",function(){

            this.classList.toggle("open");

        });

    });

});
/* ===========================================
   WHY US ANIMATION
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".why-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show-card");

                }, index * 150);

            }

        });

    }, {
        threshold: 0.20
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});
/* Animation */

.why-card{
    opacity:0;
    transform:translateY(40px);
}

.show-card{
    opacity:1;
    transform:translateY(0);
    transition:all .7s ease;
}
/* ===========================
   SERVICES ANIMATION
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show-service");
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {
        observer.observe(card);
    });

});
/* ===========================
   PROJECTS ANIMATION
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const projects = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-project");

            }

        });

    }, {
        threshold: 0.2
    });

    projects.forEach((project) => {

        observer.observe(project);

    });

});
