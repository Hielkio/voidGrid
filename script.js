// Registreer de GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// === Configuratie opties ===
const CONFIG = {
    numImages: 25, // Aantal afbeeldingen om te tonen
    gap: '2rem', // Ruimte tussen de afbeeldingen
    border: 'border-2 border-blue-500', // Rand/border rond de afbeeldingen
    sizeVariation: true, // Variabele grootte inschakelen
    minRowHeight: '200px', // De minimale hoogte van een rij in de grid
    lightbox: {
        overlayColor: 'rgba(0, 0, 0, 0.9)', // Kleur van de overlay
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

// === Lijst van de te gebruiken afbeeldingen ===
const images = [
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
];

const portfolioContainer = document.getElementById('portfolioContainer');
const toggleButton = document.getElementById('togglePortfolio');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const closeLightboxBtn = document.getElementById('closeLightbox');
const lightboxOverlay = document.querySelector('.lightbox-overlay');

let currentImageIndex = 0;

/**
 * Genereert de portfolio items en voegt deze toe aan de container.
 */
function generatePortfolio() {
    portfolioContainer.innerHTML = ''; // Maak de container leeg
    portfolioContainer.style.gap = CONFIG.gap;

    // Stel de CSS-variabele in voor de minimale rijhoogte
    portfolioContainer.style.setProperty('--min-row-height', CONFIG.minRowHeight);

    const items = [];
    const colSpanClasses = ['w-2x', 'w-3x'];
    const rowSpanClasses = ['h-2x', 'h-3x'];
    const numLargeItems = Math.floor(images.length * 0.3);
    const largeItemsIndices = [];
    while(largeItemsIndices.length < numLargeItems) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!largeItemsIndices.includes(randomIndex)) {
            largeItemsIndices.push(randomIndex);
        }
    }

    for (let i = 0; i < images.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.className = `portfolio-item rounded-lg overflow-hidden relative shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 ${CONFIG.border}`;
        itemDiv.setAttribute('data-index', i);

        let classNameModifier = '';
        let sizeScore = 1; // Standaard score voor kleinere items
        if (CONFIG.sizeVariation && largeItemsIndices.includes(i)) {
            const randomColSpan = colSpanClasses[Math.floor(Math.random() * colSpanClasses.length)];
            const randomRowSpan = rowSpanClasses[Math.floor(Math.random() * rowSpanClasses.length)];
            classNameModifier = `${randomColSpan} ${randomRowSpan}`;
            sizeScore = (randomColSpan === 'w-3x' && randomRowSpan === 'h-3x') ? 3 : 2;
        }

        if (classNameModifier) {
            itemDiv.classList.add(...classNameModifier.split(' '));
        }

        const imageUrl = images[i];

        itemDiv.innerHTML = `
            <img src="${imageUrl}" alt="Portfolio afbeelding ${i + 1}" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <p class="text-lg font-bold">Project ${i + 1}</p>
            </div>
        `;
        itemDiv.addEventListener('click', () => showLightbox(i));
        items.push({ element: itemDiv, sizeScore: sizeScore });
    }

    // Sorteer de items op basis van hun grootte (grootste eerst)
    items.sort((a, b) => b.sizeScore - a.sizeScore);

    // Voeg de gesorteerde items toe aan de container
    items.forEach(item => portfolioContainer.appendChild(item.element));

    setupScrollSnap();
}

/**
 * Stelt de ScrollTrigger in voor het "snappen" naar de afbeeldingen.
 */
function setupScrollSnap() {
    // Vernietig een bestaande ScrollTrigger om conflicten te voorkomen
    if (portfolioContainer.scrollTrigger) {
        portfolioContainer.scrollTrigger.kill();
    }

    // Creëer een array van de top-posities van elke afbeelding voor het snappen
    let snapPoints = [];
    const items = gsap.utils.toArray(".portfolio-item");
    items.forEach(item => {
        snapPoints.push(item.offsetTop);
    });

    // Filter duplicaten uit de snap-posities, want meerdere items kunnen op dezelfde Y-positie staan
    snapPoints = [...new Set(snapPoints)];

    ScrollTrigger.create({
        trigger: portfolioContainer,
        start: "top top", // De trigger begint bovenaan de container
        end: "bottom top", // De trigger eindigt onderaan de container
        scrub: true,
        snap: {
            snapTo: snapPoints,
            duration: {min: 0.2, max: 0.6},
            ease: "power1.inOut"
        },
        markers: false // Voor debugging, zet op true
    });
}

// === Lightbox logica ===
function showLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    lightbox.style.display = 'flex';
    gsap.fromTo(lightbox, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 0.3});
}

function hideLightbox() {
    gsap.to(lightbox, {opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => {
        lightbox.style.display = 'none';
    }});
}

function updateLightboxContent() {
    lightboxImage.src = images[currentImageIndex];
    const description = CONFIG.lightbox.imageDescriptions[images[currentImageIndex]] || 'No description available.';
    lightboxDescription.textContent = description;
}

function goToNextImage() {
    const nextIndex = (currentImageIndex + 1) % images.length;
    transitionImage(nextIndex, 1);
}

function goToPrevImage() {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    transitionImage(prevIndex, -1);
}

function transitionImage(newIndex, direction) {
    gsap.to(lightboxImage, {
        x: -direction * 100,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            currentImageIndex = newIndex;
            updateLightboxContent();
            gsap.fromTo(lightboxImage, {
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

// Event listeners
toggleButton.addEventListener('click', generatePortfolio);
closeLightboxBtn.addEventListener('click', hideLightbox);
lightboxOverlay.addEventListener('click', hideLightbox);
lightboxNext.addEventListener('click', goToNextImage);
lightboxPrev.addEventListener('click', goToPrevImage);

// Swipe logica
let touchstartX = 0;
let touchendX = 0;

const handleGesture = () => {
    if (touchendX < touchstartX - 50) {
        goToNextImage();
    }
    if (touchendX > touchstartX + 50) {
        goToPrevImage();
    }
}

lightboxImage.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

lightboxImage.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

// Genereer de eerste set afbeeldingen bij het laden van de pagina
document.addEventListener('DOMContentLoaded', generatePortfolio);