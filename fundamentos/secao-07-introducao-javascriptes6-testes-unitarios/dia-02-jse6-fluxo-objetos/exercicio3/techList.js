const techList = (array, name) => {
  const myObjArray = [];
  const sortedArray = array.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let index = 0; index < sortedArray.length; index += 1) {
    const myObj = {};
    myObj.tech = sortedArray[index];
    myObj.name = name;
    myObjArray.push(myObj);
  }
  const result = array.length === 0 ? "Vazio!" : myObjArray;
  console.log(result);
  return result;
};

const hydrate = (string) => {
  const noComma = string.replace(",", ".");
  const regex = new RegExp(/\d+\.*\d*/g);
  let finalMessage = "";
  const ocorrencias = noComma.match(regex);
  if (ocorrencias) {
    const valorSomado = ocorrencias.reduce((acumulador, valorAtual) => {
      const acumuladorNumber = parseFloat(acumulador);
      const valorAtualNumber = parseFloat(valorAtual);
      return acumuladorNumber + valorAtualNumber;
    });
    if (valorSomado == 1) {
      finalMessage = "1 copo de água";
    } else if (valorSomado > 1) {
      finalMessage = `${valorSomado} copos de água`;
    } else {
      finalMessage = "Valor inválido";
    }
  } else {
    finalMessage = "Nenhum copo de água";
  }
  return finalMessage;
};

console.log(hydrate("Me mama"));

module.exports = { techList, hydrate };
