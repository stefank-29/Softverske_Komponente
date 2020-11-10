const button = document.querySelector('#btn-1');
const form = document.querySelector('.form');
const count = document.querySelector('#count');
const chooseFile = document.querySelector('#myFile');
const submit = document.querySelector('#submit');
const isAutoinc = document.querySelector('.hidden');
// const downloadsFolder = require('downloads-folder');
//import df from 'downloads-folder';

let attributes = [];

let id = 1;
let flag = 0;

function saveFile(event) {
    if (flag == 0) {
        event.preventDefault();

        // chooseFile.click();
        // submit.click();
        // json = '';
        // uriContent =
        //     'data:application/json;charset=UTF-8,' + encodeURIComponent(json);
        // window.open(uriContent, 'neuesDokument');
        // json = '';
        // var uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(json);
        // var link = document.createElement('a');
        // link.setAttribute('download', 'file.json');
        // link.setAttribute('href', uri);
        // document.body.appendChild(link);
        // link.click();
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((resp) => resp.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'todo-1.json';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                //alert('your file has downloaded!'); // or you know, something with better UX...
                flag += 1;

                saveFile(event);
            })
            .catch(() => alert('oh no!'));
    } else {
        submit.click();
        return;
    }

    //console.log(df());
}

//submit.addEventListener('click', saveFile);

function addInputDiv(e) {
    e.preventDefault();

    const inputDiv2 = document.createElement('div');
    inputDiv2.classList.add('input__div');
    inputDiv2.setAttribute('id', `${id}`);

    const attributesHeader = document.querySelector('.formHeader');
    let len = attributesHeader.childElementCount;

    if (isAutoinc.textContent == '0') {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `id-${id}`);
        input.setAttribute('id', `id-${id}`);
        input.setAttribute('value', `${id}`);
        input.required = true;
        input.disabled = true;

        inputDiv2.appendChild(input);
    } else {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `${id}`);
        input.setAttribute('id', `${id}`);
        input.required = true;
        inputDiv2.appendChild(input);
    }

    for (let i = 1; i < len; i++) {
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
    if (isAutoinc.textContent == '0') {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `id-1`);
        input.setAttribute('id', `id-1`);
        input.setAttribute('value', `1`);
        input.required = true;
        input.disabled = true;

        inputDiv.appendChild(input);
    } else {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `id-1`);
        input.setAttribute('id', `id-1`);
        input.required = true;
        inputDiv.appendChild(input);
    }

    for (let i = 1; i < len; i++) {
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
