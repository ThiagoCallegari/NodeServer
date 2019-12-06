//Carrega a biblioteca baixada e atribui à variável libInput.
var libInput = require("readline-sync");

var texto = libInput.question("Digite aqui: "); // comando da biblioteca adicionada.
console.log("Você digitou: " + texto);