// let n = 10;
// let resultado = n;

// for(let index = n - 1; index != 0; index--){
//     resultado = resultado * index;
//     console.log(resultado);
// }

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
//   console.log(reverseWord);
// }

// console.log(reverseWord);

// let word = 'tryber';
// let wordArray = word.split("");
// console.log(wordArray.length - 1);
// let wordReverseArray = [];

// for(let index = wordArray.length -1; index >= 0; index--){
//     wordReverseArray.push(wordArray[index]);
//     console.log(wordReverseArray);
// }

// let wordReverse = wordReverseArray.join('');
// console.log(wordReverse);

// let array = [ 'java', 'python', 'html', 'css', 'javascript'];
// let maior = "";
// let menor = null;

// for(let index = 0; index < array.length; index++){
//     console.log(array[index])
//     if(array[index].length > maior.length) {
//         maior = array[index];
//     }
// }

// for(let index = 0; index < array.length; index++){
//     if(menor == null){
//         menor = array[index];
//         console.log(menor);
//     } else if(menor > array[index]) {
//         menor = array[index];
//         console.log(menor);
//     }
// }

// console.log(maior);
// console.log(menor);

let primos = [];

for(let index = 2; index <= 50; index++){
    let cont = 0;
    for(let i = 1; i <= index; i++){
        if(index % i === 0) {
            cont++;
        }
        if(index === i && cont === 2){
            primos.push(index);
        }
    }
    console.log(primos)
}