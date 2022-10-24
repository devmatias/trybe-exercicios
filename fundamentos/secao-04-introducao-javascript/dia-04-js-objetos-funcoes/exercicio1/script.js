// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name :'Marta',
//     lastName : 'Silva',
//     age : 34,
//     medals : {
//         golden : 2,
//         silver : 3,
//     }
// }

// console.table(player);

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for(index in names){
//     console.log("Olá", names[index]);
// }

// let namesEntries = Object.entries(names);
// console.log(namesEntries);

// for(names of namesEntries){
//     console.log(names)
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

console.log(soma(10, 10));
console.log(subtracao(10, 10));
console.log(multiplicacao(10, 10));
console.log(divisao(10, 10));
console.log(modulo(10, 3));

function maior(a, b) {
    let resultado;
    if(a > b) {
        resultado = a;
    } else if(b > a) {
        resultado = b;
    } else { 
        resultado = "Os números são iguais";
    }
    return resultado;
}

console.log(maior(20, 20));

function maiorEm3(a, b, c) {
    let resultado;
    if(a > b && a > c) {
        resultado = a;
    } else if(b > c && b > a) {
        resultado = b;
    } else if(c > a && c > b){ 
        resultado = c;
    } else if(a === b && a === c){
        resultado = "Os números são iguais!";
    } else if(a === b && a > c) {
        resultado = "Os números em a e b são iguais e maiores que c!";
    } else if(b === c && b > a) {
        resultado = "Os números em b e c são iguais e maiores que a!";
    } else if(a === c && a > b) {
        resultado = "Os números em a e c são iguais e maiores que b!";
    }
    return resultado;
}

console.log(maiorEm3(50, 60, 80));

function descobrirSinal(a) {
    let resultado;
    if(a > 0) {
        resultado = "positivo";
    } else if(a < 0){
        resultado = "negativo";
    } else {
        resultado = "zero";
    }
    return resultado;
}


console.log(descobrirSinal(0));

function descobrirPoligono(a, b, c){
    let resultado;
    if(a > 0 && b > 0 && c > 0) {
        if(a + b + c === 180) {
            resultado = "O polígono é um triângulo!"
        } else {
            resultado = "O polígono não é um triângulo!"
        }
    } else {
        resultado = "Parâmetros inválidos!"
    }
    return resultado;
}

console.log(descobrirPoligono(25, 140, 15))