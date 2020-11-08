const button = document.querySelector('#btn-1');
const form = document.querySelector('.form');
const count = document.querySelector('#count');
let attributes = [];

let id = 1;

function addInputDiv(e) {
    e.preventDefault();

    const inputDiv2 = document.createElement('div');
    inputDiv2.classList.add('input__div');
    inputDiv2.setAttribute('id', `${id}`);

    const attributesHeader = document.querySelector('.formHeader');
    let len = attributesHeader.childElementCount;

    for (let i = 0; i < len; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `${attributes[i]}-${id}`);
        input.setAttribute('id', `${attributes[i]}-${id}`);
        input.required = true;
        inputDiv2.appendChild(input);
    }
    id++;

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Dodaj';
    button.addEventListener('click', addInputDiv);
    inputDiv2.appendChild(button);

    form.appendChild(inputDiv2);

    this.parentNode.removeChild(this);
}

function addInputs() {
    const attributesHeader = document.querySelector('.formHeader');
    const headerItems = attributesHeader.querySelectorAll('.headerItem');
    const inputDiv = document.querySelector('.input__div');
    let len = attributesHeader.childElementCount;

    headerItems.forEach((item) => {
        attributes.push(item.textContent);
    });

    for (let i = 0; i < len; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `${attributes[i]}-${id}`);
        input.setAttribute('id', `${attributes[i]}-${id}`);
        input.required = true;
        inputDiv.appendChild(input);
    }
    id++;

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Dodaj';
    button.addEventListener('click', addInputDiv);
    inputDiv.appendChild(button);
}

//button.addEventListener('click', addInputDiv);

window.onload = addInputs;
