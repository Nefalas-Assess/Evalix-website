<?php
// Simple contact mail handler for Hostinger (PHP). Accepts JSON POST and sends an email via mail().

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload']);
    exit;
}

// Basic sanitization
$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';
$subject = isset($input['subject']) ? trim($input['subject']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

// Destinataires en dur ; ajoute ou retire des adresses ici
$recipients = [
    'info@evalix.be',
    'thomaspoint@gmail.com',
    'vdbjulien9@gmail.com'
];

$to = implode(',', $recipients);
$mailSubject = 'Nouveau message via le formulaire de contact';

$bodyLines = [
    "Nom: {$name}",
    "Email: {$email}",
    "Société: " . ($company !== '' ? $company : 'Non renseigné'),
    "Téléphone: " . ($phone !== '' ? $phone : 'Non renseigné'),
    "",
    "Sujet: {$subject}",
    "Message:",
    $message,
];

$body = implode("\n", $bodyLines);

$fromAddress = 'no-reply@evalix.be'; // Utilise une adresse du domaine pour éviter les blocages SMTP

$headers = [];
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = "From: Evalix <{$fromAddress}>";
$headers[] = "Reply-To: {$name} <{$email}>";

$sent = mail($to, $mailSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail sending failed']);
    exit;
}

echo json_encode(['success' => true]);
