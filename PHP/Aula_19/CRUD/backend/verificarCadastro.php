<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="../index.php">Início</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="verificarCadastro.php">Listas de Usuários</a></li>
            </ul>            
        </nav>
    </header>

    <main>
        <section id="containerSection">
            <form action="verificarCadastro.php" method="post">
                <input type="email" placeholder="Informe o seu email"name="email" id="email">
                <input type="submit" value="Buscar">
            </form>
        </section>
            <?php

            // Verificar de o campo e-mail esta preenchido

            if(isset($_POST["email"])){
                //Exibir as informaões passadas pelo form
                // echo var_dump($_POST["email"]);

                //Salva o e-mail informado
                $email = $_POST["email"];

                //Recebe as informações da conexão do DB
                include("../conexao/conexao.php");

                //Query ao banco de dados
                $sql="SELECT * FROM usuarios WHERE email =?";
                $stmt = $coon->prepare("$sql");

                //Validando se a conecxão foi feita com sucesso
                if ($stmt){
                    // troca o ? pelo email no $sql
                    $stmt->bind_param("s", $email);
                    //executa a função
                    $stmt->execute();
                    //salvao resultado no comando
                    $resultado = $stmt->get_result();

                    if ($resultado->num_rows > 0){
                        echo "usuario encontrado";
                        $row = $resultado->fetch_assoc();
                        echo var_dump($row);   
                    }
                    else{
                        echo "usuário não encontrado";
                    }       
                }


            }
            ?>
        <section>

        </section>
    </main>


</body>
</html>