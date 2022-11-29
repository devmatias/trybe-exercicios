const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com",
];

// Adicione seu código aqui

emailListInData.forEach((email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
});

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const myNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// console.log(myNumber);

const names = ["João", "Irene", "Fernando", "Maria"];

// Adicione seu código aqui

const myName = names.find((name) => name.length === 5);

// console.log(myName);

const musicas = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

// Adicione seu código aqui

const myMusic = musicas.find((music) => music.id === "31031685");

// console.log(myMusic);

const myTestOnMusics = musicas.find((music) => {
//   console.log(music);
  return music.id === "31031687";
});

// console.log(myTestOnMusics);

const listNames = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson"];

const verifyFirstLetter = (letter, names) => {
    return names.some((name) => {
        return name[0] === letter
    })
}

console.log(verifyFirstLetter("J", listNames)); // true
console.log(verifyFirstLetter("X", listNames)); // false
