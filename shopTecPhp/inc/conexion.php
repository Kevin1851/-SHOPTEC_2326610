<?php
$usuario="root";
$clave="";
try {
    $mbd = new PDO('mysql:host=localhost;dbname=shoptecF', $usuario, $clave);
    
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}

