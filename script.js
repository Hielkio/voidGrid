// Default configuration options
const defaultOptions = {
  numImages: 14,
  gap: '2rem',
  border: 'border-2 border-blue-500',
  sizeVariation: true,
  minRowHeight: '200px',
  images: [
    "/wp/gsap/assets/images/portfolio/close-up.jpg",
    "/wp/gsap/assets/images/portfolio/dent-repair.avif",
    "/wp/gsap/assets/images/portfolio/dent-repair2.jpg",
    "/wp/gsap/assets/images/portfolio/dent-repair3.jpg",
    "/wp/gsap/assets/images/portfolio/dent-repair4.webp",
    "/wp/gsap/assets/images/portfolio/dent-repair5.jpg",
    "/wp/gsap/assets/images/portfolio/dent-repair6.jpg",
    "/wp/gsap/assets/images/portfolio/hamer.webp",
    "/wp/gsap/assets/images/portfolio/quattro.webp",
    "/wp/gsap/assets/images/portfolio/small-dents.jpg",
    "/wp/gsap/assets/images/portfolio/veel-deukjes.webp",
    "/wp/gsap/assets/images/portfolio/vertical.webp",
    "/wp/gsap/assets/images/portfolio/voor-na.webp",
    "/wp/gsap/assets/images/portfolio/voor-na2.webp"
  ],
  lightbox: {
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    imageDescriptions: {
      "/wp/gsap/assets/images/portfolio/close-up.jpg": "Close-up view of automotive detailing work.",
      "/wp/gsap/assets/images/portfolio/dent-repair.avif": "Professional dent repair service.",
      "/wp/gsap/assets/images/portfolio/dent-repair2.jpg": "Before and after dent repair.",
      "/wp/gsap/assets/images/portfolio/dent-repair3.jpg": "Automotive bodywork restoration.",
      "/wp/gsap/assets/images/portfolio/dent-repair4.webp": "Precision dent removal technique.",
      "/wp/gsap/assets/images/portfolio/dent-repair5.jpg": "Vehicle panel repair work.",
      "/wp/gsap/assets/images/portfolio/dent-repair6.jpg": "High-quality automotive repair.",
      "/wp/gsap/assets/images/portfolio/hamer.webp": "Specialized repair tools in action.",
      "/wp/gsap/assets/images/portfolio/quattro.webp": "Luxury vehicle maintenance.",
      "/wp/gsap/assets/images/portfolio/small-dents.jpg": "Minor dent repair service.",
      "/wp/gsap/assets/images/portfolio/veel-deukjes.webp": "Multiple dent repair project.",
      "/wp/gsap/assets/images/portfolio/vertical.webp": "Vertical panel repair work.",
      "/wp/gsap/assets/images/portfolio/voor-na.webp": "Before and after transformation.",
      "/wp/gsap/assets/images/portfolio/voor-na2.webp": "Complete vehicle restoration."
    }
  }
};

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

class PortfolioGrid {
  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error(`Container element not found: ${selector}`);
    }

    this.options = { ...defaultOptions, ...options };
    this.images = this.options.images;
    this.currentImageIndex = 0;

    // Find or create toggle button
    this.toggleButton = this.container.querySelector('.portfolio-toggle') || this.container.parentElement.querySelector('.portfolio-toggle');
    if (!this.toggleButton) {
      // Create a default toggle button if not found
      this.toggleButton = document.createElement('button');
      this.toggleButton.className = 'portfolio-toggle bg-black/90 backdrop-blur-md border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl';
      this.toggleButton.textContent = 'View More Work';
      this.container.parentElement.appendChild(this.toggleButton);
    }

    this.init();
  }

  init() {
    // Set up event listeners
    this.toggleButton.addEventListener('click', () => this.generatePortfolio());

    // Generate initial portfolio if no toggle
    if (!this.toggleButton) {
      this.generatePortfolio();
    }

    // Create lightbox if it doesn't exist
    this.createLightbox();
  }

  /**
   * Generates the portfolio items and adds them to the container.
   */
  generatePortfolio() {
    this.container.innerHTML = ''; // Clear the container
    this.container.style.gap = this.options.gap;

    // Set the CSS variable for the minimum row height
    this.container.style.setProperty('--min-row-height', this.options.minRowHeight);

    const items = [];
    const colSpanClasses = ['w-2x', 'w-3x'];
    const rowSpanClasses = ['h-2x', 'h-3x'];
    const numLargeItems = Math.floor(this.images.length * 0.3);
    const largeItemsIndices = [];
    while (largeItemsIndices.length < numLargeItems) {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      if (!largeItemsIndices.includes(randomIndex)) {
        largeItemsIndices.push(randomIndex);
      }
    }

    for (let i = 0; i < this.images.length; i++) {
      const itemDiv = document.createElement('div');
      itemDiv.className = `portfolio-item rounded-lg overflow-hidden relative shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 ${this.options.border}`;
      itemDiv.setAttribute('data-index', i);

      let classNameModifier = '';
      let sizeScore = 1; // Default score for smaller items
      if (this.options.sizeVariation && largeItemsIndices.includes(i)) {
        const randomColSpan = colSpanClasses[Math.floor(Math.random() * colSpanClasses.length)];
        const randomRowSpan = rowSpanClasses[Math.floor(Math.random() * rowSpanClasses.length)];
        classNameModifier = `${randomColSpan} ${randomRowSpan}`;
        sizeScore = (randomColSpan === 'w-3x' && randomRowSpan === 'h-3x') ? 3 : 2;
      }

      if (classNameModifier) {
        itemDiv.classList.add(...classNameModifier.split(' '));
      }

      const imageUrl = this.images[i];

      itemDiv.innerHTML = `
        <img src="${imageUrl}" alt="Portfolio image ${i + 1}" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110">
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
          <p class="text-lg font-bold">Project ${i + 1}</p>
        </div>
      `;
      itemDiv.addEventListener('click', () => this.showLightbox(i));
      items.push({ element: itemDiv, sizeScore: sizeScore });
    }

    // Sort the items by size (largest first)
    items.sort((a, b) => b.sizeScore - a.sizeScore);

    // Add the sorted items to the container
    items.forEach(item => this.container.appendChild(item.element));

    this.setupScrollSnap();
  }

  /**
   * Sets up the ScrollTrigger for "snapping" to the images.
   */
  setupScrollSnap() {
    // Destroy an existing ScrollTrigger to prevent conflicts
    if (this.container.scrollTrigger) {
      this.container.scrollTrigger.kill();
    }

    // Create an array of the top positions of each image for snapping
    let snapPoints = [];
    const items = gsap.utils.toArray(".portfolio-item", this.container);
    items.forEach(item => {
      snapPoints.push(item.offsetTop);
    });

    // Filter duplicates from the snap positions, as multiple items can be at the same Y position
    snapPoints = [...new Set(snapPoints)];

    ScrollTrigger.create({
      trigger: this.container,
      start: "top top", // The trigger starts at the top of the container
      end: "bottom top", // The trigger ends at the bottom of the container
      scrub: true,
      snap: {
        snapTo: snapPoints,
        duration: { min: 0.2, max: 0.6 },
        ease: "power1.inOut"
      },
      markers: false // For debugging, set to true
    });
  }

  createLightbox() {
    // Create lightbox elements if they don't exist
    if (!document.getElementById('lightbox')) {
      const lightboxHTML = `
        <div id="lightbox">
          <div class="lightbox-overlay"></div>
          <div class="lightbox-content">
            <span id="closeLightbox" class="close-button">&times;</span>
            <div class="lightbox-image-container rounded-lg">
              <img id="lightboxImage" src="" alt="Lightbox Image" class="lightbox-image">
            </div>
            <p id="lightboxDescription" class="mt-4 text-center text-lg max-w-2xl"></p>
            <div id="lightboxPrev" class="lightbox-arrow left">&#10094;</div>
            <div id="lightboxNext" class="lightbox-arrow right">&#10095;</div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    // Get lightbox elements
    this.lightbox = document.getElementById('lightbox');
    this.lightboxImage = document.getElementById('lightboxImage');
    this.lightboxDescription = document.getElementById('lightboxDescription');
    this.lightboxPrev = document.getElementById('lightboxPrev');
    this.lightboxNext = document.getElementById('lightboxNext');
    this.closeLightboxBtn = document.getElementById('closeLightbox');
    this.lightboxOverlay = document.querySelector('.lightbox-overlay');

    // Set up event listeners
    this.closeLightboxBtn.addEventListener('click', () => this.hideLightbox());
    this.lightboxOverlay.addEventListener('click', () => this.hideLightbox());
    this.lightboxNext.addEventListener('click', () => this.goToNextImage());
    this.lightboxPrev.addEventListener('click', () => this.goToPrevImage());

    // Swipe logic
    let touchstartX = 0;
    let touchendX = 0;

    const handleGesture = () => {
      if (touchendX < touchstartX - 50) {
        this.goToNextImage();
      }
      if (touchendX > touchstartX + 50) {
        this.goToPrevImage();
      }
    };

    this.lightboxImage.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    });

    this.lightboxImage.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    });
  }

  // === Lightbox logic ===
  showLightbox(index) {
    this.currentImageIndex = index;
    this.updateLightboxContent();
    this.lightbox.style.display = 'flex';
    gsap.fromTo(this.lightbox, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3 });
  }

  hideLightbox() {
    gsap.to(this.lightbox, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => {
      this.lightbox.style.display = 'none';
    } });
  }

  updateLightboxContent() {
    this.lightboxImage.src = this.images[this.currentImageIndex];
    const description = this.options.lightbox.imageDescriptions[this.images[this.currentImageIndex]] || 'No description available.';
    this.lightboxDescription.textContent = description;
  }

  goToNextImage() {
    const nextIndex = (this.currentImageIndex + 1) % this.images.length;
    this.transitionImage(nextIndex, 1);
  }

  goToPrevImage() {
    const prevIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.transitionImage(prevIndex, -1);
  }

  transitionImage(newIndex, direction) {
    gsap.to(this.lightboxImage, {
      x: -direction * 100,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        this.currentImageIndex = newIndex;
        this.updateLightboxContent();
        gsap.fromTo(this.lightboxImage, {
          x: direction * 100,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.3
        });
      }
    });
  }
}

// Theme switching functionality
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    this.applyTheme();
    this.setupToggle();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateIcons();
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  updateIcons() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    if (this.theme === 'dark') {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

  setupToggle() {
    const toggleButton = document.getElementById('themeToggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Auto-initialize elements with data-portfolio attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-portfolio]').forEach(el => {
    const options = el.dataset.portfolioOptions ? JSON.parse(el.dataset.portfolioOptions) : {};
    new PortfolioGrid(`[data-portfolio="${el.dataset.portfolio}"]`, options);
  });
});