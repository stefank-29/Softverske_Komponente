const file = document.querySelector('.choose-file');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const json = document.querySelector('#json');
const next = document.querySelector('#next');
let isCreated;

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
    const p = document.querySelector('#q');
    p.textContent = 'Izaberite tip fajla';
    yes.style.display = 'none';
    no.style.display = 'none';
    file.innerHTML = `<button class='button' id='json'>json</button>
	<button class='button' id='xml'>xml</button>
	<button class='button' id='custom'>custom</button> `;
    file.style.display = 'flex';
    isCreated = false;
});

next.addEventListener('click', () => {
    console.log(isCreated);
});
