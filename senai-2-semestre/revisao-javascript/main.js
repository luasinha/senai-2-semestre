import exemplosVariaveis from "./scripts/variaveis.js";
import exemplosCondicionais from "./scripts/outros/condicionais.js";
import exemplosDatas from "./scripts/outros/datas.js";
import exemplosObjetos from "./scripts/outros/objetos.js";

const btnVariaveis = document.getElementById("btnVariaveis");
btnVariaveis.addEventListener("click", exemplosVariaveis);

document.getElementById("btnCondicionais").addEventListener("click", exemplosCondicionais)

document.getElementById("btnDatas").addEventListener("click", exemplosDatas)

document.getElementById("btnObjetos").addEventListener("click", exemplosObjetos)

// pra abrir o index digitar no terminal: npm run iniciar
// copiar o link local e abrir no navegador