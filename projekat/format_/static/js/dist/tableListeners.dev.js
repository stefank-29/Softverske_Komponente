"use strict";

var table = document.querySelector('table');
var cells = table.querySelectorAll('td');
var deleteBtn = document.querySelector('#delete');
var form = document.querySelector('.form');
var isAutoinc = document.querySelector('#inc');
var selectedRow;
obj = {};

function unselectTable() {
  cells.forEach(function (cell) {
    cell.classList.remove('selected');
  });
}

function selectRow() {
  unselectTable();
  selectedRow = this.parentNode;
  var cellsInRow = Array.from(selectedRow.querySelectorAll('td'));
  headers = Array.from(table.querySelectorAll('th'));
  atributi = [];
  headers.forEach(function (header) {
    atributi.push(header.textContent);
  });
  i = 0;
  var hiddenRow = table.querySelectorAll('td input.hidden');
  attributes = cellsInRow.forEach(function (cell) {
    cell.classList.add('selected');
    var input = cell.querySelector('input');
    obj[atributi[i]] = input.value; // console.log(input.value);

    hiddenRow[i++].value = input.value.toString(); //input.setAttribute('name', `get`);
  }); // console.log(obj);

  hiddenRow.forEach(function (row) {//console.log(row);
    //console.log(row.value);
  });
  return obj;
}

cells.forEach(function (cell) {
  cell.addEventListener('click', selectRow);
  cell.querySelector('input').addEventListener('keydown', function () {
    console.log('menjam');
  });
});

function checkId() {
  if (isAutoinc.textContent == 'autoIncrement') {
    console.log('sadasd');
  }
}

window.onload = checkId(); // function deleteRow(e) {
//     selectedCells = table.querySelectorAll('.selected');
//     selectedCells.forEach((cell) => {
//         // cell.parentNode.removeChild(cell);
//         input = cell.querySelector('input');
//         input.setAttribute('name', `get`);
//     });
//     form.submit();
// }
//deleteBtn.addEventListener('click', deleteRow);