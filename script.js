document.addEventListener("DOMContentLoaded", function () {

    // ======== 1. اسلایدر خودکار ========
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (!slides.length) return;
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // دکمه‌های قبلی/بعدی
    document.getElementById("nextSlide")?.addEventListener("click", function () {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    document.getElementById("prevSlide")?.addEventListener("click", function () {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    // نقاط راهنما
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    // شروع اسلایدر
    if (slides.length) {
        showSlide(0);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // ======== 2. منوی کشویی (همبرگری) ========
    const mobileMenu = document.querySelector(".mobile-menu");
    const navbar = document.querySelector(".navbar");
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener("click", function () {
            navbar.classList.toggle("show");
        });
        // بستن منو با کلیک روی هر لینک
        document.querySelectorAll(".navbar ul li a").forEach(link => {
            link.addEventListener("click", () => navbar.classList.remove("show"));
        });
    }

    // ======== 3. دکمه کشویی سبز (مشاوره رایگان) ========
    const toggleBtn = document.getElementById("floatingToggle");
    const floatingMenu = document.getElementById("floatingMenu");

    if (toggleBtn && floatingMenu) {
        toggleBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            this.classList.toggle("active");
            floatingMenu.classList.toggle("open");
        });

        document.querySelectorAll(".floating-item").forEach(item => {
            item.addEventListener("click", function () {
                toggleBtn.classList.remove("active");
                floatingMenu.classList.remove("open");
            });
        });

        document.addEventListener("click", function (e) {
            const container = document.querySelector(".floating-container");
            if (container && !container.contains(e.target)) {
                toggleBtn.classList.remove("active");
                floatingMenu.classList.remove("open");
            }
        });
    }

    // ======== 4. دکمه اسکرول به بالا ========
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ======== 5. جستجو ========
    window.searchSite = function () {
        const query = document.getElementById("searchInput").value.trim();
        if (query) {
            // هدایت به جستجوی گوگل با دامنه سایت
            window.open(`https://www.google.com/search?q=site:nanofannavaran.ir ${encodeURIComponent(query)}`, "_blank");
        }
    };
    // جستجو با کلید Enter
    document.getElementById("searchInput")?.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            window.searchSite();
        }
    });
});
