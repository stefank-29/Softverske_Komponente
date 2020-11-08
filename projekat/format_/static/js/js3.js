const button = document.querySelector('#btn-1');
const form = document.querySelector('.form');
const count = document.querySelector('#count');
let attributes = [];

let id = 1;

function addInputDiv(e) {
    e.preventDefault();

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input__div');
    // const input = document.createElement('input');
    // input.setAttribute('type', 'text');
    // input.setAttribute('name', `attribute-${id}`);
    // input.setAttribute('id', `attribute-${id}`);
    // input.required = true;

    // const button = document.createElement('button');
    // button.classList.add('button');
    // button.setAttribute('id', `btn-${id++}`);
    // button.textContent = 'Dodaj';
    // button.addEventListener('click', addInputDiv);

    // let value = parseInt(count.value);
    // count.value = value + 1;
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
    button.addEventListener('click', addInputs);
    inputDiv.appendChild(button);

    inputDiv.appendChild(input);
    inputDiv.appendChild(button);

    form.appendChild(inputDiv);

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
    button.addEventListener('click', addInputs);
    inputDiv.appendChild(button);
}

//button.addEventListener('click', addInputDiv);

window.onload = addInputs;
