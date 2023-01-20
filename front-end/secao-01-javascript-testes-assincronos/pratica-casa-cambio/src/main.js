import './style.css';
import Swal from 'sweetalert2';

const url = 'https://api.exchangerate.host/latest?base=';
const inputCurrency = document.querySelector('.input-currency');
const currencyContainer = document.querySelector('.currency-container');

function createBlockFirstElement(parentElement) {
  const newFirstElementBlock = document.createElement('div');
  newFirstElementBlock.classList.add('first-element');
  const newCoinImage = document.createElement('img');
  newCoinImage.src = './src/imgs/coins.png';
  newCoinImage.alt = 'coins';
  const newHeading5 = document.createElement('h5');
  newFirstElementBlock.appendChild(newCoinImage);
  newFirstElementBlock.appendChild(newHeading5);
  parentElement.appendChild(newFirstElementBlock);
}

function createCurrencyBlock(parentElement) {
  const newRate = document.createElement('div');
  newRate.classList.add('currency-block');
  createBlockFirstElement(newRate);
  const newHeading6 = document.createElement('h6');
  newRate.appendChild(newHeading6);
  parentElement.appendChild(newRate);
}

function deleteChild() {
  let child = currencyContainer.lastElementChild;
  while (child) {
    currencyContainer.removeChild(child);
    child = currencyContainer.lastElementChild;
  }
}

function popupError(error) {
  Swal.fire({
    icon: 'error',
    title: 'Ops...',
    text: error,
    background: '#303030',
    color: '#FFF',
    width: '50vw',
  });
}

function createHeading() {
  const headingContainer = document.createElement('h2');
  headingContainer.innerHTML = `Valores referentes a 1 ${inputCurrency.value}`;
  currencyContainer.appendChild(headingContainer);
}

async function fetchAPI() {
  try {
    const response = await fetch(url + inputCurrency.value);
    const data = await response.json();
    return data;
  } catch (error) {
    popupError(error.message);
  }
}

function transformDataInBlocks(rates) {
  const ratesInArray = Object.entries(rates);
  ratesInArray.forEach((rateData) => {
    const [rate, value] = rateData;
    createCurrencyBlock(currencyContainer);
    const getCurrencyBlocks = document.querySelectorAll('.currency-block');
    getCurrencyBlocks[getCurrencyBlocks.length - 1]
      .firstElementChild.lastElementChild.innerHTML = rate;
    getCurrencyBlocks[getCurrencyBlocks.length - 1]
      .lastElementChild.innerHTML = Number(value).toFixed(2);
  });
}

async function displayCoins() {
  const data = await fetchAPI();
  const { rates } = data;
  if (!Object.keys(rates).some(
    (rate) => rate === inputCurrency.value,
  )) {
    popupError('Moeda inexistente!');
    return;
  }
  createHeading();
  transformDataInBlocks(rates);
}

function searchCurrency() {
  const searchButton = document.querySelector('.btn-search');

  searchButton.addEventListener('click', () => {
    if (!inputCurrency.value) {
      popupError('Você precisa passar uma moeda!');
      return;
    }
    deleteChild();
    displayCoins();
  });
}

searchCurrency();
