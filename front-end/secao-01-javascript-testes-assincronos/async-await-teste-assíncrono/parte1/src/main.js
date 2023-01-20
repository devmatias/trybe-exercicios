import './style.css';
import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

function handleError(error) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error.message,
    background: '#202020',
    color: '#fff',
  });
}

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    return handleError(error);
  }
}

buttonEl.addEventListener('click', handleClick);
