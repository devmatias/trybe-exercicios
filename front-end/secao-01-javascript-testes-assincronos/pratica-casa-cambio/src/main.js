import './style.css';
import Swal from 'sweetalert2';

function createCurrencyBlock(fatherElement) {
  const newRate = document.createElement('div');
  newRate.classList.add('currency-block');
  const newFirstElementBlock = document.createElement('div');
  newFirstElementBlock.classList.add('first-element');
  const newCoinImage = document.createElement('img');
  newCoinImage.src = './src/imgs/coins.png';
  newCoinImage.alt = 'coins';
  const newHeading5 = document.createElement('h5');
  newFirstElementBlock.appendChild(newCoinImage);
  newFirstElementBlock.appendChild(newHeading5);
  newRate.appendChild(newFirstElementBlock);
  const newHeading6 = document.createElement('h6');
  newRate.appendChild(newHeading6);
  fatherElement.appendChild(newRate);
}

function deleteChild() {
  const currencyContainer = document.querySelector('.currency-container');
  let child = currencyContainer.lastElementChild;
  while (child) {
    currencyContainer.removeChild(child);
    child = currencyContainer.lastElementChild;
  }
}

function searchCurrency() {
  const currencyContainer = document.querySelector('.currency-container');
  const inputCurrency = document.querySelector('.input-currency');
  const searchButton = document.querySelector('.btn-search');
  const url = 'https://api.exchangerate.host/latest?base=';

  searchButton.addEventListener('click', () => {
    if (!inputCurrency.value) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Você precisa passar uma moeda!',
        background: '#303030',
        color: '#FFF',
        width: '50vw',

      });
      return;
    }

    deleteChild();

    fetch(url + inputCurrency.value)
      .then((response) => response.json())
      .then((data) => {
        const { rates } = data;
        if (!Object.keys(rates).some((rate) => rate === inputCurrency.value)) {
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Moeda não existente!',
            background: '#303030',
            color: '#FFF',
            width: '50vw',
          });
          return;
        }
        const headingContainer = document.createElement('h2');
        headingContainer.innerHTML = `Valores referentes a 1 ${inputCurrency.value}`;
        currencyContainer.appendChild(headingContainer);
        console.log(rates);
        for (const rate in rates) {
          createCurrencyBlock(currencyContainer);
          const getCurrencyBlocks = document.querySelectorAll('.currency-block');
          getCurrencyBlocks[getCurrencyBlocks.length - 1]
            .firstElementChild.lastElementChild.innerHTML = rate;
          getCurrencyBlocks[getCurrencyBlocks.length - 1]
            .lastElementChild.innerHTML = Number(rates[rate]).toFixed(2);
        }
      });
  });
}

searchCurrency();
