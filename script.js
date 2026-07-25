document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       اسلایدر صفحه اصلی
    ========================== */
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    function showSlide(index){
        slides.forEach((slide)=>{ slide.classList.remove("active"); });
        dots.forEach((dot)=>{ dot.classList.remove("active"); });
        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide(){
        currentSlide++;
        if(currentSlide >= slides.length){ currentSlide = 0; }
        showSlide(currentSlide);
    }

    function previousSlide(){
        currentSlide--;
        if(currentSlide < 0){ currentSlide = slides.length-1; }
        showSlide(currentSlide);
    }

    const nextBtn=document.getElementById("next-slide");
    const prevBtn=document.getElementById("prev-slide");

    if(nextBtn){ nextBtn.addEventListener("click",nextSlide); }
    if(prevBtn){ prevBtn.addEventListener("click",previousSlide); }

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

    /* ==========================
       WHY US, SERVICES, PROJECTS ANIMATION
    ========================== */
    const observerCallback = (entries, className, delay = 0) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add(className);
                }, index * (delay || 150));
            }
        });
    };

    const whyCards = document.querySelectorAll(".why-card");
    const whyObserver = new IntersectionObserver((entries) => observerCallback(entries, "show-card"), { threshold: 0.20 });
    whyCards.forEach(card => whyObserver.observe(card));

    const serviceCards = document.querySelectorAll(".service-card");
    const serviceObserver = new IntersectionObserver((entries) => observerCallback(entries, "show-service", 0), { threshold: 0.2 });
    serviceCards.forEach(card => serviceObserver.observe(card));

    const projectCards = document.querySelectorAll(".project-card");
    const projectObserver = new IntersectionObserver((entries) => observerCallback(entries, "show-project", 0), { threshold: 0.2 });
    projectCards.forEach(card => projectObserver.observe(card));

    /* ==========================
       STATS COUNTER
    ========================== */
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

    const statsSection = document.querySelector("#stats");
    if(statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { startCounter(); }
            });
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }

    /* ==========================
       TESTIMONIAL SLIDER
    ========================== */
    const testimonialSlider = document.querySelector(".testimonial-slider");
    if (testimonialSlider) {
        let scrollAmount = 0;
        function autoSlide() {
            const card = testimonialSlider.querySelector(".testimonial-card");
            if (!card) return;
            const cardWidth = card.offsetWidth + 30;
            scrollAmount += cardWidth;
            if (scrollAmount >= testimonialSlider.scrollWidth - testimonialSlider.clientWidth) {
                scrollAmount = 0;
            }
            testimonialSlider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
        setInterval(autoSlide, 4000);
    }

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */
    const backToTop = document.getElementById("backToTop");
    if(backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        });
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
