const readline = require('readline-sync');

const fibonacci = () => {
  let quantidadeNumeros = readline.questionInt('Qual a quantidade de números exibidos? ');
  if(quantidadeNumeros === 0) {
    console.log('O número deve ser maior que 0')
    quantidadeNumeros = readline.questionInt('Qual a quantidade de números exibidos? ');
  }
  const fiboSequence = [0, 1]
  for(i = 1; i < quantidadeNumeros; i++) {
    fiboSequence.push(fiboSequence[i] + fiboSequence[i - 1])
  }
  if(fiboSequence[0] === 0) fiboSequence.shift()
  return fiboSequence
}

const returnPromise = (arg1, arg2, arg3) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof arg1 !== 'number' || typeof arg2 !== 'number' || typeof arg3 !== 'number') {
      reject('Informe apenas números')
    }
    const result = (arg1 + arg2) * arg3;
    if(result < 50) reject('Valor muito baixo')
    return resolve(result);
  })
  return promise;
}

const main = async() => {
  try {
    const resultPromise = await returnPromise(1, 'oi', 7);
    console.log(resultPromise)
  } catch (error) {
    console.log(error)
  }
}

main()