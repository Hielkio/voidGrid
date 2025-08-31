<?php
// unsplash.php

// Zet hier je access key neer
$accessKey = "JOUW_ACCESS_KEY";

// Lees het gekozen thema uit querystring (bv. ?theme=cars)
$theme = isset($_GET['theme']) ? urlencode($_GET['theme']) : "nature";

// Bouw de API URL
$url = "https://api.unsplash.com/search/photos?query={$theme}&per_page=20&client_id={$accessKey}";

// Vraag Unsplash API aan
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

// Geef de JSON rechtstreeks terug aan de browser
header("Content-Type: application/json");
echo $response;
