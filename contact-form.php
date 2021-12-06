<?php
$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$subject = $_POST['contact-subject'];
$message = $_POST['contact-message'];

$to="sumeshmohanty2020@gmail.com";
$body="From: $name \r\nEmail: $email\r\nMessage: $message";

mail($to,$subject,$message);

?>