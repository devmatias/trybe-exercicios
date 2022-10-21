// let n = 10;
// let resultado = n;

// for(let index = n - 1; index != 0; index--){
//     resultado = resultado * index;
//     console.log(resultado);
// }

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

let array = [ 'java', 'python', 'html', 'css', 'javascript'];
let maior = "";

for(let index = 0; index < array.length; index++){
    console.log(array[index])
    if(array[index].length > maior.length) {
        maior = array[index];
    }
}

console.log(maior);