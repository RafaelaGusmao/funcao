//nome:Rafaela
//Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
//(v = 4/3*P*R^3).
console.clear();
var teclado = require("prompt-sync")();
function calcularVolumeEsfera(raio) {
    var pi = 3.14;
    var volume = (4 / 3) * pi * (raio * raio * raio);
    return volume;
}
var raioEsfera = parseFloat(teclado("digite o raio da esfera: "));
var volumeEsfera = calcularVolumeEsfera(raioEsfera);
console.log("o volume da esfera com raio", raioEsfera, "é:", volumeEsfera);
