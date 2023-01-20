import "./style.css";

function generateRandomNumber() {
  return Math.floor(Math.random() * 2);
}


const baseURLDog = "https://dog.ceo/api/breeds/image/random";
const baseURLCat = "https://aws.random.cat/meow";
const imageAnimal = document.querySelector(".image-animal");
const placeholder = document.querySelector('.placeholder');


function generateNewDog() {
  fetch(baseURLDog)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        imageAnimal.src = data.message;
        imageAnimal.alt = 'dog';
    })
    .catch((error) => console.log(error));
  imageAnimal.style.display = 'block';
  placeholder.style.display = 'none';
}

function generateNewCat() {
  fetch(baseURLCat)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        imageAnimal.src = data.file;
        imageAnimal.alt = 'cat';
    })
    .catch((error) => console.log(error));
  imageAnimal.style.display = 'block';
  placeholder.style.display = 'none';
}

function generateSurpriseAnimal() {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file || data.message;
      imageAnimal.src = petURL;
    });
  imageAnimal.style.display = 'block';
  placeholder.style.display = 'none';
}


function raffleNewAnimal() {
  const buttonRandomDog = document.querySelector('.random-dog');
  const buttonRandomCat = document.querySelector('.random-cat');
  const buttonSurprise = document.querySelector('.surprise');


  buttonRandomDog.addEventListener('click', generateNewDog)
  buttonRandomCat.addEventListener('click', generateNewCat)
  buttonSurprise.addEventListener('click', generateSurpriseAnimal)


}

raffleNewAnimal()