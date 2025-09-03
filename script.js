// Default configuration options
const defaultOptions = {
  numImages: 12,
  gap: '2rem',
  border: 'border-4 border-white/75',
  sizeVariation: true,
  // minRowHeight: '200px',
  sources: [], // Array of paths to JSON files for images/videos
  parallax: {
    enabled: false,
    speed: 0.5
  },
  padding: '2rem', // Padding between edge and images
  rounded: {
    enabled: true,
    radius: '0.5rem'
  },
  background: {
    type: 'none', // 'none', 'fixed', 'random'
    image: null,
    overlay: {
      enabled: false,
      color: 'rgba(0, 0, 0, 0.5)'
    }
  },
  hover: {
    overlay: 'rgba(0, 0, 0, 0.7)', // Hover overlay color (false to disable)
    descriptionPosition: 'center', // 'center', 'top', or 'bottom'
    showDescription: false, // Show description permanently in grid
    zoomSpeed: 2, // Zoom speed in seconds (slower = more dramatic)
  },
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

    // Find or create toggle button
    this.toggleButton = this.container.querySelector('.voidgrid-toggle') || this.container.parentElement.querySelector('.voidgrid-toggle');
    if (!this.toggleButton) {
      // Create a default toggle button if not found
      this.toggleButton = document.createElement('button');
      this.toggleButton.className = 'voidgrid-toggle bg-black/90 backdrop-blur-md border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl';
      this.toggleButton.textContent = 'View More Work';
      this.container.parentElement.appendChild(this.toggleButton);
    }

    if (this.options.sources && this.options.sources.length > 0) {
      this.loadImagesFromSources().then(() => {
        this.init();
      });
    } else {
      this.init();
    }
  }

  async loadImagesFromSources() {
    this.mediaItems = []; // Array to hold both images and videos
    this.options.lightbox.mediaDescriptions = {};

    for (const source of this.options.sources) {
      try {
        const response = await fetch(source);
        if (!response.ok) {
          throw new Error(`Failed to load ${source}`);
        }
        const data = await response.json();

        // Process each item in the JSON
        data.forEach(item => {
          if (item.image_url) {
            // It's an image
            this.mediaItems.push({
              type: 'image',
              url: item.image_url,
              title: item.title || 'Image'
            });
            this.options.lightbox.mediaDescriptions[item.image_url] = item.title || 'Image';
          } else if (item.video_url) {
            // It's a video
            this.mediaItems.push({
              type: 'video',
              url: item.video_url,
              title: item.title || 'Video'
            });
            this.options.lightbox.mediaDescriptions[item.video_url] = item.title || 'Video';
          }
        });
      } catch (error) {
        console.error('Error loading from source:', source, error);
      }
    }

    // Fallback to default images if no media loaded
    if (this.mediaItems.length === 0) {
      this.mediaItems = this.options.images.map(url => ({
        type: 'image',
        url: url,
        title: 'Default Image'
      }));
    }

    // For backward compatibility, also populate this.images
    this.images = this.mediaItems.map(item => item.url);
  }

  init() {
    // Apply background settings
    this.applyBackground();

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

    // Setup parallax if enabled
    if (this.options.parallax.enabled) {
      this.setupParallax();
    }

    // Setup settings panel
    this.setupSettingsPanel();
  }


  /**
   * Generates the voidgrid items and adds them to the container.
   */
  generateVoidGrid() {
    this.container.innerHTML = ''; // Clear the container
    this.container.style.gap = this.options.gap;
    this.container.style.padding = this.options.padding;

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

    for (let i = 0; i < this.mediaItems.length; i++) {
      const itemDiv = document.createElement('div');
      itemDiv.className = `voidgrid-item overflow-hidden relative shadow-lg group cursor-pointer ${this.options.border}`;
      if (this.options.rounded.enabled) {
        itemDiv.style.borderRadius = this.options.rounded.radius;
      }
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

      const mediaItem = this.mediaItems[i];

      // Create loading spinner
      const spinner = document.createElement('div');
      spinner.className = 'voidgrid-loading-spinner';

      let mediaElement;

      if (mediaItem.type === 'video') {
        // Create video element
        mediaElement = document.createElement('video');
        mediaElement.src = mediaItem.url;
        mediaElement.alt = `VoidGrid video ${i + 1}`;
        mediaElement.muted = true; // Required for autoplay
        mediaElement.autoplay = true;
        mediaElement.loop = true;
        mediaElement.playsInline = true; // For mobile

        // Apply hover zoom speed
        const zoomDuration = this.options.hover.zoomSpeed || 2;
        mediaElement.className = `w-full h-full object-cover transition-transform duration-${Math.round(zoomDuration * 1000)} group-hover:scale-110 voidgrid-video-loading`;

        // Handle video load
        mediaElement.onloadeddata = () => {
          spinner.style.display = 'none';
          mediaElement.classList.remove('voidgrid-video-loading');
          mediaElement.classList.add('voidgrid-video-loaded');
        };

        // Handle load errors
        mediaElement.onerror = () => {
          console.warn('Video failed to load:', mediaElement.src);
          spinner.style.display = 'none';
          // Could add an error placeholder here
        };
      } else {
        // Create image element
        mediaElement = document.createElement('img');
        mediaElement.src = mediaItem.url;
        mediaElement.alt = `VoidGrid image ${i + 1}`;

        // Apply hover zoom speed
        const zoomDuration = this.options.hover.zoomSpeed || 2;
        mediaElement.className = `w-full h-full object-cover transition-transform duration-${Math.round(zoomDuration * 1000)} group-hover:scale-110 voidgrid-image-loading`;

        // Handle image load
        mediaElement.onload = () => {
          spinner.style.display = 'none';
          mediaElement.classList.remove('voidgrid-image-loading');
          mediaElement.classList.add('voidgrid-image-loaded');
        };

        // Handle load errors
        mediaElement.onerror = () => {
          console.warn('Image failed to load:', mediaElement.src);
          spinner.style.display = 'none';
          // Could add an error placeholder here
        };
      }

      // Create hover overlay
      const overlay = document.createElement('div');
      overlay.className = 'voidgrid-hover-overlay absolute inset-0 transition-opacity duration-300 flex p-4 text-center';

      // Set overlay background color if enabled
      if (this.options.hover.overlay) {
        overlay.style.backgroundColor = this.options.hover.overlay;
      }

      // Set overlay position based on description position
      if (this.options.hover.descriptionPosition === 'top') {
        overlay.classList.add('items-start', 'justify-center', 'pt-8');
      } else if (this.options.hover.descriptionPosition === 'bottom') {
        overlay.classList.add('items-end', 'justify-center', 'pb-8');
      } else {
        overlay.classList.add('items-center', 'justify-center');
      }

      // Set initial opacity based on showDescription setting
      if (this.options.hover.showDescription) {
        overlay.classList.add('opacity-100');
      } else {
        overlay.classList.add('opacity-0', 'group-hover:opacity-100');
      }

      // Add description text
      const description = document.createElement('p');
      description.className = 'text-lg font-bold text-white';
      description.textContent = mediaItem.title || `Project ${i + 1}`;
      overlay.appendChild(description);

      itemDiv.appendChild(overlay);

      // Append spinner and media to itemDiv
      itemDiv.appendChild(spinner);
      itemDiv.appendChild(mediaElement);

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

  /**
   * Sets up parallax scrolling effect.
   */
  setupParallax() {
    const items = gsap.utils.toArray(".voidgrid-item", this.container);
    items.forEach((item, index) => {
      gsap.to(item, {
        yPercent: -50 * this.options.parallax.speed,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }

  /**
   * Applies background settings.
   */
  applyBackground() {
    const section = this.container.closest('.page-section');
    if (!section) return;

    // Remove existing background elements
    const existingBg = section.querySelector('.voidgrid-background');
    if (existingBg) existingBg.remove();

    if (this.options.background.type === 'none') return;

    // Create background container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'voidgrid-background absolute inset-0 z-0';

    let bgImage = this.options.background.image;
    if (this.options.background.type === 'random') {
      bgImage = this.images[Math.floor(Math.random() * this.images.length)];
    }

    if (bgImage) {
      bgContainer.style.backgroundImage = `url(${bgImage})`;
      bgContainer.style.backgroundSize = 'cover';
      bgContainer.style.backgroundPosition = 'center';
      bgContainer.style.backgroundAttachment = 'fixed';
    }

    // Add overlay if enabled
    if (this.options.background.overlay.enabled) {
      const overlay = document.createElement('div');
      overlay.className = 'voidgrid-background-overlay absolute inset-0';
      overlay.style.backgroundColor = this.options.background.overlay.color;
      bgContainer.appendChild(overlay);
    }

    section.appendChild(bgContainer);
  }

  /**
   * Sets up the settings panel.
   */
  setupSettingsPanel() {
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const applySettings = document.getElementById('applySettings');

    if (!settingsToggle || !settingsPanel) return;

    // Toggle panel visibility
    settingsToggle.addEventListener('click', () => {
      settingsPanel.classList.toggle('hidden');
    });

    // Apply settings
    applySettings.addEventListener('click', () => {
      this.applySettingsFromPanel();
      settingsPanel.classList.add('hidden');
    });

    // Update displays
    this.updateSettingsDisplays();

    // Set initial panel values
    this.setPanelValues();
  }

  /**
   * Updates the settings panel displays.
   */
  updateSettingsDisplays() {
    const paddingValue = document.getElementById('paddingValue');
    const paddingDisplay = document.getElementById('paddingDisplay');
    const roundedRadius = document.getElementById('roundedRadius');
    const roundedDisplay = document.getElementById('roundedDisplay');

    if (paddingValue && paddingDisplay) {
      paddingValue.addEventListener('input', () => {
        paddingDisplay.textContent = paddingValue.value + 'rem';
      });
    }

    if (roundedRadius && roundedDisplay) {
      roundedRadius.addEventListener('input', () => {
        roundedDisplay.textContent = roundedRadius.value + 'rem';
      });
    }
  }

  /**
   * Applies settings from the panel to the options.
   */
  applySettingsFromPanel() {
    // Parallax
    this.options.parallax.enabled = document.getElementById('parallaxEnabled').checked;
    this.options.parallax.speed = parseFloat(document.getElementById('parallaxSpeed').value);

    // Padding
    this.options.padding = document.getElementById('paddingValue').value + 'rem';

    // Rounded
    this.options.rounded.enabled = document.getElementById('roundedEnabled').checked;
    this.options.rounded.radius = document.getElementById('roundedRadius').value + 'rem';

    // Background
    this.options.background.type = document.getElementById('backgroundType').value;

    // Overlay
    this.options.background.overlay.enabled = document.getElementById('overlayEnabled').checked;
    const color = document.getElementById('overlayColor').value;
    const opacity = document.getElementById('overlayOpacity').value;
    const rgb = this.hexToRgb(color);
    this.options.background.overlay.color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

    // Reinitialize
    this.applyBackground();
    this.generateVoidGrid();
    if (this.options.parallax.enabled) {
      this.setupParallax();
    }
  }

  /**
   * Converts hex color to RGB object.
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }

  /**
   * Sets the panel values based on current options.
   */
  setPanelValues() {
    // Parallax
    document.getElementById('parallaxEnabled').checked = this.options.parallax.enabled;
    document.getElementById('parallaxSpeed').value = this.options.parallax.speed;

    // Padding
    const paddingVal = parseFloat(this.options.padding);
    document.getElementById('paddingValue').value = paddingVal;
    document.getElementById('paddingDisplay').textContent = paddingVal + 'rem';

    // Rounded
    document.getElementById('roundedEnabled').checked = this.options.rounded.enabled;
    const roundedVal = parseFloat(this.options.rounded.radius);
    document.getElementById('roundedRadius').value = roundedVal;
    document.getElementById('roundedDisplay').textContent = roundedVal + 'rem';

    // Background
    document.getElementById('backgroundType').value = this.options.background.type;

    // Overlay
    document.getElementById('overlayEnabled').checked = this.options.background.overlay.enabled;
    // For color and opacity, we might need to parse the rgba, but for simplicity, keep defaults
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
    this.lightboxImageContainer = document.querySelector('.void-lightbox-image-container');
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
    const currentMedia = this.mediaItems[this.currentImageIndex];

    // Clear previous content
    this.lightboxImageContainer.innerHTML = '';

    if (currentMedia.type === 'video') {
      // Create video element for lightbox
      const video = document.createElement('video');
      video.src = currentMedia.url;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      video.muted = false; // Allow sound in lightbox
      video.className = 'void-lightbox-video';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'contain';

      this.lightboxImageContainer.appendChild(video);
    } else {
      // Create image element for lightbox
      const img = document.createElement('img');
      img.src = currentMedia.url;
      img.alt = currentMedia.title || 'VoidGrid Image';
      img.className = 'void-lightbox-image';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';

      this.lightboxImageContainer.appendChild(img);
    }

    const description = this.options.lightbox.mediaDescriptions[currentMedia.url] || 'No description available.';
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