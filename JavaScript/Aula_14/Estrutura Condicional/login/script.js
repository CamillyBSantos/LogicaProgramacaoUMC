function verificarLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    var usuarioCorreto = "admin";
    var senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        document.getElementById("mensagem").innerHTML = "Login bem-sucedido!";
        document.getElementById("mensagem").style.color = "green";
    } 
    else {
        document.getElementById("mensagem").innerHTML = "Usuário ou senha incorretos.";
        document.getElementById("mensagem").style.color = "red";
    }
}
