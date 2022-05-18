<?php

$nombre = $_POST["nombre"];
$correo = $_POST["email"];
$telefono =  $_POST["telefono"];
$mensaje = $_POST["mensaje"];

$body = "Nombre: "  . $nombre . "<br>Correo: " . $correo . "<br>Telefono: " . $telefono . "<br>Mensaje: " . $mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'comprawish31@gmail.com';                     //SMTP username
    $mail->Password   = 'delmonte41';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('comprawish31@gmail.com', $nombre );
    $mail->addAddress('chris_constancio@hotmail.com');     //Add a recipient


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Correo de Arquitectura';
    $mail->Body    = 'Hola! Soy Christoper en que te puedo servir?';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo '<script>
    alert("El mensaje se envio correctamente");
    window.history.go(-1);
    </script>';
    
} catch (Exception $e) {
    echo "No se pudo enviar el mensaje: {$mail->ErrorInfo}";
}