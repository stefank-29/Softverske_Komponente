const file = document.querySelector('.choose-file');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const json = document.querySelector('#json');
const next = document.querySelector('#next');
const form = document.querySelector('#form');
const typeInput = document.querySelector('#typeInput');

let isCreated = '';
let type = '';

yes.addEventListener('click', (e) => {
    file.innerHTML = `<input type="file" id="myfile" name="myfile">`;
    file.style.display = 'flex';
    const input = file.querySelector('input');
    input.addEventListener('change', () => {
        console.log(input.value);
    });
    isCreated = 'yes';
    e.target.classList.add('active');
});

no.addEventListener('click', () => {
    isCreated = 'no';
    const p = document.querySelector('#q');
    p.textContent = 'Izaberite tip fajla';
    yes.style.display = 'none';
    no.style.display = 'none';
    const json = document.createElement('input');
    json.setAttribute('type', 'button');
    json.setAttribute('value', 'json');
    json.setAttribute('name', 'json');
    json.classList.add('button');
    json.addEventListener('click', (e) => {
        removeActionHighlight();
        e.target.classList.add('active');
        type = 'json';
        typeInput.value = 'json';
    });

    const xml = document.createElement('input');
    xml.setAttribute('type', 'button');
    xml.setAttribute('value', 'xml');
    xml.setAttribute('name', 'xml');
    xml.classList.add('button');
    xml.addEventListener('click', (e) => {
        removeActionHighlight();
        e.target.classList.add('active');
        type = 'xml';
        typeInput.value = 'xml';
    });

    const custom = document.createElement('input');
    custom.setAttribute('type', 'button');
    custom.setAttribute('value', 'custom');
    custom.setAttribute('name', 'custom');
    custom.classList.add('button');
    custom.addEventListener('click', (e) => {
        removeActionHighlight();
        e.target.classList.add('active');
        type = 'custom';
        typeInput.value = 'custom';
    });

    const removeActionHighlight = () => {
        json.classList.remove('active');
        xml.classList.remove('active');
        custom.classList.remove('active');
    };

    file.appendChild(json);
    file.appendChild(xml);
    file.appendChild(custom);
    // file.innerHTML = `<input class='button' type="button" id='json'>
    // <button class='button' id='xml'>xml</button>
    // <button class='button' id='custom'>custom</button> `;
    file.style.display = 'flex';
});
// form.addEventListener('submit', (e) => {
//     console.log('dasdsa');
//     e.preventDefault();
//     window.history.back();
// });

next.addEventListener('click', (e) => {
    const path = document.querySelector('#myfile');

    // console.log(isCreated);
    // console.log(path.value);

    if (
        isCreated == '' ||
        (isCreated == 'no' && type == '') ||
        (isCreated == 'yes' && path.value == '')
    ) {
        e.preventDefault();
    }
});
