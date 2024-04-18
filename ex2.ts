//nome:Rafaela
//Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.

function encontrarMenor(numero1: number, numero2: number, numero3: number,): number{
    let menor: number =0;
    if (numero1 < numero2 && numero1 < numero3) {   menor = numero1  }
    else if (numero2 < numero1 && numero2 < numero3) { menor = numero2}
    else if (numero3 < numero1 && numero3 < numero2) { menor = numero3}
else {
    console.log(`Algo deu errado`);
}

    return menor;
}

console.clear();

const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite o primeiro numero: `));
let n2: number = parseFloat(teclado(`digite o segundo numero: `));
let n3: number = parseFloat(teclado(`digite o terceiro numero: `));

console.log(`O menor numero é ${encontrarMenor(n1,n2,n3)} `);