const a = 0;
const b = 30;
const c = 40;

let soma = a + b;
let subtracao = a - b;
let mult = a * b;
let div = a / b;
let modulo = a % b;

if(a > b) {
    console.log("O número " + a + " é maior que o número " + b);
} else {
    console.log("O número " + a + " é menor ou igual ao número " + b);
}

if(a > b && a > c) {
    console.log("O número " + a + " é maior que os números " + b + " e " + c);
} else {
    console.log("O número " + a + " é menor que pelo menos um dos números entre " + b + " ou " + c);
}

if(a > 0) {
    console.log("positive");
} else if(a < 0) {
    console.log("negative"); 
} else {
    console.log("zero");
}

const angle1 = 60;
const angle2 = 60;
const angle3 = 80;

if(angle1 > 0 && angle2 > 0 && angle3 > 0){
    if(angle1 + angle2 + angle3 == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Angulos inválidos")
}

switch