// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

console.log(professionalBoard)

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let myEmployee = '';
  for (let employee of professionalBoard) {
    if (employee.id === id) {
      myEmployee = employee;
      break;
    }
  }
  if (!myEmployee) throw new Error("ID não identificada");
  if (!myEmployee[detail]) throw new Error("Informação indisponível");
  return myEmployee[detail];
};

const verifySearchEmployee = (id, detail) => {
  try {
    console.log(searchEmployee(id, detail));
  } catch (e) {
    console.log(e.message);
  }
};

verifySearchEmployee("9999-4", "specialities");

module.exports = { searchEmployee, professionalBoard };
