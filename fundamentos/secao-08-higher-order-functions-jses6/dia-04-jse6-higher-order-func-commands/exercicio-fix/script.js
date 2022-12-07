// Faça uma lista com as suas frutas favoritas
const specialFruit = ["Maçã", "Morango", "Pera"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["Chocolate", "Chantilly", "Brigadeiro"];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

const user = {
  name: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const userFullInfo = { ...user, ...jobInfos }

console.log(userFullInfo);

const { name, age , nationality, profession, squad, squadInitials } = userFullInfo

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`)