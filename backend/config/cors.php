<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Add any additional paths needed
    'allowed_methods' => ['*'], // Allow all HTTP methods
    'allowed_origins' => ['http://localhost:5173'], // React's development server URL
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Allow all headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, // For sessions/cookies
];