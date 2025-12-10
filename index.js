  // Bale Data
      const bales = [
        {
          id: 1,
          category: "Men's Clothing Bale",
          description:
            "Assorted high-quality men's wear including shirts, trousers, jackets, and casual wear.",
          origin: "UK",
          type: "clothing",
          gender: "men",
          weight: "45-50 kg",
          items: "200-250 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 2,
          category: "Ladies' Clothing Bale",
          description:
            "Trendy ladies' fashion including blouses, skirts, pants, and contemporary styles.",
          origin: "Canada",
          type: "clothing",
          gender: "women",
          weight: "40-45 kg",
          items: "180-220 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 3,
          category: "Kids & Babies Wear Bale",
          description:
            "Colorful and comfortable clothing for children of all ages, from newborns to teens.",
          origin: "China",
          type: "clothing",
          gender: "kids",
          weight: "30-35 kg",
          items: "250-300 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 4,
          category: "Mixed Clothes Bale",
          description:
            "Varied mix of clothing items for men, women, and children. Perfect for general retailers.",
          origin: "UK",
          type: "clothing",
          gender: "mixed",
          weight: "50-55 kg",
          items: "220-270 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 5,
          category: "Ladies Dresses Bale",
          description:
            "Elegant dresses, from casual summer dresses to formal evening gowns.",
          origin: "UK",
          type: "clothing",
          gender: "women",
          weight: "35-40 kg",
          items: "120-150 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 6,
          category: "Men's & Ladies T-Shirts Bale",
          description:
            "High-quality cotton t-shirts for both men and women in various styles and colors.",
          origin: "China",
          type: "clothing",
          gender: "mixed",
          weight: "40-45 kg",
          items: "300-350 pcs",
          season: "Summer",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 7,
          category: "Pants & Trousers Bale",
          description:
            "Assorted pants and trousers for men and women, including formal and casual styles.",
          origin: "Canada",
          type: "clothing",
          gender: "mixed",
          weight: "45-50 kg",
          items: "150-180 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 8,
          category: "Jeans/Denim Bale",
          description:
            "Premium denim jeans for men, women, and youth. Various fits and washes available.",
          origin: "UK",
          type: "clothing",
          gender: "mixed",
          weight: "50-55 kg",
          items: "100-130 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 9,
          category: "Shorts & Sportswear Bale",
          description:
            "Activewear including shorts, tracksuits, sports jerseys, and fitness clothing.",
          origin: "China",
          type: "sportswear",
          gender: "mixed",
          weight: "35-40 kg",
          items: "200-250 pcs",
          season: "Summer",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 10,
          category: "Sweaters, Hoodies & Winter Wear Bale",
          description:
            "Warm winter clothing including sweaters, hoodies, jackets, and thermal wear.",
          origin: "Canada",
          type: "winter",
          gender: "mixed",
          weight: "40-45 kg",
          items: "120-160 pcs",
          season: "Winter",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 11,
          category: "Towels Bale",
          description:
            "Soft, absorbent towels in various sizes including bath, hand, and face towels.",
          origin: "China",
          type: "bedding",
          gender: "mixed",
          weight: "30-35 kg",
          items: "150-200 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 12,
          category: "Bedsheets Bale",
          description:
            "Quality bedsheets in various sizes, materials, and designs for home or resale.",
          origin: "UK",
          type: "bedding",
          gender: "mixed",
          weight: "35-40 kg",
          items: "80-120 sets",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 13,
          category: "Duvets Bale",
          description:
            "Warm and comfortable duvets in various sizes and thickness for different seasons.",
          origin: "Scotland",
          type: "bedding",
          gender: "mixed",
          weight: "40-45 kg",
          items: "50-70 pcs",
          season: "Winter",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 14,
          category: "Underwear/Panties Bale",
          description:
            "New underwear and panties in various sizes, styles, and materials.",
          origin: "China",
          type: "clothing",
          gender: "mixed",
          weight: "25-30 kg",
          items: "500-600 pcs",
          season: "All Season",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 15,
          category: "Cotton Tops & Blouses Bale",
          description:
            "Lightweight cotton tops and blouses perfect for warm weather and casual wear.",
          origin: "UK",
          type: "clothing",
          gender: "women",
          weight: "35-40 kg",
          items: "200-250 pcs",
          season: "Summer",
          price: "Contact for price",
          image:
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
        },
      ];

      // DOM Elements
      const baleGrid = document.getElementById("baleGrid");
      const filterButtons = document.querySelectorAll(".filter-btn");
      const resetFiltersButton = document.getElementById("resetFilters");

      // Initialize filters
      let activeFilters = {
        gender: "all",
        origin: "all",
        type: "all",
      };

      // Generate bale cards
      function generateBaleCards(balesToShow) {
        baleGrid.innerHTML = "";

        balesToShow.forEach((bale) => {
          const card = document.createElement("div");
          card.className = "bale-card";
          card.dataset.gender = bale.gender;
          card.dataset.origin = bale.origin.toLowerCase();
          card.dataset.type = bale.type;

          // Calculate animation delay for staggered effect
          const delay = bale.id * 0.05 + "s";
          card.style.animationDelay = delay;

          card.innerHTML = `
                    <div class="bale-image">
                        <img src="${bale.image}" alt="${bale.category}">
                        <div class="bale-origin">${bale.origin}</div>
                    </div>
                    <div class="bale-info">
                        <h3 class="bale-category">${bale.category}</h3>
                        <p class="bale-description">${bale.description}</p>
                        
                        <div class="bale-details">
                            <div class="bale-detail">
                                <span class="detail-label">Weight</span>
                                <span class="detail-value">${bale.weight}</span>
                            </div>
                            <div class="bale-detail">
                                <span class="detail-label">Items</span>
                                <span class="detail-value">${bale.items}</span>
                            </div>
                            <div class="bale-detail">
                                <span class="detail-label">Season</span>
                                <span class="detail-value">${bale.season}</span>
                            </div>
                        </div>
                        
                        <div class="bale-actions">
                            <button class="btn btn-details" onclick="viewBaleDetails(${
                              bale.id
                            })">
                                <i class="fas fa-eye"></i> View Details
                            </button>
                            <a href="https://wa.me/254713883630?text=Hi! I'm interested in the ${encodeURIComponent(
                              bale.category
                            )}. Can you provide more details?" class="btn btn-whatsapp" target="_blank">
                                <i class="fab fa-whatsapp"></i> Order Now
                            </a>
                        </div>
                    </div>
                `;

          baleGrid.appendChild(card);
        });
      }

      // Filter bales based on active filters
      function filterBales() {
        let filteredBales = bales;

        // Apply gender filter
        if (activeFilters.gender !== "all") {
          filteredBales = filteredBales.filter(
            (bale) => bale.gender === activeFilters.gender
          );
        }

        // Apply origin filter
        if (activeFilters.origin !== "all") {
          filteredBales = filteredBales.filter(
            (bale) => bale.origin.toLowerCase() === activeFilters.origin
          );
        }

        // Apply type filter
        if (activeFilters.type !== "all") {
          filteredBales = filteredBales.filter(
            (bale) => bale.type === activeFilters.type
          );
        }

        generateBaleCards(filteredBales);

        // Update filter button active states
        updateFilterButtons();
      }

      // Update filter button active states
      function updateFilterButtons() {
        filterButtons.forEach((button) => {
          const filterType =
            button.parentElement.parentElement.querySelector("h4").textContent;
          const filterValue = button.dataset.filter;

          // Remove active class from all buttons in the same group
          if (
            filterType === "By Gender" &&
            filterValue === activeFilters.gender
          ) {
            button.classList.add("active");
          } else if (
            filterType === "By Origin" &&
            filterValue === activeFilters.origin
          ) {
            button.classList.add("active");
          } else if (
            filterType === "By Type" &&
            filterValue === activeFilters.type
          ) {
            button.classList.add("active");
          } else {
            button.classList.remove("active");
          }

          // Special case for "All" button in gender filter
          if (
            filterType === "By Gender" &&
            filterValue === "all" &&
            activeFilters.gender === "all"
          ) {
            button.classList.add("active");
          }
        });
      }

      // View bale details (would link to single product page)
      function viewBaleDetails(baleId) {
        // In a real application, this would navigate to a single product page
        alert(
          `Viewing details for bale #${baleId}. In a complete website, this would navigate to a dedicated product page.`
        );

        // Example: window.location.href = `bale/${baleId}`;
      }

      // Initialize the page
      document.addEventListener("DOMContentLoaded", () => {
        // Generate initial bale cards
        generateBaleCards(bales);

        // Set up filter button event listeners
        filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const filterType =
              button.parentElement.parentElement.querySelector(
                "h4"
              ).textContent;
            const filterValue = button.dataset.filter;

            // Update active filters
            if (filterType === "By Gender") {
              activeFilters.gender = filterValue;
            } else if (filterType === "By Origin") {
              activeFilters.origin = filterValue;
            } else if (filterType === "By Type") {
              activeFilters.type = filterValue;
            }

            // Apply filters
            filterBales();
          });
        });

        // Reset filters button
        resetFiltersButton.addEventListener("click", () => {
          activeFilters = {
            gender: "all",
            origin: "all",
            type: "all",
          };

          filterBales();
        });

        // Mobile menu toggle
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
      });