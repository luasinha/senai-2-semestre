const frutas = ["morango", "abacate", "uva"];

for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i])
}
console.log("================")

frutas.push("Pêssego")

for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i])
}
console.log("================")

frutas.pop()

for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i])
}