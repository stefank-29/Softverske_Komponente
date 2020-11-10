const table = document.querySelector('table');
const cells = table.querySelectorAll('td');
const deleteBtn = document.querySelector('#delete');
const form = document.querySelector('.form');

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
        // console.log(input.value);
        hiddenRow[i++].value = input.value;
        //input.setAttribute('name', `get`);
    });
    // console.log(obj);
    hiddenRow.forEach((row) => {
        //console.log(row);
        //console.log(row.value);
    });
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

deleteBtn.addEventListener('click', deleteRow);
