//nome:Rafaela
//faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar 1 se o número for par e 0 se for impar.
function verificador(nUm) {
    var res = 0;
    if (nUm % 2 == 0) {
        res = 1;
    }
    else if (nUm % 2 == 1) {
        res = 0;
    }
    return res;
}
var teclado = require("prompt-sync")();
var nUm = parseInt(teclado("Digite o primeiro numero: "));
var ress = verificador(nUm);
console.log("o numero digitado \u00E9 par? ".concat(ress));
if (ress == 1) {
    console.log("O n\u00FAmero ".concat(nUm, " \u00E9 Par."));
}
else if (ress == 0) {
    console.log("O n\u00FAmero ".concat(nUm, " \u00E9 impar."));
}
else {
    console.log("Algo deu errado!!");
}
