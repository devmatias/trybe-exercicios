const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = (array) => {
  // retorne seu código aqui
  return array.reduce((accArray, currentValue) => {
    currentValue.map((element) => accArray.push(element));
    return accArray;
  }, []);
};

console.log(flatten(arrays));

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

const reduceNames = (books) => {
  // retorne seu código aqui
  return books.reduce((acc, currentValue, index) => {
    const myAuthors = books.length - 1 !== index ? `${currentValue.author.name}, ` : `${currentValue.author.name}.`
    return acc + myAuthors
  }, '')
};

console.log(reduceNames(books))

const averageAge = (books) => {
  // retorne seu código aqui
  return books.reduce((acc, currentValue) => {
    const age = currentValue.releaseYear - currentValue.author.birthYear;
    return acc + age
  }, 0) / books.length
}

console.log(averageAge(books))

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => {
    // retorne seu código aqui
    return books.reduce((bigger, currentValue) => {
        return bigger.name.length > currentValue.name.length ? bigger : currentValue;
    })
  }

  console.log(longestNamedBook())