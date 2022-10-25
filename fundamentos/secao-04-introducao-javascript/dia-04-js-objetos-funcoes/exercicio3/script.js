function palindromo(word) {
    let wordReverse = ""
    let resultado;
    for(let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
    }
    console.log(wordReverse);
    if(wordReverse === word){
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;

}

// console.log(palindromo("gorila"));

let arrayTeste = [2, 3, 6, 7, 10, 1] ;

function maiorIndice(array) {
    let maior;
    let biggerIndex;
    for(let i = 0; i < array.length; i++) {
        if(maior === undefined || maior < array[i]) {
            maior = array[i];
            biggerIndex = i;
        }
    }
    return biggerIndex;
}

// console.log(maiorIndice(arrayTeste));


// let arrayTeste2 = [2, 3, 6, 7, 10, 0, -3] ;

function menorIndice(array) {
    let menor;
    let lowerIndex;
    for(let i = 0; i < array.length; i++) {
        if(menor === undefined || menor > array[i]) {
            menor = array[i];
            lowerIndex = i;
        }
    }
    return lowerIndex;
}

// console.log(menorIndice(arrayTeste2));

let arrayTeste3 = [3, 5, 5, 5, 8, 2, 3];

function maiorIndex(array) {
    let maisRepetido = 0;
    let maiorCont = 0;
    for(let i = 0; i < array.length; i++){
        let cont = 0;
        for(let i2 = 0; i2 < array.length; i2++) {
            if(array[i] === array[i2]) {
                cont++;
            }
            if(cont > maiorCont) {
                maiorCont = cont;
                maisRepetido = array[i2];
            }
        }
        
    }
    return maisRepetido;
}

// console.log(maiorIndex(arrayTeste3));

function somatório(number) {
    let resultado;
    if(number > 0){
        resultado = 0;
        for(let index = 1; index <= number; index++){
            resultado = resultado + index;
        }
    } else {
        resultado = "Número inválido";
    }

    return resultado;
}

// console.log(somatório(7));

function comparadorDeString(string1, string2) {
    let resultado;
    let index2 = string2.length - 1;
    console.log(string1.length)
    if(string1.length > string2.length) {
        for(let index = string1.length - 1; index2 >= 0; index--){
            console.log(string2[index2], string1[index]);
            if(string2[index2] !== string1[index]){
                resultado = false;
                break;
            } else {
                resultado = true;
            }
            index2 -= 1;

            
        }
    } else {
        resultado = "Parâmetros inválidos";
    }
    return resultado;
}

console.log(comparadorDeString("trybe", "ibe"));