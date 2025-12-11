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

        if (balesToShow.length === 0) {
          baleGrid.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No Bales Found</h3>
                        <p>We couldn't find any bales matching your selected filters. Try adjusting your filters or resetting to see all bales.</p>
                        <button class="btn btn-details" id="resetFromNoResults">
                            <i class="fas fa-redo-alt"></i> Reset Filters
                        </button>
                    </div>
                `;

          document
            .getElementById("resetFromNoResults")
            .addEventListener("click", () => {
              activeFilters = { gender: "all", origin: "all", type: "all" };
              filterBales();
            });

          return;
        }

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
        const bale = bales.find((b) => b.id === baleId);

        // Create a modal or redirect to a single product page
        const modalHTML = `
                <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:2000;">
                    <div style="background:white; border-radius:12px; padding:40px; max-width:600px; width:90%; max-height:90vh; overflow-y:auto;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                            <h2 style="font-family:'EB Garamond', serif; color:#222;">${
                              bale.category
                            }</h2>
                            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background:none; border:none; font-size:24px; cursor:pointer; color:#FF2D7F;">×</button>
                        </div>
                        
                        <img src="${bale.image}" alt="${
          bale.category
        }" style="width:100%; height:300px; object-fit:cover; border-radius:8px; margin-bottom:20px;">
                        
                        <p style="color:#6B7280; margin-bottom:20px;">${
                          bale.description
                        }</p>
                        
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-bottom:25px;">
                            <div style="text-align:center;">
                                <div style="font-size:14px; color:#6B7280;">Origin</div>
                                <div style="font-weight:600; color:#222;">${
                                  bale.origin
                                }</div>
                            </div>
                            <div style="text-align:center;">
                                <div style="font-size:14px; color:#6B7280;">Weight</div>
                                <div style="font-weight:600; color:#222;">${
                                  bale.weight
                                }</div>
                            </div>
                            <div style="text-align:center;">
                                <div style="font-size:14px; color:#6B7280;">Items</div>
                                <div style="font-weight:600; color:#222;">${
                                  bale.items
                                }</div>
                            </div>
                        </div>
                        
                        <div style="background:#F3F4F6; padding:20px; border-radius:8px; margin-bottom:25px;">
                            <h4 style="font-family:'EB Garamond', serif; margin-bottom:10px;">Bale Details</h4>
                            <p style="color:#6B7280; margin-bottom:5px;"><strong>Season:</strong> ${
                              bale.season
                            }</p>
                            <p style="color:#6B7280; margin-bottom:5px;"><strong>Type:</strong> ${
                              bale.type.charAt(0).toUpperCase() +
                              bale.type.slice(1)
                            }</p>
                            <p style="color:#6B7280;"><strong>Gender:</strong> ${
                              bale.gender.charAt(0).toUpperCase() +
                              bale.gender.slice(1)
                            }</p>
                        </div>
                        
                        <div style="display:flex; gap:15px;">
                            <a href="https://wa.me/254713883630?text=Hi! I want to order the ${encodeURIComponent(
                              bale.category
                            )}. Please provide pricing and availability." 
                               style="flex:1; background:#25D366; color:white; padding:15px; text-align:center; border-radius:12px; text-decoration:none; font-weight:600; display:flex; align-items:center; justify-content:center; gap:10px;" 
                               target="_blank">
                                <i class="fab fa-whatsapp"></i> Order on WhatsApp
                            </a>
                            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="flex:1; background:#F3F4F6; color:#222; padding:15px; border:none; border-radius:12px; font-weight:600; cursor:pointer;">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            `;

        const modal = document.createElement("div");
        modal.innerHTML = modalHTML;
        document.body.appendChild(modal);
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
       
      });