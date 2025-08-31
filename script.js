// Default configuration options
const defaultOptions = {
  numImages: 12,
  gap: '2rem',
  border: 'border-4 border-white/75',
  sizeVariation: true,
  // minRowHeight: '200px',
  source: null, // Path to JSON file for images
  gradientBorder: false, // Enable gradient borders based on image colors
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

class VoidGrid {
  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error(`Container element not found: ${selector}`);
    }

    this.options = { ...defaultOptions, ...options };
    this.images = this.options.images;
    this.currentImageIndex = 0;

    // Load color cache for better performance
    this.loadColorCache();

    // Find or create toggle button
    this.toggleButton = this.container.querySelector('.voidgrid-toggle') || this.container.parentElement.querySelector('.voidgrid-toggle');
    if (!this.toggleButton) {
      // Create a default toggle button if not found
      this.toggleButton = document.createElement('button');
      this.toggleButton.className = 'voidgrid-toggle bg-black/90 backdrop-blur-md border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl';
      this.toggleButton.textContent = 'View More Work';
      this.container.parentElement.appendChild(this.toggleButton);
    }

    if (this.options.source) {
      this.loadImagesFromSource().then(() => {
        this.init();
      });
    } else {
      this.init();
    }
  }

  async loadImagesFromSource() {
    try {
      const response = await fetch(this.options.source);
      if (!response.ok) {
        throw new Error(`Failed to load ${this.options.source}`);
      }
      const data = await response.json();
      this.images = data.map(item => item.image_url);
      this.options.lightbox.imageDescriptions = {};
      data.forEach(item => {
        this.options.lightbox.imageDescriptions[item.image_url] = item.title;
      });
    } catch (error) {
      console.error('Error loading images from source:', error);
      // Fallback to default images
      this.images = this.options.images;
    }
  }

  init() {
    // Generate initial voidgrid
    this.generateVoidGrid();

    // Set up event listeners
    this.toggleButton.addEventListener('click', () => this.generateVoidGrid());

    // Generate initial voidgrid if no toggle
    if (!this.toggleButton) {
      this.generateVoidGrid();
    }

    // Create lightbox if it doesn't exist
    this.createLightbox();
  }

  /**
   * Cache for storing extracted colors
   */
  colorCache = new Map();

  /**
   * Load cached colors from localStorage
   */
  loadColorCache() {
    try {
      const cached = localStorage.getItem('voidgrid-color-cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        // Convert back to Map
        Object.entries(parsed).forEach(([key, value]) => {
          this.colorCache.set(key, value);
        });
      }
    } catch (error) {
      console.warn('Failed to load color cache:', error);
    }
  }

  /**
   * Save cached colors to localStorage
   */
  saveColorCache() {
    try {
      const cacheObject = Object.fromEntries(this.colorCache);
      localStorage.setItem('voidgrid-color-cache', JSON.stringify(cacheObject));
    } catch (error) {
      console.warn('Failed to save color cache:', error);
    }
  }

  /**
   * Extracts dominant colors from an image using canvas with improved algorithm
   */
  extractImageColor(img) {
    return new Promise((resolve, reject) => {
      // Check cache first
      const cacheKey = img.src;
      if (this.colorCache.has(cacheKey)) {
        resolve(this.colorCache.get(cacheKey));
        return;
      }

      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Use smaller canvas for better performance
        const maxSize = 80;
        const scale = Math.min(maxSize / img.naturalWidth, maxSize / img.naturalHeight, 1);
        canvas.width = img.naturalWidth * scale;
        canvas.height = img.naturalHeight * scale;

        // Try to draw the image - this will fail for CORS-protected images
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        // Improved color extraction using color quantization
        const colorCounts = new Map();
        const step = 4 * Math.max(1, Math.floor(imageData.length / 10000)); // Sample up to ~10k pixels

        for (let i = 0; i < imageData.length; i += step) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];
          const alpha = imageData[i + 3];

          // Skip transparent pixels
          if (alpha < 128) continue;

          // Skip very dark/light pixels
          const brightness = (r + g + b) / 3;
          if (brightness < 20 || brightness > 235) continue;

          // Quantize colors to reduce variations
          const qr = Math.floor(r / 16) * 16;
          const qg = Math.floor(g / 16) * 16;
          const qb = Math.floor(b / 16) * 16;
          const key = `${qr},${qg},${qb}`;

          colorCounts.set(key, (colorCounts.get(key) || 0) + 1);
        }

        // Find the most dominant color
        let dominantColor = { r: 128, g: 128, b: 128 }; // Default gray
        let maxCount = 0;

        for (const [key, count] of colorCounts) {
          if (count > maxCount) {
            const [r, g, b] = key.split(',').map(Number);
            dominantColor = { r, g, b };
            maxCount = count;
          }
        }

        // Create more sophisticated gradient colors
        const { r, g, b } = dominantColor;

        // Generate a vibrant gradient based on the dominant color
        const hsl = this.rgbToHsl(r, g, b);
        const saturation = Math.max(0.4, hsl[1]); // Ensure good saturation
        const lightness = Math.max(0.3, Math.min(0.7, hsl[2])); // Avoid extremes

        // Create complementary colors for better gradient
        const hue1 = hsl[0];
        const hue2 = (hsl[0] + 60) % 360; // Analogous color
        const hue3 = (hsl[0] + 180) % 360; // Complementary color

        const brightColor = `hsl(${hue1}, ${saturation * 100}%, ${Math.min(85, lightness * 100 + 20)}%)`;
        const darkColor = `hsl(${hue2}, ${Math.max(30, saturation * 100 - 20)}%, ${Math.max(15, lightness * 100 - 30)}%)`;
        const accentColor = `hsl(${hue3}, ${saturation * 100}%, ${Math.max(25, lightness * 100 - 10)}%)`;

        const result = {
          bright: brightColor,
          dark: darkColor,
          accent: accentColor
        };

        // Cache the result
        this.colorCache.set(cacheKey, result);

        // Save to localStorage periodically
        if (this.colorCache.size % 5 === 0) { // Save every 5 new colors
          this.saveColorCache();
        }

        resolve(result);
      } catch (error) {
        // CORS error or other canvas drawing error
        reject(error);
      }
    });
  }

  /**
   * Convert RGB to HSL
   */
  rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h * 360, s, l];
  }

  /**
   * Generates the voidgrid items and adds them to the container.
   */
  generateVoidGrid() {
    this.container.innerHTML = ''; // Clear the container
    this.container.style.gap = this.options.gap;

    // Set the CSS variable for the minimum row height
    this.container.style.setProperty('--min-row-height', this.options.minRowHeight);

    const items = [];
    const layout = this.getBalancedLayout(this.images.length);
    // const colSpanClasses = ['w-2x', 'w-3x'];
    // const rowSpanClasses = ['h-2x', 'h-3x'];
    // const numLargeItems = Math.floor(this.images.length * 0.3);
    // const largeItemsIndices = [];
    // while (largeItemsIndices.length < numLargeItems) {
    //   const randomIndex = Math.floor(Math.random() * this.images.length);
    //   if (!largeItemsIndices.includes(randomIndex)) {
    //     largeItemsIndices.push(randomIndex);
    //   }
    // }

    for (let i = 0; i < this.images.length; i++) {
      const itemDiv = document.createElement('div');
      // Only apply default border if gradient borders are not enabled
      const borderClass = this.options.gradientBorder ? '' : this.options.border;
      itemDiv.className = `voidgrid-item rounded-lg overflow-hidden relative shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 ${borderClass}`;
      itemDiv.setAttribute('data-index', i);

      let classNameModifier = '';
      // let sizeScore = 1; // Default score for smaller items
      // if (this.options.sizeVariation && largeItemsIndices.includes(i)) {
      //   const randomColSpan = colSpanClasses[Math.floor(Math.random() * colSpanClasses.length)];
      //   const randomRowSpan = rowSpanClasses[Math.floor(Math.random() * rowSpanClasses.length)];
      //   classNameModifier = `${randomColSpan} ${randomRowSpan}`;
      //   sizeScore = (randomColSpan === 'w-3x' && randomRowSpan === 'h-3x') ? 3 : 2;
      // }

      switch (layout[i]) {
        case "2x2": classNameModifier = "w-2x h-2x"; break;
        case "2x3": classNameModifier = "w-2x h-3x"; break;
        case "3x2": classNameModifier = "w-3x h-2x"; break;
        case "3x3": classNameModifier = "w-3x h-3x"; break;
        default: classNameModifier = ""; // 1x1
      }

      if (classNameModifier) {
        itemDiv.classList.add(...classNameModifier.split(' '));
      }

      const imageUrl = this.images[i];

      // Create loading spinner
      const spinner = document.createElement('div');
      spinner.className = 'voidgrid-loading-spinner';

      // Create image element
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = `VoidGrid image ${i + 1}`;
      img.className = 'w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 voidgrid-image-loading';

      // Handle image load
      img.onload = async () => {
        // Hide spinner and show image
        spinner.style.display = 'none';
        img.classList.remove('voidgrid-image-loading');
        img.classList.add('voidgrid-image-loaded');

        // Apply gradient border if enabled
        if (this.options.gradientBorder) {
          try {
            const colors = await this.extractImageColor(img);
            img.style.border = '8px solid transparent';
            img.style.borderImage = `linear-gradient(135deg, ${colors.bright}, ${colors.accent}, ${colors.dark}) 1`;
          } catch (error) {
            // CORS error or other canvas issue - apply a default gradient instead
            console.warn('Failed to extract colors for gradient border (likely CORS issue):', error);
            // Apply a default attractive gradient as fallback
            img.style.border = '8px solid transparent';
            img.style.borderImage = `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) 1`;
          }
        }
      };

      // Handle load errors
      img.onerror = () => {
        console.warn('Image failed to load:', img.src);
        spinner.style.display = 'none';
        // Could add an error placeholder here
      };

      itemDiv.innerHTML = `
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
          <p class="text-lg font-bold">Project ${i + 1}</p>
        </div>
      `;

      // Append spinner and image to itemDiv
      itemDiv.appendChild(spinner);
      itemDiv.appendChild(img);

      itemDiv.addEventListener('click', () => this.showLightbox(i));
      items.push(itemDiv);
    }

    // Sort the items by size (largest first)
    items.sort((a, b) => b.sizeScore - a.sizeScore);

    // Add the sorted items to the container
    // items.forEach(item => this.container.appendChild(item.element));
    // Voeg in dezelfde volgorde toe, zodat je balanced layout behouden blijft
    items.forEach(el => this.container.appendChild(el));

    this.setupScrollSnap();
  }

  getBalancedLayout(numItems) {
    const layout = [];
    const patterns = ["1x1", "2x2", "2x3", "3x2", "3x3"];

    const targetCounts = {
      "3x3": Math.floor(numItems * 0.1),
      "2x3": Math.floor(numItems * 0.15),
      "3x2": Math.floor(numItems * 0.15),
      "2x2": Math.floor(numItems * 0.2),
      "1x1": numItems // rest vult alles op
    };

    for (let i = 0; i < numItems; i++) {
      // filter alleen geldige keuzes
      let validChoices = patterns.filter(p => targetCounts[p] > 0);

      // vermijd dubbels naast elkaar
      validChoices = validChoices.filter(p =>
        !(layout[i - 1] === p || layout[i - 4] === p)
      );

      // als er nu niks overblijft → fallback naar "1x1"
      let choice;
      if (validChoices.length > 0) {
        choice = validChoices[Math.floor(Math.random() * validChoices.length)];
      } else {
        choice = "1x1";
      }

      layout.push(choice);
      targetCounts[choice]--;
    }

    return layout;
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
    const items = gsap.utils.toArray(".voidgrid-item", this.container);
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
    if (!document.getElementById('void-lightbox')) {
      const lightboxHTML = `
        <div id="void-lightbox">
          <div class="void-lightbox-overlay"></div>
          <div class="void-lightbox-content">
            <span id="void-close-lightbox" class="void-close-button">&times;</span>
            <div class="void-lightbox-image-container rounded-lg">
              <img id="void-lightbox-image" src="" alt="VoidGrid Image" class="void-lightbox-image">
            </div>
            <p id="void-lightbox-description" class="mt-4 text-center text-lg max-w-2xl"></p>
            <div id="void-lightbox-prev" class="void-lightbox-arrow left">&#10094;</div>
            <div id="void-lightbox-next" class="void-lightbox-arrow right">&#10095;</div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    // Get lightbox elements
    this.lightbox = document.getElementById('void-lightbox');
    this.lightboxImage = document.getElementById('void-lightbox-image');
    this.lightboxDescription = document.getElementById('void-lightbox-description');
    this.lightboxPrev = document.getElementById('void-lightbox-prev');
    this.lightboxNext = document.getElementById('void-lightbox-next');
    this.closeLightboxBtn = document.getElementById('void-close-lightbox');
    this.lightboxOverlay = document.querySelector('.void-lightbox-overlay');

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

// Auto-initialize elements with data-voidgrid attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-voidgrid]').forEach(el => {
    const options = el.dataset.voidgridOptions ? JSON.parse(el.dataset.voidgridOptions) : {};
    new VoidGrid(`[data-voidgrid="${el.dataset.voidgrid}"]`, options);
  });
});