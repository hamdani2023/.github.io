<?php
header('Content-Type: application/json');

// Directory relative to this PHP file's location
$dir = '../assets/img/photos/';
$url_path = '../assets/img/photos/';

// Get photos
$files = glob($dir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

if (!$files) {
    echo json_encode([]);
    exit;
}

$files = array_map(function ($file) use ($url_path) {
    return $url_path . basename($file);
}, $files);

echo json_encode($files);
