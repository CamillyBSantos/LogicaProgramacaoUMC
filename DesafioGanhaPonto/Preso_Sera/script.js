function verificarNumero() {
    let numero = parseFloat (document.querySelector("#numero").value)
    
    if(numero>=18){
        document.getElementById("mensagem").innerHTML = "Parabens!Você pode hein!";
        document.getElementById("mensagem").style.color = "green";
    }

    else if(numero<=18){ 
        document.getElementById("mensagem").innerHTML = "Ainda não! Use isso com responsabilidade ;)";
        document.getElementById("mensagem").style.color = "red";

    }
    else{
        document.getElementById("mensagem").innerHTML = "Insira um número";
        document.getElementById("mensagem").style.color = "yellow";
    }
}