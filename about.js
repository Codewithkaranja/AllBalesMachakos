// Mobile menu functionality
      document.addEventListener("DOMContentLoaded", () => {
         // ---------------- Mobile Menu ----------------
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
        }
    });

        // Add animation delays to feature cards for staggered effect
        const featureCards = document.querySelectorAll(".feature-card");
        const valueCards = document.querySelectorAll(".value-card");

        featureCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.1}s`;
        });

        valueCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.1}s`;
        });
      });

      // Why Choose Us - 3D Swiper
const whySwiper = new Swiper(".myWhyChooseSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 35,
    stretch: 0,
    depth: 180,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
