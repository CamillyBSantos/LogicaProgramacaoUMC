<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro programa</title>
</head>
<body>
    
    <h1>
        <?php
            echo "Olá Mundo!";
        ?>
    </h1>

    <?php
        echo "<h1>Fome!</h1>";
    ?>

    <h2> Variáveis em PHP</h2>

    <p>
        <?php
        $nome = "Camilly";
        $email = "camillybarbosasantos@gmail.com";

        echo "Nome: $nome <br>";
        echo "E-mai: $email <br>";
        ?>
    </p>

    <h2>Constantes em PHP</h2>
    <p>
        <?php
            const faculdade = "UMC";
            const cidade = "Mogi das Cruzes";

            echo "Faculdade:" . faculdade . "<br>";
            echo "Cidade: " . cidade . "<br>";
        ?>

    </p>
</body>
</html>