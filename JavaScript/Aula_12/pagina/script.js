// Mudar a cor da tela de fundo
window.document.body.style.background = "black"

//Mudar a cor da letra
window.document.body.style.color = "white"

//Criando um elemento no HTML
window.document.body.innerHTML += "<h1>Diabo x Deus</h1>"

//Exibindo alerta
window.alert("Olá Pessoa!")

//Exibindo tela de entrada de dados
var continuar = window.prompt("Você deseja vender sua alma?")
window.alert(continuar)

// tela de confirmação
continuar = window.confirm("Você tem certeza?")
window.alert(continuar)