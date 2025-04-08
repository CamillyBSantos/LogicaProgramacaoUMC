//Arrey
let timesPaulistas = [ "Corinthians", "São Paulo", "Porcada", "Santos"]

// Acessar um item do Array
console.log(timesPaulistas[0])

//Verificar o tamanho do Arrey
console.log(timesPaulistas.length)

// Adicionar um item no final do Arrey
timesPaulistas.push("Ponte Preta")
console.log(timesPaulistas)

//Adicionar um item no inicio do Arrey
timesPaulistas.unshift("Guarani")
console.log(timesPaulistas)

//Remover um item no inicio do Arrey
timesPaulistas.shift()
console.log(timesPaulistas)

//Remover um item no fim no Arrey
timesPaulistas.pop()
console.log(timesPaulistas)

// Verificar a posição do item
console.log(timesPaulistas.indexOf("Santos"))

//Metodo Splice()
// - Adicionar
// - Remover
// - Modificar

// Remover um item a partir de uma posião
timesPaulistas.splice(1,1)
console.log(timesPaulistas)

// Remover um item a partir de um valor
timesPaulistas.splice(timesPaulistas.indexOf("Santos"),1)
console.log(timesPaulistas)

// Adicionando itens dentro de um Arrey
timesPaulistas.splice(0,0, "Corinthians", "Santos", "São Paulo", "Palmeiras")
console.log(timesPaulistas)

//Modificando itens de um Arrey
timesPaulistas.splice(2,2, "Guarani", "Ituano")
console.log(timesPaulistas)

// Percorrer um Arrey
console.log ("Maiores Times Paulistas");
let i = 0;

timesPaulistas.forEach((times) => {
    i++
    console.log(i, "-", time)
})