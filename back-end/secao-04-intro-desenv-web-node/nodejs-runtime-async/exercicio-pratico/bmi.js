const readline = require('readline-sync');

const bmi = (peso, altura) => {
  return peso / (altura * altura)
};

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

const bmiResult = bmi(peso, altura);

switch (true) {
  case bmiResult < 18.5:
    console.log('Abaixo do peso(magreza)')
    break;
  case bmiResult >= 18.5 && bmiResult <= 24.9:
    console.log('Peso Normal)')
    break;
  case bmiResult >= 25 && bmiResult <= 29.9:
    console.log('Acima do peso (sobrepeso))')
    break;
  case bmiResult >= 30 && bmiResult <= 34.9:
    console.log('Obesidade grau I)')
    break;
  case bmiResult >= 35 && bmiResult <= 39.9:
    console.log('Obesidade grau II)')
    break;
  case bmiResult >= 40:
    console.log('Obesidade graus III e IV)')
    break;
  default:
    console.log('Valor não encontrado')
}

console.log(bmiResult)

module.exports = bmi;