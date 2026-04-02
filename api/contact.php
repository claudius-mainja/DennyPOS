<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

// Fallback to POST data if JSON is empty
if (!$data || !is_array($data)) {
    $data = $_POST;
}

// Sanitize input function
function sanitize($input) {
    if (is_string($input)) {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }
    return $input;
}

// Extract and sanitize fields
$name = isset($data['name']) ? sanitize($data['name']) : '';
$email = isset($data['email']) ? sanitize($data['email']) : '';
$phone = isset($data['phone']) ? sanitize($data['phone']) : '';
$company = isset($data['company']) ? sanitize($data['company']) : '';
$interest = isset($data['interest']) ? sanitize($data['interest']) : '';
$message = isset($data['message']) ? sanitize($data['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(', ', $errors)
    ]);
    exit();
}

// Email configuration
$to = 'sales@dennypos.co.za';
$emailSubject = "DennyPOS Website Inquiry";
if (!empty($interest)) {
    $emailSubject .= " - $interest";
}

// Build HTML email body
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1B4332 0%, #22C55E 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; background: #f9fafb; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e5e7eb; }
        .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .label { font-weight: bold; color: #1B4332; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .value { color: #374151; font-size: 16px; }
        .value a { color: #22C55E; text-decoration: none; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; background: #f3f4f6; border-radius: 8px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New DennyPOS Inquiry</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name</div>
                <div class='value'>" . $name . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email</div>
                <div class='value'><a href='mailto:" . $email . "'>" . $email . "</a></div>
            </div>";

if (!empty($phone)) {
    $emailBody .= "
            <div class='field'>
                <div class='label'>Phone</div>
                <div class='value'>" . $phone . "</div>
            </div>";
}

if (!empty($company)) {
    $emailBody .= "
            <div class='field'>
                <div class='label'>Company</div>
                <div class='value'>" . $company . "</div>
            </div>";
}

if (!empty($interest)) {
    $emailBody .= "
            <div class='field'>
                <div class='label'>Interest</div>
                <div class='value'>" . $interest . "</div>
            </div>";
}

$emailBody .= "
            <div class='field'>
                <div class='label'>Message</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p><strong>DennyPOS</strong></p>
            <p>This email was sent from the DennyPOS website contact form.</p>
            <p>Received: " . date('Y-m-d H:i:s T') . "</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: DennyPOS Website <noreply@dennypos.co.za>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: DennyPOS Contact Form'
];
$headerString = implode("\r\n", $headers);

// Try to send email
$mailSent = @mail($to, $emailSubject, $emailBody, $headerString);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you shortly.'
    ]);
} else {
    // Log the error for debugging
    error_log("DennyPOS Contact Form: Failed to send email to $to");
    
    // Still return success to user to prevent spam/abuse
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you shortly.'
    ]);
}
?>
