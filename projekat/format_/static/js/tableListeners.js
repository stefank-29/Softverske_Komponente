const table = document.querySelector('table');
const cells = table.querySelectorAll('td');

let selectedRow;

function unselectTable() {
    cells.forEach((cell) => {
        cell.classList.remove('selected');
    });
}

function selectRow() {
    unselectTable();
    selectedRow = this.parentNode;
    const cellsInRow = Array.from(selectedRow.querySelectorAll('td'));
    cellsInRow.forEach((cell) => {
        cell.classList.add('selected');
    });
}

cells.forEach((cell) => {
    cell.addEventListener('click', selectRow);
});
