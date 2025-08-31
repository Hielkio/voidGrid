# voidGrid

A responsive masonry-style grid voidgrid layout with lightbox functionality, built using HTML, CSS (Tailwind), and JavaScript with GSAP animations.

## 🚀 Development Status

**This project is currently in active development and gets regular updates!**
We're constantly tweaking, improving, and adding new features. Expect some bugs as we're still in the testing phase - think of it as a wild ride through the void! 🌌
If you find any issues or have suggestions, feel free to open an issue or contribute!

## Features

- Masonry grid layout using CSS Grid with random size variations
- Interactive lightbox for viewing images with navigation arrows and swipe support
- GSAP ScrollTrigger for smooth scrolling and snapping to grid items
- Responsive design with dark theme
- Hover effects and transitions

## How to Use

### Basic Usage

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Click the "View More Work" button to generate the voidgrid.
4. Click on any voidgrid item to open the lightbox and view the image.

### Programmatic Usage

You can initialize the voidgrid programmatically using the `VoidGrid` class:

```javascript
// Basic initialization
new VoidGrid("#myvoidgrid");

// With custom options
new VoidGrid("#myvoidgrid", {
  numImages: 15,
  gap: "1.5rem",
  border: "border border-gray-300",
  sizeVariation: false,
  source: "sources/nature.json", // Load images from JSON file
  gradientBorder: true, // Enable gradient borders based on image colors
  lightbox: true
});
```

### Data Attribute Initialization

You can also use data attributes for automatic initialization:

```html
<div data-voidgrid="myvoidgrid" data-voidgrid-options='{"numImages": 10}'></div>
```

The script will automatically initialize all elements with the `data-voidgrid` attribute.

## Dependencies

- [GSAP](https://greensock.com/gsap/) (loaded via CDN)
- [Tailwind CSS](https://tailwindcss.com/) (loaded via CDN)
- [Inter Font](https://fonts.google.com/specimen/Inter) (Google Fonts)

## Configuration

The grid behavior can be customized via the `CONFIG` object in the JavaScript section of `index.html`:

- `numImages`: Number of images to display (default: 25)
- `gap`: Spacing between grid items (default: '2rem')
- `sizeVariation`: Enable/disable random size variations for items (default: true)
- `minRowHeight`: Minimum height for grid rows (default: '200px')
- `gradientBorder`: Enable gradient borders based on image colors (default: false)
- `lightbox`: Settings for the lightbox overlay and descriptions

## Images

The voidgrid supports loading images from JSON files or using a predefined array of external image URLs.

### Using JSON Sources

You can load images from JSON files in the `sources/` directory:

```javascript
new VoidGrid("#myvoidgrid", {
  source: "sources/nature.json", // Loads nature images
  gradientBorder: true // Optional: Enable gradient borders
});

// Available sources:
// - sources/nature.json
// - sources/concerts.json
// - sources/funny-dogs.json
// - sources/sports-cars.json
// - sources/tropical.json
```

The JSON files should contain an array of objects with `image_url` and `title` properties.

### Gradient Borders

When `gradientBorder: true` is enabled, each image will automatically get a gradient border that matches the dominant colors in the image. The system extracts colors from the image using canvas analysis and creates high-contrast gradients for visual appeal.

**Important**: When gradient borders are enabled, the default border styling is automatically disabled to prevent visual conflicts. Only the gradient border will be visible.

**Note**: Due to CORS (Cross-Origin Resource Sharing) restrictions, gradient borders work best with images from the same domain. For external images, a default attractive gradient will be applied as a fallback.

### Using Custom Images

To use your own images:

1. Replace the `images` array in the JavaScript with your image URLs.
2. Update the `CONFIG.lightbox.imageDescriptions` object with descriptions for each image.

## Browser Support

Works in modern browsers that support CSS Grid and ES6 JavaScript.

## License

This project is open source. Feel free to use and modify as needed.