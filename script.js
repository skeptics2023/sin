let currentSlide = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.news-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    if (n > totalSlides) { currentSlide = 1; }
    if (n < 1) { currentSlide = totalSlides; }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide - 1].classList.add('active');
}

setInterval(function() {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        // Toggle a class to show/hide the menu
        navMenu.classList.toggle("menu-active");
    });
});