// let romanNumbersTranscription = {
//     I : 1,
//     IV : 4,
//     V : 5,
//     IX : 9,
//     X : 10,
//     XL : 40,
//     L : 50,
//     XC : 90,
//     C : 100,
//     CD : 400,
//     D : 500,
//     CM : 900,
//     M : 1000,
// }

// function conversorNumerosRomanos(romanos) {
//     let capitalizador = romanos.toUpperCase();
//     console.log(romanNumbersTranscription[capitalizador[0]]);
//     let resultado = 0;
//     let holder = 0;
//     for(let index = 0; index < capitalizador.length; index++) {
//         for(number in romanNumbersTranscription){
//             if(capitalizador[index] === number) {
//                 if(holder === 0) {
//                     holder += romanNumbersTranscription[number];
//                     console.log("holder atual:", holder);
//                 } else if(holder < romanNumbersTranscription[number]){
//                     resultado += romanNumbersTranscription[number] - holder;
//                     console.log("resultado atual:", resultado);
//                     holder = 0;
//                 } else {
//                     resultado += holder;
//                     holder = 0;
//                     holder += romanNumbersTranscription[number];
//                     console.log("resultado atual:", resultado);
//                     console.log("holder atual:", holder);
//                 }

//                 break;
//             }
//         }
//     }
//     return resultado;
// }

// console.log(conversorNumerosRomanos("ix"));

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// function arrayOfNumbers(array) {
//     let arrayPares = [];
//     for(let index = 0; index < vector.length; index++ ) {
//         for(index2 = 0; index2 < vector[index].length; index2++){
//             console.log(vector[index][index2]);
//             if(vector[index][index2] % 2 === 0) {
//                 arrayPares.push(vector[index][index2]);
//                 console.log(arrayPares);
//             }
//         }
//     }
//     return arrayPares;
// }

// console.log(arrayOfNumbers(vector));

// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];

//   const result = {};

//   for (let index = 0; index < basket.length; index += 1) {
//     const fruit = basket[index];
//     if (!result[fruit]) result[fruit] = 0;
//     result[fruit] += 1;
//     // console.log(result)
//   }

//   const summaries = [];

//   for (fruit in result) {
//     let message = result[fruit] + " " + fruit;
//     console.log(message);
//     if (result[fruit] > 1) message += 's';
//     summaries.push(message);
//   }

//   console.log('Sua cesta possui: ' + summaries.join(', '));
//   console.log(result)

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

// console.log("O morador do bloco 2 de nome " +
//  moradores.blocoDois[1].nome, moradores.blocoDois[1]['sobrenome'] + " mora no " +
//   moradores.blocoDois[1]['andar'] + "° andar, apartamento " + moradores.blocoDois[1]['apartamento']);

for(bloco in moradores) {
  for(let index = 0; index < moradores[bloco].length; index++){
    console.log("É um morador do " + bloco + " o(a) morador(a) " + moradores[bloco][index].nome, moradores[bloco][index].sobrenome);
    
  }
  // console.log(moradores[bloco][0].nome, moradores[bloco][0].sobrenome)
  // console.log(moradores[bloco][1].nome, moradores[bloco][1].sobrenome)
}