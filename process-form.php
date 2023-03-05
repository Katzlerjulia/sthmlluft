<?php
if (isset($_POST['send'])) {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = 'julia.katzler@gmail.com';

    // Set the email subject
    $subject = 'New form submission';

    // Build the email message
    $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    $headers = "From: $name <$email>";
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'An error occurred. Please try again later.';
    }
}
?>
