const a = 0;
const b = 30;
const c = 40;

let soma = a + b;
let subtracao = a - b;
let mult = a * b;
let div = a / b;
let modulo = a % b;

if (a > b) {
  console.log("O número " + a + " é maior que o número " + b);
} else {
  console.log("O número " + a + " é menor ou igual ao número " + b);
}

if (a > b && a > c) {
  console.log("O número " + a + " é maior que os números " + b + " e " + c);
} else {
  console.log(
    "O número " +
      a +
      " é menor que pelo menos um dos números entre " +
      b +
      " ou " +
      c
  );
}

if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

const angle1 = 60;
const angle2 = 60;
const angle3 = 80;

if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
  if (angle1 + angle2 + angle3 === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Angulos inválidos");
}

let peçaDeXadrez = "Bispo";
let peçaDeXadrezLowerCase = peçaDeXadrez.toLowerCase();

switch (peçaDeXadrezLowerCase) {
  case "cavalo":
    console.log("A peça " + peçaDeXadrezLowerCase + " se movimenta em L");
    break;
  case "bispo":
    console.log(
      "A peça " + peçaDeXadrezLowerCase + " se movimenta na diagonal"
    );
    break;
  case "peão":
    console.log(
      "A peça " +
        peçaDeXadrezLowerCase +
        " se movimenta em uma casa adiante e abate outras peças em uma casa na diagonal"
    );
    break;
  case "rainha":
    console.log(
      "A peça " +
        peçaDeXadrezLowerCase +
        " se movimenta na diagonal, na horizontal ou na vertical"
    );
    break;
  case "rei":
    console.log(
      "A peça " +
        peçaDeXadrezLowerCase +
        " se movimenta em uma casa na diagonal, na horizontal ou na vertical"
    );
    break;
  case "torre":
    console.log(
      "A peça " +
        peçaDeXadrezLowerCase +
        " se movimenta na horizontal ou na vertical"
    );
    break;
  default:
    console.log("Peça inválida");
    break;
}

let nota = 80;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("E");
} else {
  console.log("Nota inválida");
}

const num1 = 4;
const num2 = 10;
const num3 = 9;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

const custo = 190;
const venda = 200;
let totalVendido = 0;
let imposto = 1.2;
let custoComImposto = custo * imposto;
let vendasTotais = venda * totalVendido;
let custoTotal = custoComImposto * totalVendido;
let lucro = vendasTotais - custoTotal;

if (venda > custo) {
  if (venda > custoComImposto) {
    if (totalVendido > 0) {
      console.log(
        "Seu total de vendas foi R$" +
          vendasTotais +
          ", com custo total de R$" +
          custoTotal +
          ", com lucro de R$" +
          lucro
      );
    } else {
      console.log("Você não vendeu o suficiente!");
    }
  } else {
    console.log("Seu custo com imposto é maior que o valor da sua venda!");
  }
} else {
  console.log("Seu custo é maior que o valor da sua venda!");
}

let salarioBruto = 6000.00;


if(salarioBruto > 5189.82) {
    let descINSS = 570.88;
    let salarioDescINSS = salarioBruto -  descINSS;
    if(salarioDescINSS > 4664.68) {
        let descIR = salarioDescINSS * 0.275;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido1 é R$" + salarioLiquido);
    } else {
        let descIR = salarioDescINSS * 0.225;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido2 é R$" + salarioLiquido);
    }
} else if(salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    let descINSS = salarioBruto * 0.11;
    let salarioDescINSS = salarioBruto -  descINSS;
    if(salarioDescINSS > 3751.06 && salarioDescINSS <= 4664.68) {
        let descIR = salarioDescINSS * 0.225;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido3 é R$" + salarioLiquido);
    } else if(salarioDescINSS > 2826.66 && salarioDescINSS <= 3751.06){
        let descIR = salarioDescINSS * 0.15;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido4 é R$" + salarioLiquido);
    } else if(salarioDescINSS > 1903.99 && salarioDescINSS <= 2826.66){
        let descIR = salarioDescINSS * 0.075;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido5 é R$" + salarioLiquido);
    }
} else if(salarioBruto > 1556.95 && salarioBruto <= 2594.93) {
    let descINSS = salarioBruto * 0.1;
    let salarioDescINSS = salarioBruto -  descINSS;
    if(salarioDescINSS > 1903.99 && salarioDescINSS <= 2826.66) {
        let descIR = salarioDescINSS * 0.075;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido6 é R$" + salarioLiquido);
    } else if(salarioDescINSS <= 1903.99){
        let descIR = 0;
        let salarioLiquido = salarioDescINSS - descIR;
        console.log("O salário líquido7 é R$" + salarioLiquido);
    }
} else if(salarioBruto <= 1556.95 ) {
    let descINSS = salarioBruto * 0.08;
    let salarioDescINSS = salarioBruto -  descINSS;
    let descIR = 0;
    let salarioLiquido = salarioDescINSS - descIR;
    console.log("O salário líquido é R$" + salarioLiquido);
}
