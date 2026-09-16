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

classificar_string(palavra)