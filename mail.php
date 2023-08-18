<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['phone'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "zangy.cu8@gmail.com";
    $asuntoCorreo = "Nuevo mensaje de contacto - Gangy Studio";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Asunto: $asunto\n";
    $contenido .= "Mensaje: $mensaje\n";

    $headers = "From: $email";

    mail($destinatario, $asuntoCorreo, $contenido, $headers);

    // Puedes redirigir al usuario a una página de confirmación
    header("Location: index.html");
}


?>