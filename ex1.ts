//nome:Rafaela
//faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar 1 se o número for par e 0 se for impar.

function verificador(nUm:number): number{
    let res: number = 0;
    if (nUm % 2 == 0) { res = 1;} 
    else if (nUm % 2 == 1) {res = 0;}
    return res;
}

const teclado = require (`prompt-sync`)();
let nUm: number = parseInt(teclado(`Digite o primeiro numero: `));
let ress = verificador(nUm);

console.log(`o numero digitado é par? ${ress}`);

if (ress == 1) {
    console.log(`O número ${nUm} é Par.`);
}
else if (ress == 0){
    console.log(`O número ${nUm} é impar.`);
}
else{
    console.log(`Algo deu errado!!`);
}