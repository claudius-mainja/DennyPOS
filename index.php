<?php
// DennyPOS Website - Entry Point
// This file serves the React app for production

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// API endpoints
if (strpos($path, '/api/') === 0) {
    $api_file = __DIR__ . $path . '.php';
    if (file_exists($api_file)) {
        include $api_file;
        exit;
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'API endpoint not found']);
        exit;
    }
}

// Static assets
$static_extensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
$ext = pathinfo($path, PATHINFO_EXTENSION);

if (in_array('.' . $ext, $static_extensions) && file_exists(__DIR__ . '/dist' . $path)) {
    $mime_types = [
        'js' => 'application/javascript',
        'css' => 'text/css',
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif' => 'image/gif',
        'svg' => 'image/svg+xml',
        'ico' => 'image/x-icon',
        'woff' => 'font/woff',
        'woff2' => 'font/woff2',
        'ttf' => 'font/ttf',
        'eot' => 'application/vnd.ms-fontobject',
    ];
    
    header('Content-Type: ' . ($mime_types[$ext] ?? 'application/octet-stream'));
    header('Cache-Control: public, max-age=31536000');
    readfile(__DIR__ . '/dist' . $path);
    exit;
}

// Serve React app for all other routes (SPA)
$index_file = __DIR__ . '/dist/index.html';
if (file_exists($index_file)) {
    readfile($index_file);
    exit;
}

// If no dist folder, show setup instructions
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DennyPOS - Setup Required</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1B4332 0%, #0A0F0D 100%);
            color: white;
            min-height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            padding: 40px;
            background: rgba(255,255,255,0.05);
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.1);
            max-width: 600px;
        }
        h1 { color: #22C55E; margin-bottom: 20px; }
        p { color: #94A3B8; line-height: 1.6; }
        code {
            background: rgba(0,0,0,0.3);
            padding: 2px 8px;
            border-radius: 4px;
            color: #22C55E;
        }
        .step {
            text-align: left;
            background: rgba(0,0,0,0.2);
            padding: 15px 20px;
            border-radius: 8px;
            margin: 10px 0;
        }
        .step strong { color: #22C55E; }
    </style>
</head>
<body>
    <div class="container">
        <h1>DennyPOS - Setup Required</h1>
        <p>Welcome to DennyPOS! To run this website, please follow these steps:</p>
        
        <div class="step">
            <strong>1. Build the React app:</strong><br>
            <code>npm install && npm run build</code>
        </div>
        
        <div class="step">
            <strong>2. Place this folder in your web server's public directory</strong><br>
            (e.g., public_html, www, or htdocs)
        </div>
        
        <div class="step">
            <strong>3. Ensure PHP is enabled</strong><br>
            The API endpoint requires PHP to process contact form submissions.
        </div>
        
        <p style="margin-top: 30px; font-size: 14px;">
            For local development: <code>npm run dev</code>
        </p>
    </div>
</body>
</html>
<?php
