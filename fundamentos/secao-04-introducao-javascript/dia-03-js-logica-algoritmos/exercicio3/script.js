let n = 9;
let asterisco = "*";
let espaco = " ";

// for(let index = 1; index <= n; index++){
//     console.log(asterisco.repeat(n));
// }

// for(let index = 0; index < n; index++){
//     console.log(asterisco.repeat(index));
// }

// for(let index = 0; index < n; index++){
//     console.log((espaco.repeat(n - index) + asterisco.repeat(index)));
// }

let symbol = "*";
let inputLine = "";
let midOfMatrix;
let controlLeft;
let controlRight;
if(n % 2 === 0) {
    midOfMatrix = n/2;
    controlLeft = midOfMatrix;
    controlRight = midOfMatrix + 1;
} else {
    midOfMatrix = (n+1)/2;
    controlLeft = midOfMatrix;
    controlRight = midOfMatrix;
}

console.log(midOfMatrix);


for (let lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (
      columnIndex == controlLeft ||
      columnIndex == controlRight ||
      (midOfMatrix - 1) == lineIndex 
    ) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  inputLine = "";
  controlRight += 1;
  controlLeft -= 1;
}

// let numero = 12;
// let cont = 0;

// for(let i = 2; i < numero; i++){
//     if(numero % i === 0){
//         cont++;
//     }
// }
// console.log(cont);
// if(cont === 0) {
//     console.log("O número apresentado é primo");
// } else {
//     console.log("O número apresentado não é primo");
// }
