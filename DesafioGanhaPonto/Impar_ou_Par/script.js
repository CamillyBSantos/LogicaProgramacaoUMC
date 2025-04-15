function verificarNumero() {
    let numero = parseFloat (document.querySelector("#numero").value)
    
    if(numero % 2 === 0){
        document.getElementById("mensagem").innerHTML = "Esse número é Par";
        document.getElementById("mensagem").style.color = "green";
    }

    else if(numero % 3 === 0){
        document.getElementById("mensagem").innerHTML = "Esse número é Ímpar";
        document.getElementById("mensagem").style.color = "red";
    }
    
    else{
        document.getElementById("mensagem").innerHTML = "Insira um número";
        document.getElementById("mensagem").style.color = "yellow";
    }
}
