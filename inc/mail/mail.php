<?php

session_start();

include_once("../Classes/CSRFToken.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (!CSRFToken::verifyCSRFToken($_POST["token"], true)) {
    echo json_encode(["message"=> "Expired token. Reload the page, please."]);
    exit;
}

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

if ( isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['suburb']) && isset($_POST['message'])) {
    
    $subject = "Application";
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $suburb = $_POST['suburb'];
    $message = nl2br($_POST['message']);
    
    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;          //Enable verbose debug output
        $mail->isSMTP();                                  //Send using SMTP
        $mail->Host       = 'smtp.test.com';              //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                         //Enable SMTP authentication
        $mail->Username   = 'test@test.com';              //SMTP username
        $mail->Password   = 'password';                   //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  //Enable implicit TLS encryption
        $mail->Port       = 465;                          //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('test@test.com', 'Mailer');
        $mail->addAddress('test@recipient.com', 'Anthony');        //Add a recipient
    
        //Content
        $mail->isHTML(true);                                        //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = '<b>name: ' . $name . '</b><br><b>email: ' . $email . '</b><br><b>suburb: ' . $suburb . '</b><br><b>message: '. $message . '</b>';
        $mail->AltBody = 'name: ' . $name . 'email: ' . $email . 'suburb: ' . $suburb . 'message: '. $message;
    
        $mail->send();
        
        
        echo json_encode(["message"=>"Message has been sent"]);
    } catch (Exception $e) {
        echo json_encode(["message"=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }   
    
}

