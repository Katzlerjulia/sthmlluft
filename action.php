<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = "Mail från Formulär";
$message = $_POST['message'];

$headers = array(
    'Content-type' => 'text/html; charset=utf-8'
    'From' => $email,
    'Reply-To' => $email,
);

mail("julia.katzler@gmail.com", $subject, $message, $headers);
?>
