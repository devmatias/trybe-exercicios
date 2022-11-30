const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = (objectArray) => {
  const myStringArray = objectArray.map(
    (element) => `${element.name} - ${element.genre} - ${element.author.name}`
  );
  return myStringArray;
};

console.log(formatedBookNames(books));

const formatedAuthorNamesBirth = (objectArray) => {
  // escreva seu código aqui
  const myStringArray = objectArray.map(
    (element) => `${element.author.name} - ${element.author.birthYear}`
  );
  return myStringArray;
};

console.log(formatedAuthorNamesBirth(books));

const expectedResult = [
  {
    author: "Isaac Asimov",
    age: 31,
  },
  {
    author: "H. P. Lovecraft",
    age: 38,
  },
  {
    author: "Stephen King",
    age: 39,
  },
  {
    author: "George R. R. Martin",
    age: 43,
  },
  {
    author: "Frank Herbert",
    age: 45,
  },
  {
    author: "J. R. R. Tolkien",
    age: 62,
  },
];

const nameAndAge = (objectArray) => {
  // escreva seu código aqui
  const myStringArray = objectArray.map((element) => {
    const newObject = { author: element.author.name, age: element.releaseYear - element.author.birthYear, }
    return newObject
  });
      myStringArray.sort((a, b) => a.age - b.age)
  return myStringArray;
};

console.log(nameAndAge(books))