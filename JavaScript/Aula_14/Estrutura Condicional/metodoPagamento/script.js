function calcularPagamento 
let formaPagamento = "pix"
let valorTotal = 100

switch (formaPagamento){
    case "pix":
        valorFinal = valorTotal* 0.9
        console.log(valorFinal);
        break
    case "debito":
        valorFinal = valorTotal* 0.95
        console.log(valorFinal);
        break
    case "credito":
        console.log(valorFinal);
        break
    default:
        console.log ("informe uma forma de pagamento válida");
        break
}