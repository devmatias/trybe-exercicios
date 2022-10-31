const substituaX = (nome) => {
  const frase = `Tryber x aqui!`;
  let array = frase.split(" ");
  for (word in array) {
    if (array[word] === "x") {
      array[word] = nome;
    }
  }
  let fraseReformulada = array.join(" ");
  return fraseReformulada;
};

// console.log(substituaX('Chama'));

const minhasSkills = (substituaX) => {
  const skills = ["JavaScript", "HTML", "CSS"];
  let message = `
    ${substituaX} 
    Minhas três principais habilidades são:`;
  for (word of skills) {
    message = `${message} 
    - ${word}`;
  }
  return message;
};

console.log(minhasSkills(substituaX("Matias")));
