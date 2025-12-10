 // Mobile menu functionality
      document.addEventListener("DOMContentLoaded", () => {
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        const navLinks = document.querySelector(".nav-links");

        mobileMenuBtn.addEventListener("click", () => {
          navLinks.style.display =
            navLinks.style.display === "flex" ? "none" : "flex";
        });

        // Close mobile menu on window resize
        window.addEventListener("resize", () => {
          if (window.innerWidth > 768) {
            navLinks.style.display = "flex";
          } else {
            navLinks.style.display = "none";
          }
        });

        // Contact form submission
        const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();

          // Get form values
          const name = document.getElementById("name").value;
          const phone = document.getElementById("phone").value;
          const email =
            document.getElementById("email").value || "Not provided";
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          // Create WhatsApp message
          const whatsappMessage = `New Contact Form Submission:%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

          // Open WhatsApp with pre-filled message
          window.open(
            `https://wa.me/254713883630?text=${whatsappMessage}`,
            "_blank"
          );

          // Show success message
          alert(
            "Thank you for your message! We have opened WhatsApp for you to send your inquiry directly to us."
          );

          // Reset form
          contactForm.reset();
        });

        // Add animation delays to cards for staggered effect
        const methodCards = document.querySelectorAll(".method-card");
        const socialCards = document.querySelectorAll(".social-card");
        const infoItems = document.querySelectorAll(".info-item");

        methodCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.2}s`;
        });

        socialCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.15}s`;
        });

        infoItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
        });
      });