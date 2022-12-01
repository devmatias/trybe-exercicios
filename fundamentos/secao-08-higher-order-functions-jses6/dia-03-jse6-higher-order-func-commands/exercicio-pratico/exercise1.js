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

const fantasyOrScienceFiction = (books) => {
  // escreva seu código aqui
  return books.filter(
    (element) =>
      element.genre === "Ficção Científica" || element.genre === "Fantasia"
  );
};

console.log(fantasyOrScienceFiction(books));

const oldBooksOrdered = (books) => {
  // escreva seu código aqui
  const oldBooks = books.filter((element) => 2022 - element.releaseYear > 60);
  oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
  return oldBooks;
};

console.log(oldBooksOrdered(books));

const booksByAuthorBirthYear = (books, birthYear) => {
  // escreva seu código aqui
  const booksByBirthYear = books.filter(
    (element) => element.author.birthYear === birthYear
  );
  return booksByBirthYear.map((element) => element.name);
};
const result = booksByAuthorBirthYear(books, 1920);
console.log(result);

const fantasyOrScienceFictionAuthors = (books) => {
  // escreva seu código aqui
  const filteredItems = books.filter(
    (element) =>
      element.genre === "Ficção Científica" || element.genre === "Fantasia"
  );
  return filteredItems
    .map((element) => element.author.name)
    .sort((a, b) => a.localeCompare(b));
};

console.log(fantasyOrScienceFictionAuthors(books));

const oldBooks = (books) => {
  // escreva seu código aqui
  const oldBooks = books
    .filter((element) => 2022 - element.releaseYear > 60)
    .map((element) => element.name);
  return oldBooks;
};

console.log(oldBooks(books));

const expectedResult = "O Senhor dos Anéis";

const authorWith3DotsOnName = (books) => {
  // escreva seu código aqui
  const nonDots = new RegExp(/[^.]/g);
  const filteredItem = books.find((element) => {
    const changingCaracter = element.author.name.replace(nonDots, "");
    return changingCaracter.length === 3
  }).name
  return filteredItem
};

console.log(authorWith3DotsOnName(books));
