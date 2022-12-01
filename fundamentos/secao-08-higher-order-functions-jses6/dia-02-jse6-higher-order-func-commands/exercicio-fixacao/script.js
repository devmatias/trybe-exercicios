const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// Adicione seu código aqui

//   console.log(people);

people.sort((a, b) => (a.age > b.age ? 1 : -1));
//   console.log(people)

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

const fullNames = persons.map(
  (person) => `${person.firstName} ${person.lastName}`
);

// console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const myList = products.map((element, index) => {
    const myObject = {};
    myObject[element] = prices[index];
    return myObject
})

console.log(myList)