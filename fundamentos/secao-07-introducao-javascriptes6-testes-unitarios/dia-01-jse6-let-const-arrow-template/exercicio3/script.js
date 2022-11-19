const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Adiciona Turno no objeto
const addTurno = (objeto, key, value) => {
  objeto[key] = value;
};

addTurno(lesson2, "turno", "noite");

// console.log(lesson2);

// Lista as keys

const listarKeys = (objeto) => {
  const listaKeys = Object.keys(objeto);
  return listaKeys;
};

const listaKeys = listarKeys(lesson1);
// console.log(listaKeys);

// Mostra tamanho do objeto

const sizeObject = (objeto) => {
  const sizeObjetct = Object.keys(objeto).length;
  return sizeObject;
};

// console.log(sizeObject(lesson1));

// Justa os objetos

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// Descobre o total de alunos em todas as classe

const totalAlunos = (objeto) => {
  let somaAlunos = 0;
  for (let index in objeto) {
    somaAlunos += objeto[index].numeroEstudantes;
  }
  return somaAlunos;
};

console.log(totalAlunos(allLessons));

// Descobre posição da key

const getValueByNumber = (objeto, number) => {
  const myKeys = Object.values(objeto);
  return myKeys[number];
};

console.log(getValueByNumber(lesson1, 0));

// Existe chave e valor no objeto

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    console.log(index);
    if (entries[index][0] === key && entries[index][1] === value)
      isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, "professor", "Carlos"));

// Conta alunos por aula

const contaAlunos = (objeto, materia) => {
  let somaAlunos = 0;
  for (let index in objeto) {
    if (objeto[index].materia === materia) {
      somaAlunos += objeto[index].numeroEstudantes;
    }
  }
  return somaAlunos;
};

console.log(contaAlunos(allLessons, "Matemática"));

// Report das aulas

const createReport = (objeto, professor) => {
    let somaAlunos = 0;
    let aulasLecionadas = [];
    for (let index in objeto) {
      if (objeto[index].professor === professor) {
        aulasLecionadas.push(objeto[index].materia)
        somaAlunos += objeto[index].numeroEstudantes;
      }
    }
    const report = {};
    report.professor = professor;
    report.aulas = aulasLecionadas;
    report.estudantes = somaAlunos;
    return report;
};

console.log(createReport(allLessons, 'Maria Clara'));
