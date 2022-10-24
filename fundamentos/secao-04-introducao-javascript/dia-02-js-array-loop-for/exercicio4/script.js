let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maior = numbers[0];
let quantidadeImpar = 0;
let menor = numbers[0];


for(number of numbers) {
    // console.log(number);
    
    sum = sum + number;
    if(maior < number){
        maior = number;
    }
    
    if(number % 2 !== 0){
        quantidadeImpar += 1;
    }
    if(menor > number){
        menor = number;
    }
}

let media = sum/(numbers.length);
console.log(sum);
console.log(media);

if(media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

console.log(maior)


if(quantidadeImpar > 0) {
    console.log(quantidadeImpar);
} else {
    console.log("nenhum valor ímpar encontrado");
}

console.log(menor);

let array = [];

for(let i = 1; i <= 25; i++) {
    array.push(i);
    
}

console.log(array);

for(number of array){
    number = number/2;
    console.log(number);
}