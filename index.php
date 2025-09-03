<?php
// VoidGrid - Multi-source Media Gallery
// Supports JSON files, directories, and mixed sources

// Configuration
$config = [
    'sources' => [
        'sources/africa.json',           // JSON file
        'sources/ocean-life-video.json', // JSON with videos
        '../assets/images/portfolio',    // Directory with images (relative to voidGrid)
        '../assets/images/hq'            // Another directory (relative to voidGrid)
    ],
    'maxItems' => 50,  // Maximum items to load
    'supportedExtensions' => ['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4', 'webm', 'avi']
];

// Function to scan directory for media files
function scanDirectoryForMedia($directory, $basePath = '') {
    $mediaFiles = [];

    if (!is_dir($directory)) {
        return $mediaFiles;
    }

    $files = scandir($directory);
    $supportedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4', 'webm', 'avi'];

    foreach ($files as $file) {
        if ($file === '.' || $file === '..') {
            continue;
        }

        $fullPath = $directory . '/' . $file;

        if (is_dir($fullPath)) {
            // Recursively scan subdirectories
            $subMedia = scanDirectoryForMedia($fullPath, $basePath . $file . '/');
            $mediaFiles = array_merge($mediaFiles, $subMedia);
        } else {
            $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

            if (in_array($extension, $supportedExtensions)) {
                $type = in_array($extension, ['mp4', 'webm', 'avi']) ? 'video' : 'image';

                // Generate correct URL based on directory structure
                if (strpos($directory, '../') === 0) {
                    // Parent directory - adjust URL accordingly
                    $url = '../' . ltrim($basePath . $file, './');
                } else {
                    // Local directory
                    $url = $basePath . $file;
                }

                $mediaFiles[] = [
                    'type' => $type,
                    'url' => $url,
                    'title' => ucfirst(pathinfo($file, PATHINFO_FILENAME)),
                    'source' => 'directory:' . $directory
                ];
            }
        }
    }

    return $mediaFiles;
}

// Function to load media from various sources
function loadMediaFromSources($sources) {
    $allMedia = [];

    foreach ($sources as $source) {
        if (is_dir($source)) {
            // Source is a directory
            $directoryMedia = scanDirectoryForMedia($source);
            $allMedia = array_merge($allMedia, $directoryMedia);
        } elseif (file_exists($source) && pathinfo($source, PATHINFO_EXTENSION) === 'json') {
            // Source is a JSON file
            $jsonContent = file_get_contents($source);
            $jsonData = json_decode($jsonContent, true);

            if ($jsonData && is_array($jsonData)) {
                foreach ($jsonData as $item) {
                    if (isset($item['image_url'])) {
                        $allMedia[] = [
                            'type' => 'image',
                            'url' => $item['image_url'],
                            'title' => $item['title'] ?? 'Image',
                            'source' => 'json:' . $source
                        ];
                    } elseif (isset($item['video_url'])) {
                        $allMedia[] = [
                            'type' => 'video',
                            'url' => $item['video_url'],
                            'title' => $item['title'] ?? 'Video',
                            'source' => 'json:' . $source
                        ];
                    }
                }
            }
        }
    }

    // Shuffle and limit results
    shuffle($allMedia);
    return array_slice($allMedia, 0, 50); // Limit to 50 items
}

// Load media from all sources
$mediaItems = loadMediaFromSources($config['sources']);

// Debug output
echo "<!-- Debug: Loaded " . count($mediaItems) . " media items -->\n";
if (count($mediaItems) > 0) {
    echo "<!-- Debug: First item: " . json_encode($mediaItems[0]) . " -->\n";
} else {
    echo "<!-- Debug: No media items loaded from sources: " . implode(', ', $config['sources']) . " -->\n";
}

// Convert to JSON for JavaScript
$mediaItemsJson = json_encode($mediaItems);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VoidGrid - Multi-Source Media Gallery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <!-- Add GSAP and ScrollTrigger CDNs -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
</head>
<body>
    <!-- Settings Toggle Button -->
    <button id="settingsToggle" class="fixed top-4 right-16 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300" title="Settings">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
    </button>

    <!-- Theme Toggle Button -->
    <button id="themeToggle" class="fixed top-4 right-4 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300" title="Toggle Theme">
        <svg id="sunIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg id="moonIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
    </button>

    <!-- Settings Panel -->
    <div id="settingsPanel" class="fixed top-16 right-4 z-40 bg-gray-800 text-white p-4 rounded-lg shadow-lg hidden max-w-sm">
        <h3 class="text-lg font-bold mb-4">VoidGrid Settings</h3>

        <!-- Parallax -->
        <div class="mb-4">
            <label class="flex items-center mb-2">
                <input type="checkbox" id="parallaxEnabled" class="mr-2">
                Enable Parallax
            </label>
            <label class="block text-sm mb-1">Parallax Speed:</label>
            <input type="range" id="parallaxSpeed" min="0.1" max="2" step="0.1" value="0.5" class="w-full">
        </div>

        <!-- Padding -->
        <div class="mb-4">
            <label class="block text-sm mb-1">Padding:</label>
            <input type="range" id="paddingValue" min="0" max="5" step="0.25" value="2" class="w-full">
            <span id="paddingDisplay" class="text-xs">2rem</span>
        </div>

        <!-- Rounded Corners -->
        <div class="mb-4">
            <label class="flex items-center mb-2">
                <input type="checkbox" id="roundedEnabled" checked class="mr-2">
                Enable Rounded Corners
            </label>
            <label class="block text-sm mb-1">Corner Radius:</label>
            <input type="range" id="roundedRadius" min="0" max="2" step="0.1" value="0.5" class="w-full">
            <span id="roundedDisplay" class="text-xs">0.5rem</span>
        </div>

        <!-- Sound Settings -->
        <div class="mb-4">
            <label class="flex items-center mb-2">
                <input type="checkbox" id="gridMuted" checked class="mr-2">
                Mute Videos in Grid
            </label>
            <label class="flex items-center mb-2">
                <input type="checkbox" id="lightboxSoundEnabled" checked class="mr-2">
                Enable Sound in Lightbox
            </label>
        </div>


        <!-- Background -->
        <div class="mb-4">
            <label class="block text-sm mb-1">Background Type:</label>
            <select id="backgroundType" class="w-full bg-gray-700 p-1 rounded">
                <option value="none">None</option>
                <option value="fixed">Fixed Image</option>
                <option value="random">Random Image</option>
            </select>
        </div>

        <!-- Overlay -->
        <div class="mb-4">
            <label class="flex items-center mb-2">
                <input type="checkbox" id="overlayEnabled" class="mr-2">
                Enable Overlay
            </label>
            <label class="block text-sm mb-1">Overlay Color:</label>
            <input type="color" id="overlayColor" value="#000000" class="w-full">
            <label class="block text-sm mb-1">Overlay Opacity:</label>
            <input type="range" id="overlayOpacity" min="0" max="1" step="0.1" value="0.5" class="w-full">
        </div>

        <button id="applySettings" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">Apply Settings</button>
    </div>
</head>
<body>

<section id="voidgrid" class="page-section h-screen flex flex-col justify-center items-center py-0">
    <div class="section-content w-full h-full flex flex-col items-center justify-center relative">

        <!-- Dynamic Masonry Container -->
        <div id="voidgridcontainer" class="voidgrid-masonry-container absolute inset-0 p-8">
            <!-- Images are added here by JavaScript -->
        </div>

        <!-- "View More" button -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <button class="voidgrid-toggle bg-black/90 backdrop-blur-md border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View More Work
            </button>
        </div>
    </div>
</section>

<!-- VoidGrid lightbox element -->
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

<script src="script.js"></script>
<script>
  // Initialize the voidgrid with PHP-generated media data
  // Media is loaded server-side from multiple sources (JSON files and directories)
  const phpMediaData = <?php echo $mediaItemsJson; ?>;

  new VoidGrid("#voidgridcontainer", {
    // Use PHP-generated media data instead of loading from sources
    phpMediaData: phpMediaData,

    hover: {
      overlay: 'rgba(0, 0, 0, 0.8)', // Dark overlay
      descriptionPosition: 'bottom', // Descriptions at bottom
      showDescription: false, // Show only on hover
      zoomSpeed: 2.5 // Slow zoom effect
    },

    sound: {
      gridMuted: true, // Videos muted in grid overview
      lightboxEnabled: true // Sound enabled in lightbox
    }
  });
</script>

</body>
</html>