let romanNumbersTranscription = {
    I : 1,
    IV : 4,
    V : 5,
    IX : 9,
    X : 10,
    XL : 40,
    L : 50,
    XC : 90,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000,
}

function conversorNumerosRomanos(romanos) {
    let capitalizador = romanos.toUpperCase();
    console.log(romanNumbersTranscription[capitalizador[0]]);
    let resultado = 0;
    let holder = 0;
    for(let index = 0; index < capitalizador.length; index++) {
        for(number in romanNumbersTranscription){
            if(capitalizador[index] === number) {
                if(holder === 0) {
                    holder += romanNumbersTranscription[number];
                    console.log("holder atual:", holder);
                } else if(holder < romanNumbersTranscription[number]){
                    resultado += romanNumbersTranscription[number] - holder;
                    console.log("resultado atual:", resultado);
                    holder = 0;
                } else {
                    resultado += holder;
                    holder = 0;
                    holder += romanNumbersTranscription[number];
                    console.log("resultado atual:", resultado);
                    console.log("holder atual:", holder);
                }
                
                break;
            }
        }
    }
    return resultado;
}

console.log(conversorNumerosRomanos("ix"));