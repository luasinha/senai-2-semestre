<<<<<<< HEAD
let listaNumeros = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] %3 == 0){
        listaNumeros.push("Fizz")
    }else if(numeros[i] %5 == 0){
        listaNumeros.push("Buzz")
    }else if(numeros[i] %3 == 0 && numeros[i] %5 == 0){
        listaNumeros.push("Fizz Buzz")
    }else{
        listaNumeros.push(numeros[i])
    }
}

=======
let listaNumeros = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] %3 == 0){
        listaNumeros.push("Fizz")
    }else if(numeros[i] %5 == 0){
        listaNumeros.push("Buzz")
    }else if(numeros[i] %3 == 0 && numeros[i] %5 == 0){
        listaNumeros.push("Fizz Buzz")
    }else{
        listaNumeros.push(numeros[i])
    }
}

>>>>>>> 7d2d425f5b152b612e1bf8bdad188dfb4695a478
console.log(listaNumeros)