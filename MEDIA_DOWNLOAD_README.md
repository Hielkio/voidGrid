# VoidGrid Media Download & Organization System

Deze handleiding legt uit hoe je media kunt downloaden en organiseren voor offline gebruik in VoidGrid.

## 📁 Map Structuur

```
voidGrid/
├── media/
│   ├── videos/          # Gedownloade video bestanden
│   │   ├── video1.mp4
│   │   ├── video2.mp4
│   │   └── ...
│   └── images/          # Gedownloade image bestanden
│       ├── image1.jpg
│       ├── image2.jpg
│       └── ...
├── sources/
│   ├── africa.json      # Remote bronnen
│   ├── ocean-life-video.json
│   ├── local-media.json     # Lokale georganiseerde bestanden
│   ├── local-videos.json    # Alleen videos
│   └── local-images.json    # Alleen images
└── ...
```

## 🚀 Hoe te Gebruiken

### Belangrijke Opmerking over Downloads
**Browser Download Dialogs**: Voor beveiligingsredenen toont de browser altijd download dialogen. Dit is normaal gedrag en kan niet worden omzeild in webapplicaties.

### Stap 1: Media Downloaden (Optioneel)

1. **Open je VoidGrid project** in de browser
2. **Klik op de groene download knop** (📁) linksboven (indien ingeschakeld)
3. **Bevestig de download** van alle media bestanden in de browser dialogs
4. **Wacht tot alle downloads voltooid zijn**

De downloads worden automatisch georganiseerd in:
- `media/videos/` voor video bestanden
- `media/images/` voor image bestanden

### Automatische Downloads Uitschakelen

Standaard zijn automatische downloads **uitgeschakeld** om intrusive dialogs te voorkomen:

```javascript
new VoidGrid("#container", {
  downloads: {
    autoDownloadVisible: false,  // Geen automatische downloads
    enableBatchDownload: true    // Handmatige downloads toegestaan
  }
});
```

### Stap 2: Lokale Bronnen Gebruiken

Na het downloaden kun je schakelen naar lokale bronnen:

```javascript
// Gebruik lokale georganiseerde media
new VoidGrid("#container", {
  sources: ['sources/local-media.json']
});

// Of gebruik gescheiden lokale bestanden
new VoidGrid("#container", {
  sources: [
    'sources/local-videos.json',
    'sources/local-images.json'
  ]
});
```

## 📋 JSON Bestandsformaten

### Remote Bron (voor downloaden)
```json
[
  {
    "image_url": "https://example.com/image.jpg",
    "title": "Voorbeeld Image"
  },
  {
    "video_url": "https://example.com/video.mp4",
    "title": "Voorbeeld Video"
  }
]
```

### Lokale Bron (na downloaden)
```json
[
  {
    "image_url": "media/images/voorbeeld_image.jpg",
    "title": "Voorbeeld Image",
    "type": "image",
    "downloaded_at": "2025-09-03T12:00:00.000Z"
  },
  {
    "video_url": "media/videos/voorbeeld_video.mp4",
    "title": "Voorbeeld Video",
    "type": "video",
    "downloaded_at": "2025-09-03T12:00:00.000Z"
  }
]
```

## 🔧 Automatische JSON Generatie

Na het downloaden worden automatisch JSON bestanden gegenereerd:

- **`local-media.json`**: Alle media samen
- **`local-videos.json`**: Alleen videos
- **`local-images.json`**: Alleen images

Deze bestanden bevatten de juiste lokale paden en metadata.

## 💡 Voordelen

### ✅ **Offline Gebruik**
- Geen afhankelijkheid van externe URLs
- Snellere laadtijden
- Betere betrouwbaarheid

### ✅ **Georganiseerde Structuur**
- Automatische map organisatie
- Duidelijke bestandsnamen
- Type-gebaseerde indeling

### ✅ **Flexibele Configuratie**
- Mix van lokale en remote bronnen
- Gescheiden video/image bestanden
- Eenvoudig schakelen tussen bronnen

## 🔄 Workflow

1. **Ontwikkeling**: Gebruik remote bronnen voor testen
2. **Download**: Klik op download knop om media lokaal op te slaan
3. **Organisatie**: Bestanden worden automatisch in juiste mappen geplaatst
4. **Productie**: Schakel over naar lokale bronnen voor optimale performance

## ⚠️ Belangrijke Notities

- **Browser Downloads**: Downloads gebruiken de browser's download API
- **Bestandsnamen**: Automatisch gegenereerd gebaseerd op titel
- **Map Structuur**: Zorg dat `media/videos/` en `media/images/` bestaan
- **CORS Beperkingen**: Sommige externe URLs kunnen CORS problemen hebben

## 🛠️ Probleemoplossing

### Downloads werken niet
- Controleer of de URLs toegankelijk zijn
- Check browser console voor CORS errors
- Probeer een andere browser

### Bestanden worden niet gevonden
- Controleer of de `media/` mappen bestaan
- Verificeer de paden in de JSON bestanden
- Zorg voor juiste bestandspermissies

### Videos spelen niet af
- Controleer of bestanden correct zijn gedownload
- Verificeer video format ondersteuning
- Check browser codec ondersteuning