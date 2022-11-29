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
      birthYear: 1921,
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

const authorBornIn1947 = (books) => {
  return books.find((element) => element.author.birthYear === 1947).author.name;
};

console.log(authorBornIn1947(books));

const smallerName = (books) => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((element) => {
    if (!nameBook || nameBook.length > element.name.length) {
      nameBook = element.name;
    }
    console.log(nameBook);
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

console.log(smallerName(books));

const getNamedBook = (books) => {
  // escreva seu código aqui
  return books.find((element) => element.name.length === 26);
};
console.log(getNamedBook(books))

function everyoneWasBornOnSecXX(books) {
  // escreva seu código aqui
  return books.every((element) => (element.author.birthYear > 1800 && element.author.birthYear < 2000))
}

console.log(everyoneWasBornOnSecXX(books))

const someBookWasReleaseOnThe80s = (books) => {
  // escreva seu código aqui
  return books.some((element) => (element.releaseYear > 1980 && element.releaseYear < 1990))
}

console.log(someBookWasReleaseOnThe80s(books))

const expectedResult = false;

function authorUnique(books) {
  // escreva seu código aqui
  let contador = 0;
  let result = true
  books.forEach((element) => {
    contador = 0;
    books.forEach((comparator) => {
        if (element.author.birthYear === comparator.author.birthYear) {
            contador +=1
        }
    })
    if (contador > 1)  {
        result = false;
        return result;
    }
  })
  return result;
}

console.log(authorUnique(books))