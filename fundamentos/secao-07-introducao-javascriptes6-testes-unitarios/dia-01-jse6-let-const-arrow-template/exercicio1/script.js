// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   let newKey = 'lastName';
//   const lastName = 'Ferreira';

//   const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//     objeto[novaPropriedade] = valor
//   };

//   adicionaPropriedade(customer, newKey, lastName);
//   console.log(customer);

//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;

//   adicionaPropriedade(customer, newKey, fullName);
//   console.log(customer);

//   pessoaEstudante = {
//     nome: 'Matias',
//     email: 'matias@trybe.com',
//     telefone: '666952353',
//     github: 'github.com/matias',
//     linkedin: 'linkedin.com/matias',
//   }

//   adicionaPropriedade(pessoaEstudante, 'idade', '25');
//   console.log(pessoaEstudante)

// const student1 = {
//     html: 'Muito Bom',
//     css: 'Bom',
//     javascript: 'Ótimo',
//     softskills: 'Ótimo',
//   };

//   const student2 = {
//     html: 'Bom',
//     css: 'Ótimo',
//     javascript: 'Ruim',
//     softskills: 'Ótimo',
//     git: 'Bom', // chave adicionada
//   };

//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in arrayOfSkills) {
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };

//   console.log('Estudante 1');
//   listSkills(student1);

//   console.log('Estudante 2');
//   listSkills(student2);

// const student = {
//     html: 'Muito Bom',
//     css: 'Bom',
//     javascript: 'Ótimo',
//     softskill: 'Ótimo',
//   };

//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }

//     return skills;
//   };

//   const listSkillsValuesWithValues = (student) => {
//     return Object.values(student);
//   }

//   // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));

//   // Com Object.values
//   console.log(listSkillsValuesWithValues(student));

// const coutries = {
//     franca: 'Paris',
//     brasil: 'Brasília',
//     espanha: 'Madrid',
//     portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(coutries);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

// const person = {
//   name: "Alberto",
//   lastName: "Gomes",
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: "engenheiro",
// };

// const family = {
//   children: ["Maria", "João"],
//   wife: "Ana",
// };

// Object.assign(person, info, family);
// console.log(person);

// const person = {
//   name: "Roberto",
// };

// const lastName = {
//   lastName: "Silva",
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = "Maria";

// console.log("Mudando a propriedade name através do objeto clone");
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log("--------------");

// person.lastName = "Ferreira";

// console.log("Mudando a propriedade lastName através do objeto person");
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);
