let isOn = false;

const ligarDesligar = () => isOn === false ? isOn = true : isOn = false;

console.log(`O motor está ${ligarDesligar() ? 'ligado'  : 'desligado'}`);
console.log(`O motor está ${ligarDesligar() ? 'ligado'  : 'desligado'}`);

const pi = 3.14;

const circleArea = (raio) => pi * Math.pow(raio, 2);

console.log(`Essa é a área do círculo: ${circleArea(3)}cm²`);

let minhaFrase = 'Eu sou um cara muito inteligente, então irei me tornar desenvolvedor.';

// const longestWord = string => {
//     let array = string.split(' ');
//     let maior = array[0];
//     for(word of array) {
//         if(word.length > maior.length) {
//             maior = word;
//         }
//     }
//     return maior;
// }

const longestWord = string => {
    let array = string.split(' ');
    let arrayOrdenado = array.sort((a, b) => a.length - b.length);
    console.log(arrayOrdenado);
    return arrayOrdenado[arrayOrdenado.length - 1];
}

console.log(longestWord(minhaFrase));