<?php
$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$subject = $_POST['contact-subject'];
$message = $_POST['contact-message'];

$to="sumemonty@gmail.com";
$body="From: $name \r\nEmail: $email\r\nMessage: $message";

mail($to,$subject,$message);
?>