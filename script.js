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
/* ===========================
   STATS COUNTER
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".stat-number");

    let started = false;

    function startCounter() {

        if (started) return;
        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;
            const target = parseInt(text.replace(/\D/g, ""));

            let count = 0;

            const speed = Math.max(20, target / 100);

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    if (text.includes("+")) counter.innerText += "+";
                    if (text.includes("%")) counter.innerText += "%";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

    }

    const section = document.querySelector("#stats");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

            }

        });

    }, { threshold: 0.3 });

    observer.observe(section);

});
/* ===========================
   TESTIMONIAL SLIDER
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".testimonial-slider");

    if (!slider) return;

    let scrollAmount = 0;

    function autoSlide() {

        const card = slider.querySelector(".testimonial-card");

        if (!card) return;

        const cardWidth = card.offsetWidth + 30;

        scrollAmount += cardWidth;

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });

    }

    setInterval(autoSlide, 4000);

});
