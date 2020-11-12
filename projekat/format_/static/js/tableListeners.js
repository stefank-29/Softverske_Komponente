const table = document.querySelector('table');
const rows = Array.from(table.querySelectorAll('tr'));
const cells = table.querySelectorAll('td');
const deleteBtn = document.querySelector('#delete');
const form = document.querySelector('.form');
const rowNum = document.querySelector('#rowNum');
const idType = document.querySelector('#idType');

let selectedRow;
obj = {};
function unselectTable() {
    cells.forEach((cell) => {
        cell.classList.remove('selected');
    });
}

function selectRow() {
    unselectTable();
    selectedRow = this.parentNode;
    const cellsInRow = Array.from(selectedRow.querySelectorAll('td'));
    headers = Array.from(table.querySelectorAll('th'));
    atributi = [];
    headers.forEach((header) => {
        atributi.push(header.textContent);
    });
    i = 0;

    let hiddenRow = table.querySelectorAll('td input.hidden');

    attributes = cellsInRow.forEach((cell) => {
        cell.classList.add('selected');
        let input = cell.querySelector('input');
        obj[atributi[i]] = input.value;
        hiddenRow[i++].value = input.value;
    });

    let x = 1;
    let rows = Array.from(table.querySelectorAll('tr'));
    let n = rows.findIndex((row) => row == selectedRow);
    console.log(n);
    rowNum.value = n;
    return obj;
}

cells.forEach((cell) => {
    cell.addEventListener('click', selectRow);
});

// function deleteRow(e) {
//     selectedCells = table.querySelectorAll('.selected');

//     selectedCells.forEach((cell) => {
//         // cell.parentNode.removeChild(cell);
//         input = cell.querySelector('input');
//         input.setAttribute('name', `get`);
//     });

//     form.submit();
// }

//deleteBtn.addEventListener('click', deleteRow);

function blockIdInputs() {
    let rowsCount = rows.length;
    let lastId;
    if (idType.value == '0') {
        for (let i = 1; i < rowsCount - 1; i++) {
            let idCell = rows[i].querySelector('td').querySelector('input');
            if (i == rowsCount - 3) {
                lastId = idCell.value;
            }
            if (i == rowsCount - 2) {
                idCell.value = (parseInt(lastId) + 1).toString();
            }
            idCell.disabled = true;
        }
    }
}

window.onload = blockIdInputs();
