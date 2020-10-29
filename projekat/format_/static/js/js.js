const file = document.querySelector('.choose-file');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const json = document.querySelector('#json');
const next = document.querySelector('#next');
const form = document.querySelector('#form');
let isCreated = '';

yes.addEventListener('click', () => {
    file.innerHTML = `<input type="file" id="myfile" name="myfile">`;
    file.style.display = 'flex';
    const input = file.querySelector('input');
    input.addEventListener('change', () => {
        console.log(input.value);
    });
    isCreated = true;
});

no.addEventListener('click', () => {
    isCreated = 'no';
    console.log(isCreated);
    const p = document.querySelector('#q');
    p.textContent = 'Izaberite tip fajla';
    yes.style.display = 'none';
    no.style.display = 'none';
    const json = document.createElement('input');
    json.setAttribute('type', 'button');
    json.setAttribute('value', 'json');
    json.setAttribute('name', 'json');
    json.classList.add('button');

    const xml = document.createElement('input');
    xml.setAttribute('type', 'button');
    xml.setAttribute('value', 'xml');
    xml.setAttribute('name', 'xml');
    xml.classList.add('button');

    const custom = document.createElement('input');
    custom.setAttribute('type', 'button');
    custom.setAttribute('value', 'custom');
    custom.setAttribute('name', 'custom');
    custom.classList.add('button');
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
    if (isCreated == '') {
        e.preventDefault();
    }
});
