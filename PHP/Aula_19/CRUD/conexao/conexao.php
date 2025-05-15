<?php
$_severName = "localhost";
$userName = "root";
$password = "";
$dbName = "faculdade";

//Criando conexão
$coon = new mysqli($_severName, $userName, $password, $dbName);

//Validação de Conexão
if ($coon->connect_error) {
    echo"Conexão Falhou";
}

?>
