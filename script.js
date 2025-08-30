// Default configuration options
const defaultOptions = {
  numImages: 25,
  gap: '2rem',
  border: 'border-2 border-blue-500',
  sizeVariation: true,
  minRowHeight: '200px',
  images: [
    "https://images.alphacoders.com/605/thumb-1920-605592.png",
    "https://images.alphacoders.com/131/thumb-1920-1311951.jpg",
    "https://images6.alphacoders.com/134/thumb-1920-1345576.jpeg",
    "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645907.jpg?t=st=1726886402~exp=1726890002~hmac=e43e19cffc3630f1cdd03dcb4533a23b21344ac660d1ac762568d1161d4bae7a&w=740",
    "https://images7.alphacoders.com/611/thumb-1920-611138.png",
    "https://images3.alphacoders.com/132/thumb-1920-1328396.png",
    "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645928.jpg?t=st=1726886405~exp=1726890005~hmac=95b03ab38c4d3bb7c5e9fa8bdbfad8243aa5f83854bb749ae511412a5e63cb32&w=740",
    "https://images7.alphacoders.com/303/thumb-1920-303042.png",
    "https://img.freepik.com/free-photo/anime-night-sky-illustration_23-2151684331.jpg?t=st=1726886396~exp=1726889996~hmac=ebc1240842fe109bbb9f9fd955f99cdc781f6b66390ec563ec816b2caa985234&w=740",
    "https://images.alphacoders.com/736/thumb-1920-736461.png",
    "https://images6.alphacoders.com/629/thumb-1920-629544.jpg",
    "https://images.alphacoders.com/134/thumb-1920-1343747.png",
    "https://img.freepik.com/premium-photo/warm-bokeh-architecture-outdoors-scenery_53876-227196.jpg?w=740",
    "https://images4.alphacoders.com/474/thumb-1920-47438.png",
    "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645906.jpg?t=st=1726886398~exp=1726889998~hmac=e6455fa0ea50a285ff0863953315946eea95bd58dc48eb6e6e6cb1c7a7b4fae0&w=740",
    "https://images2.alphacoders.com/606/thumb-1920-606275.jpg",
    "https://images4.alphacoders.com/973/thumb-1920-973967.jpg",
    "https://img.freepik.com/premium-photo/person-is-outdoors-looking-sky_777271-21290.jpg?w=740",
    "https://images3.alphacoders.com/144/thumb-1920-144565.jpg",
    "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645915.jpg?t=st=1726886396~exp=1726889996~hmac=d651aef964bcb6fdf0ac9332add43ba548b0f4a3542d03c6ae9a0c6895d3d578&w=740",
    "https://images.alphacoders.com/134/thumb-1920-1343746.png",
    "https://images.alphacoders.com/134/thumb-1920-1345040.png",
    "https://img.freepik.com/free-photo/halloween-scene-illustration-anime-style_23-2151794334.jpg?t=st=1726886398~exp=1726889998~hmac=234af4f2da54121aae68a2d2bd4033bfe7dfd97868e2e501ac70df29425b9f2b&w=740",
    "https://images3.alphacoders.com/135/thumb-1920-1353834.jpeg",
    "https://images5.alphacoders.com/134/thumb-1920-1343507.jpeg",
    "https://img.freepik.com/premium-photo/samurai-cartoon-toy-representation_53876-256120.jpg?w=740",
    "https://images.alphacoders.com/134/thumb-1920-1348051.png",
    "https://img.freepik.com/free-photo/beautiful-clouds-digital-art_23-2151105777.jpg?t=st=1726886379~exp=1726889979~hmac=39ba6e00ebfb4e14c02812858e09e0c27c10734b31735482a4e69b8c0d17b533&w=740"
  ],
  lightbox: {
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    imageDescriptions: {
      "https://images.alphacoders.com/605/thumb-1920-605592.png": "A majestic landscape with mountains and clouds.",
      "https://images.alphacoders.com/131/thumb-1920-1311951.jpg": "A starry night sky over a serene village.",
      "https://images6.alphacoders.com/134/thumb-1920-1345576.jpeg": "A tranquil forest with a ray of sunlight.",
      "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645907.jpg?t=st=1726886402~exp=1726890002~hmac=e43e19cffc3630f1cdd03dcb4533a23b21344ac660d1ac762568d1161d4bae7a&w=740": "An animated landscape with a prominent moon.",
      "https://images7.alphacoders.com/611/thumb-1920-611138.png": "A cool, urban night scene with neon lights.",
      "https://images3.alphacoders.com/132/thumb-1920-1328396.png": "A digital painting of a cloudy sky.",
      "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645928.jpg?t=st=1726886405~exp=1726890005~hmac=95b03ab38c4d3bb7c5e9fa8bdbfad8243aa5f83854bb749ae511412a5e63cb32&w=740": "Another animated moonlit landscape.",
      "https://images7.alphacoders.com/303/thumb-1920-303042.png": "A classic samurai warrior in a dynamic pose.",
      "https://img.freepik.com/free-photo/anime-night-sky-illustration_23-2151684331.jpg?t=st=1726886396~exp=1726889996~hmac=ebc1240842fe109bbb9f9fd955f99cdc781f6b66390ec563ec816b2caa985234&w=740": "An anime-style night sky illustration.",
      "https://images.alphacoders.com/736/thumb-1920-736461.png": "A detailed illustration of a futuristic building.",
      "https://images6.alphacoders.com/629/thumb-1920-629544.jpg": "A scenic view of a mountain with fog.",
      "https://images.alphacoders.com/134/thumb-1920-1343747.png": "A cyberpunk city at night with flying cars.",
      "https://img.freepik.com/premium-photo/warm-bokeh-architecture-outdoors-scenery_53876-227196.jpg?w=740": "Bokeh effect on an outdoor architectural shot.",
      "https://images4.alphacoders.com/474/thumb-1920-47438.png": "A fantasy landscape with floating islands.",
      "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645906.jpg?t=st=1726886398~exp=1726889998~hmac=e6455fa0ea50a285ff0863953315946eea95bd58dc48eb6e6e6cb1c7a7b4fae0&w=740": "An anime scene with a gentle moon.",
      "https://images2.alphacoders.com/606/thumb-1920-606275.jpg": "An atmospheric scene of a train at a station.",
      "https://images4.alphacoders.com/973/thumb-1920-973967.jpg": "A digital illustration of a serene natural landscape.",
      "https://img.freepik.com/premium-photo/person-is-outdoors-looking-sky_777271-21290.jpg?w=740": "A person looking at a scenic sky.",
      "https://images3.alphacoders.com/144/thumb-1920-144565.jpg": "A striking close-up of a tiger.",
      "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645915.jpg?t=st=1726886396~exp=1726889996~hmac=d651aef964bcb6fdf0ac9332add43ba548b0f4a3542d03c6ae9a0c6895d3d578&w=740": "A stylized landscape with a large moon.",
      "https://images.alphacoders.com/134/thumb-1920-1343746.png": "A bustling street in a futuristic city.",
      "https://images.alphacoders.com/134/thumb-1920-1345040.png": "A beautiful sci-fi city with a flying vehicle.",
      "https://img.freepik.com/free-photo/halloween-scene-illustration-anime-style_23-2151794334.jpg?t=st=1726886398~exp=1726889998~hmac=234af4f2da54121aae68a2d2bd4033bfe7dfd97868e2e501ac70df29425b9f2b&w=740": "An animated Halloween illustration.",
      "https://images3.alphacoders.com/135/thumb-1920-1353834.jpeg": "A detailed illustration of a fantasy scene with a moon.",
      "https://images5.alphacoders.com/134/thumb-1920-1343507.jpeg": "An animated landscape with colorful clouds.",
      "https://img.freepik.com/premium-photo/samurai-cartoon-toy-representation_53876-256120.jpg?w=740": "A stylized samurai character.",
      "https://images.alphacoders.com/134/thumb-1920-1348051.png": "A stunning space scene with a planet and stars.",
      "https://img.freepik.com/free-photo/beautiful-clouds-digital-art_23-2151105777.jpg?t=st=1726886379~exp=1726889979~hmac=39ba6e00ebfb4e14c02812858e09e0c27c10734b31735482a4e69b8c0d17b533&w=740": "Digital art of beautiful clouds."
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

// Auto-initialize elements with data-portfolio attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-portfolio]').forEach(el => {
    const options = el.dataset.portfolioOptions ? JSON.parse(el.dataset.portfolioOptions) : {};
    new PortfolioGrid(`[data-portfolio="${el.dataset.portfolio}"]`, options);
  });
});