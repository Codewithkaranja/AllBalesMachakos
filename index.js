document.addEventListener('DOMContentLoaded', () => {
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

    // ---------------- Header Scroll Effect ----------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ---------------- Testimonial Slider ----------------
    const testimonials = [
        {
            content: "I've been buying from All Bales Machakos for over a year now. The quality of their UK bales is consistently excellent, and their delivery to Makueni is always on time. My boutique customers love the items I get from them!",
            name: "Sarah Mutinda",
            role: "Boutique Owner, Makueni",
            initials: "SM"
        },
        {
            content: "As a new retailer, I was nervous about wholesale suppliers. All Bales Machakos made the process easy. Their WhatsApp ordering is convenient, and they helped me choose the right bales for my target market. Highly recommended!",
            name: "James Kilonzo",
            role: "Hawker, Machakos Town",
            initials: "JK"
        },
        {
            content: "The winter wear bales from Canada are top quality! I ordered 5 bales for my shop, and every item was in excellent condition. The pricing is fair, and the delivery was faster than expected. Will definitely order again.",
            name: "Mercy Ndinda",
            role: "Shop Owner, Kitui",
            initials: "MW"
        }
    ];

    const testimonialCard = document.querySelector('.testimonial-card');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentTestimonial = 0;

    function updateTestimonial(index) {
        const testimonial = testimonials[index];
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                "${testimonial.content}"
            </div>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initials}</div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;

        navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            updateTestimonial(currentTestimonial);
        });
    });

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 5000);

    // ---------------- Staggered Animation ----------------
    const categoryCards = document.querySelectorAll('.category-card');
    const featureCards = document.querySelectorAll('.feature-card');

    categoryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ---------------- Hero Section Typewriter ----------------
    const heroWords = ["Get Premium Mitumba", "Ex UK Bales", "Ex Canada Bales", "Ex China Bales", "Ex Scott Bales"];
    let i = 0, j = 0, currentWord = '', isDeleting = false;
    const typewriter = document.getElementById('typewriter');

    function type() {
        if (i >= heroWords.length) i = 0;
        const fullWord = heroWords[i];

        if (!isDeleting) {
            currentWord = fullWord.substring(0, j + 1);
            j++;
            typewriter.textContent = currentWord;

            if (j === fullWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            currentWord = fullWord.substring(0, j - 1);
            j--;
            typewriter.textContent = currentWord;

            if (j === 0) {
                isDeleting = false;
                i++;
            }
        }

        setTimeout(type, isDeleting ? 100 : 150);
    }
    type();

    // ---------------- Hero Background Slider ----------------
    const heroBg = document.querySelector('.hero-bg');
    const bgImages = [
        'url("https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/596640352_2565486687165702_2471188480117037471_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHBAKifAOrt907x8R0GXkDhRUrTm41C8vFFStObjULy8TvH3Td_0q4mcEfel0sAHOULLIbjUTRR22ud2Jaxd4Dc&_nc_ohc=Xb3byCy7ADEQ7kNvwFogwOH&_nc_oc=Adl8ZYlyPyrFNPTjnrUaRRma9dm62TnjOQqRvQD_O1HS9e1o03a7YizV92n4yZEBGrI&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=rwF-1_ftHCxwbM54T-_-Dw&oh=00_Afl75DP5RJZnwhc1AKyDSB2XrgltZbZWbdXMzZ7ncc9JDQ&oe=693FFB8C")',
        'url("https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/589067660_1578963163516755_6934635685188958005_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGBSOUSrMFkj-jMosALQCYAkOg-saP8xz-Q6D6xo_zHPxpWUvAS074ZdI-9pRV2r5xklMur3E0K-XJGqHnLJIbb&_nc_ohc=W4bzVO4mdNUQ7kNvwEbJe6y&_nc_oc=Adnon-k05fs-ZscDT26tJiOWMmpcH9k8kWggx8XPEI00KIwpihj-RHVoS9OvzAVikyE&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=f2g7o3MEU2uxwZk-71bOew&oh=00_Afke7e_z8AzDYeMdaGOvxUdbc02mFlcUy98-gsaepMy4rQ&oe=69401EC7")',
        'url("https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/546644181_1517377589675313_7642245272655948681_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeECjH0YMoobvUabtZANtSg43IrWfoavFuXcitZ-hq8W5cVHUFdEGVS5e7TiU5aorA2_xuBvTiif72pmynk-VUaw&_nc_ohc=vwp26y7tiVEQ7kNvwHvOv02&_nc_oc=AdmOSp1NrPNSl1N_HmDZqYf4K9SwdASuOVPKRg7Tl_PD-lXTRadSYG4IGwDKZZ7EjOI&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=cpqSLcUjPUldElPbndhdBQ&oh=00_AflRmR--bosUcID3xpAY6Xdtjqe757q9TKDjC1dPJ-kzWA&oe=69400C78")',
        'url("https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/514437734_1457693825643690_2613480137677700208_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEd6oDPnUZay4FCt2XxGP0kOySEOlpDSkE7JIQ6WkNKQWdyHmnItMo6ykx5yeInmY1DObnpDsr7YuvJNlj7hK5p&_nc_ohc=b1eSeL3jnkgQ7kNvwHlarJH&_nc_oc=AdnGvfc6aDqzv5PfV1JrrmQtU_cTrKOpI1bBwesRTn8AbWh6JddLrN2DSfDeDuDh0FM&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=NjkHJWq_mRUYOU8sozlUbg&oh=00_AfleBabN2UECOwWpM9v6K3JFW4_sqMvngERDEqW-xaqV9Q&oe=69401319")'
    ];
    let bgIndex = 0;

    function slideBackground() {
        heroBg.style.backgroundImage = bgImages[bgIndex];
        bgIndex = (bgIndex + 1) % bgImages.length;
    }

    slideBackground();
    setInterval(slideBackground, 5000);
});

// Why Choose Us - 3D Swiper
const whySwiper = new Swiper(".myWhySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  autoplay: {
    delay: 2500,   // time between slides
    disableOnInteraction: false, // keep autoplay after dragging
  },

  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


