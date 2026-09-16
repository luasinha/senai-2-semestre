<<<<<<< HEAD
function classificar_string(texto){
    let categoria;

    if(texto.length <= 5) {
        categoria = "pequena";
    }else if (texto.length <= 10) {
        categoria = "média";
    }else {
        categoria = "grande";
    }

    console.log("A string " + texto + " é " + categoria + ".")
}

let palavra

palavra = prompt("Digite a palavra")

=======
function classificar_string(texto){
    let categoria;

    if(texto.length <= 5) {
        categoria = "pequena";
    }else if (texto.length <= 10) {
        categoria = "média";
    }else {
        categoria = "grande";
    }

    console.log("A string " + texto + " é " + categoria + ".")
}

let palavra

palavra = prompt("Digite a palavra")

>>>>>>> 7d2d425f5b152b612e1bf8bdad188dfb4695a478
classificar_string(palavra)