# voidGrid

A responsive masonry-style grid portfolio layout with lightbox functionality, built using HTML, CSS (Tailwind), and JavaScript with GSAP animations.

## Features

- Masonry grid layout using CSS Grid with random size variations
- Interactive lightbox for viewing images with navigation arrows and swipe support
- GSAP ScrollTrigger for smooth scrolling and snapping to grid items
- Responsive design with dark theme
- Hover effects and transitions

## How to Use

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Click the "Bekijk Meer Werk" button to generate the portfolio grid.
4. Click on any portfolio item to open the lightbox and view the image.

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
- `lightbox`: Settings for the lightbox overlay and descriptions

## Images

The portfolio currently uses a predefined array of external image URLs. To use your own images:

1. Replace the `images` array in the JavaScript with your image URLs.
2. Update the `CONFIG.lightbox.imageDescriptions` object with descriptions for each image.

## Browser Support

Works in modern browsers that support CSS Grid and ES6 JavaScript.

## License

This project is open source. Feel free to use and modify as needed.