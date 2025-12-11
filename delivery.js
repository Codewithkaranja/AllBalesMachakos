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

        // Close mobile menu on window resize
       
      
        // FAQ toggle functionality
        const faqQuestions = document.querySelectorAll(".faq-question");

        faqQuestions.forEach((question) => {
          question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle("active");

            // Close other FAQs when opening one
            if (faqItem.classList.contains("active")) {
              document.querySelectorAll(".faq-item").forEach((item) => {
                if (item !== faqItem && item.classList.contains("active")) {
                  item.classList.remove("active");
                }
              });
            }
          });
        });

        // Process step animation on scroll
        const processSteps = document.querySelectorAll(".process-step");

        const animateSteps = () => {
          const scrollPosition = window.scrollY + window.innerHeight;

          processSteps.forEach((step, index) => {
            const stepPosition = step.offsetTop;

            if (scrollPosition > stepPosition + 100) {
              setTimeout(() => {
                step.classList.add("active");
              }, index * 300);
            }
          });
        };

        // Initial animation
        setTimeout(() => {
          processSteps[0].classList.add("active");
        }, 500);

        // Animate on scroll
        window.addEventListener("scroll", animateSteps);

        // Order tracking button functionality
        const trackButton = document.querySelector(".tracking-button");
        const trackingInput = document.querySelector(".tracking-input");

        trackButton.addEventListener("click", () => {
          if (trackingInput.value.trim() === "") {
            alert("Please enter your order or tracking number.");
            trackingInput.focus();
          } else {
            alert(
              `In a complete system, this would track order: ${trackingInput.value}\n\nFor now, please contact us on WhatsApp for tracking information.`
            );
            trackingInput.value = "";
          }
        });

        // Add animation delays to zone cards for staggered effect
        const zoneCards = document.querySelectorAll(".zone-card");
        const faqItems = document.querySelectorAll(".faq-item");

        zoneCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.2}s`;
        });

        faqItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
        });
      });