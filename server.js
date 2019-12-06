var express = require("express"); // carreguei a biblioteca do Express na variável express. Import
var cors = require("cors"); // permite resposta a todos que solicitarem, inependente de o servidor e a máquina coincidirem.

var server = express(); // criei um servidor invocando a biblioteca. New
server.use(cors);


var listaAluno; //Teste 2
listFunc = [
    {
        "id": 1,
        "nome": "Thiago",
        "endereco": "Rua Professor Fernando de Azevedo",
        "numero": 10,
        "salario": 10000.00
    },
    {
        "id": 2,
        "nome": "Ana",
        "endereco": "Rua Professor Fernando de Azevedo",
        "numero": 10,
        "salario": 15000.00
    },
    {
        "id": 3,
        "nome": "Diego",
        "endereco": "Rua Professor Fernando de Azevedo",
        "numero": 11,
        "salario": 11000.00
    },
    {
        "id": 4,
        "nome": "Ellis",
        "endereco": "Rua Professor Fernando de Azevedo",
        "numero": 12,
        "salario": 13000.00
    }
]; //Teste 2

server.get("/funcionarios/:id", function (req, res) {
    var id = req.params.id;
    if (id <= 0 || id > 4) {
        res.json('"resultado":"funcionario não encontrado"');
    }
    else {
        res.json(listFunc[id - 1]);
    }
})

server.get("/funcionarios", function (req, res) {
    res.json(listFunc);
})

server.get("/teste", function (req, res) {
    console.log("Browser acessou o caminho /teste ");
    res.json(lista); //Teste 2
});

server.get("/hello", function (req, res) {
    console.log("Browser acessou o caminho /hello ");
    var texto = "<html><body><marquee>Título</marquee></body></html>"; //Teste 1
    res.send(texto); //Teste 1
});

server.listen(3000, inicializou());

function inicializou() {
    console.log("Servidor rodando na porta 3000");
}