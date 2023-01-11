const getNationality = ({ firstName, nationality = "Brazilian" }) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: "João",
  lastName: "Jr II",
};

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian",
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
console.log(person);

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));
