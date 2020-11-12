const button = document.querySelector('#btn-1');
const form = document.querySelector('.form');
const count = document.querySelector('#count');

//const downloadsFolder = require('downloads-folder');

let id = 2;

function addInputDiv(e) {
    e.preventDefault();

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input__div');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', `attribute-${id}`);
    input.setAttribute('id', `attribute-${id}`);
    input.required = true;

    const button = document.createElement('button');
    button.classList.add('button');
    button.setAttribute('id', `btn-${id++}`);
    button.textContent = 'Dodaj';
    button.addEventListener('click', addInputDiv);

    let value = parseInt(count.value);
    count.value = value + 1;

    inputDiv.appendChild(input);
    inputDiv.appendChild(button);

    form.appendChild(inputDiv);

    this.parentNode.removeChild(this);
}

button.addEventListener('click', addInputDiv);
