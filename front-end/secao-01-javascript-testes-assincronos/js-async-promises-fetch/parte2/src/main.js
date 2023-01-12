import "./style.css";

function generateRandomNumber() {
  return Math.floor(Math.random() * 731);
}


const baseURL = "https://superheroapi.com/api.php/6025500557526916";

function generateNewHero() {
  const imageHero = document.querySelector(".image-hero");
  const nameHero = document.querySelector(".name-hero");
  fetch(`${baseURL}/${generateRandomNumber()}`)
    .then((response) => response.json())
    .then((data) => {
        const { image } = data;
        console.log(data);
        imageHero.src = image.url;
        imageHero.alt = data.name;
        nameHero.innerHTML = data.name
    })
    .catch((error) => console.log(error));
}

generateNewHero()

function raffleNewHero() {
    const raffleButton = document.querySelector('.raffle');
    raffleButton.addEventListener('click', generateNewHero)
}

raffleNewHero()