const button = document.querySelector('#btn-1');
const form = document.querySelector('.form');
const count = document.querySelector('#count');
const chooseFile = document.querySelector('#myFile');
const submit = document.querySelector('#submit');
let attributes = [];

let id = 1;

function saveFile(event) {
    if (chooseFile.value == '') {
        event.preventDefault();
        // chooseFile.click();
        // submit.click();
        content = '';
        uriContent =
            'data:application/octet-stream,' + encodeURIComponent(content);
        window.open(uriContent, 'neuesDokument');
    } else {
        submit.click();
    }
}

submit.addEventListener('click', saveFile);

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

    let value = parseInt(count.value);
    count.value = value + 1;

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
