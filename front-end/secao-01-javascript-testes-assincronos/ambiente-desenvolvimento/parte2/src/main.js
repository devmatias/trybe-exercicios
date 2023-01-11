import validator from 'validator';
import './style.css';

class Validador {
    constructor() {
        this.form = document.querySelector('form');
    }

    validate() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkInput();
        });
    }

    checkInput() {
        const getInput = document.querySelector('input');
        const getSelect = document.querySelector('select');
        const getOutput = document.querySelector('p');
        let result = false;
        if (getSelect.value === 'ascii') result = validator.isAscii(getInput.value);
        if (getSelect.value === 'email') result = validator.isEmail(getInput.value);
        if (getSelect.value === 'uppercase') {
            result = validator.isUppercase(getInput.value);
        }
        if (getSelect.value === 'hexcolor') result = validator.isHexColor(getInput.value);
        if (getSelect.value === 'empty') {
            result = validator.isEmpty(getInput.value, { ignore_whitespace: false });
        }
        getOutput.innerText = `A validação retornou ${result}`;
    }
}

const start = new Validador();
start.validate();
