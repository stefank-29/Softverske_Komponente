const modalBg = document.querySelector('.modalBg');
const modal = document.querySelector('#modalForm');
const filter = document.querySelector('#filter');
const sort = document.querySelector('#sort');
const atrSelect = document.querySelector('#atrSelect');
const modalForm = document.querySelector('#modalForm');

function exitModal(e) {
    if (e.target !== this) {
        return;
    }
    e.target.style.display = 'none';
    modalForm.innerHTML = '';
}

function addNewRow(e) {
    e.preventDefault();
    this.parentNode.removeChild(this);

    const row = document.createElement('div');
    row.classList.add('modalDiv');

    let x = 1;

    modalForm.querySelectorAll('.modalDiv').forEach((row) => {
        x++;
        console.log(x);
    });

    let selectAttributes = document.createElement('select');
    selectAttributes = atrSelect.cloneNode(true);
    selectAttributes.setAttribute('name', `attribute-${x}`);
    row.appendChild(selectAttributes);

    const selectCompare = document.createElement('select');
    selectCompare.setAttribute('name', `compare-${x}`);
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'vece');
    option1.textContent = '>';
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'manje');
    option2.textContent = '<';
    const option3 = document.createElement('option');
    option3.setAttribute('value', 'jednako');
    option3.textContent = '==';
    const option4 = document.createElement('option');
    option4.setAttribute('value', 'pocinje');
    option4.textContent = 'pocinje sa';
    selectCompare.appendChild(option1);
    selectCompare.appendChild(option2);
    selectCompare.appendChild(option3);
    selectCompare.appendChild(option4);
    row.appendChild(selectCompare);

    const value = document.createElement('input');
    value.setAttribute('name', `value-${x}`);
    row.appendChild(value);

    const addBtn = document.createElement('button');
    addBtn.classList.add('button');
    addBtn.textContent = 'Dodaj';
    addBtn.addEventListener('click', addNewRow);
    row.appendChild(addBtn);

    modalForm.appendChild(row);
}

function addNewRowSort(e) {
    e.preventDefault();
    this.parentNode.removeChild(this);

    const row = document.createElement('div');
    row.classList.add('modalDiv');

    let x = 1;

    modalForm.querySelectorAll('.modalDiv').forEach((row) => {
        x++;
        console.log(x);
    });

    let selectAttributes = document.createElement('select');
    selectAttributes = atrSelect.cloneNode(true);
    selectAttributes.setAttribute('name', `attribute-${x}`);
    row.appendChild(selectAttributes);

    const selectCompare = document.createElement('select');
    selectCompare.setAttribute('name', `compare-${x}`);
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'rastuce');
    option1.textContent = 'Rastuce';
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'opadajuce');
    option2.textContent = 'Opadajuce';
    selectCompare.appendChild(option1);
    selectCompare.appendChild(option2);

    row.appendChild(selectCompare);

    const addBtn = document.createElement('button');
    addBtn.classList.add('button');
    addBtn.textContent = 'Dodaj';
    addBtn.addEventListener('click', addNewRowSort);
    row.appendChild(addBtn);

    modalForm.appendChild(row);
}

function addFilterModal(e) {
    e.preventDefault();
    modalBg.style.display = 'flex';
    const filterBtn = document.createElement('input');
    filterBtn.setAttribute('type', 'submit');
    filterBtn.setAttribute('value', 'Filter');
    filterBtn.setAttribute('name', 'filter');
    modalForm.appendChild(filterBtn);

    const row = document.createElement('div');
    row.classList.add('modalDiv');

    let selectAttributes = document.createElement('select');
    selectAttributes = atrSelect.cloneNode(true);
    selectAttributes.setAttribute('name', `attribute-1`);
    row.appendChild(selectAttributes);

    const selectCompare = document.createElement('select');
    selectCompare.setAttribute('name', `compare-1`);
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'vece');
    option1.textContent = '>';
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'manje');
    option2.textContent = '<';
    const option3 = document.createElement('option');
    option3.setAttribute('value', 'jednako');
    option3.textContent = '==';
    const option4 = document.createElement('option');
    option4.setAttribute('value', 'pocinje');
    option4.textContent = 'pocinje sa';
    selectCompare.appendChild(option1);
    selectCompare.appendChild(option2);
    selectCompare.appendChild(option3);
    selectCompare.appendChild(option4);
    row.appendChild(selectCompare);

    const value = document.createElement('input');
    value.setAttribute('name', `value-1`);
    row.appendChild(value);

    const addBtn = document.createElement('button');
    addBtn.classList.add('button');
    addBtn.textContent = 'Dodaj';
    addBtn.addEventListener('click', addNewRow);
    row.appendChild(addBtn);

    modalForm.appendChild(row);
}

function addSortModal(e) {
    e.preventDefault();
    modalBg.style.display = 'flex';
    const sortBtn = document.createElement('input');
    sortBtn.setAttribute('type', 'submit');
    sortBtn.setAttribute('value', 'Sort');
    sortBtn.setAttribute('name', 'sort');
    modalForm.appendChild(sortBtn);

    const row = document.createElement('div');
    row.classList.add('modalDiv');

    let selectAttributes = document.createElement('select');
    selectAttributes = atrSelect.cloneNode(true);
    selectAttributes.setAttribute('name', `attribute-1`);
    row.appendChild(selectAttributes);

    const selectCompare = document.createElement('select');
    selectCompare.setAttribute('name', `compare-1`);
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'rastuce');
    option1.textContent = 'Rastuce';
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'opadajuce');
    option2.textContent = 'Opadajuce';

    selectCompare.appendChild(option1);
    selectCompare.appendChild(option2);

    row.appendChild(selectCompare);

    const addBtn = document.createElement('button');
    addBtn.classList.add('button');
    addBtn.textContent = 'Dodaj';
    addBtn.addEventListener('click', addNewRowSort);
    row.appendChild(addBtn);

    modalForm.appendChild(row);
}

filter.addEventListener('click', addFilterModal);

sort.addEventListener('click', addSortModal);

modalBg.addEventListener('click', exitModal);
