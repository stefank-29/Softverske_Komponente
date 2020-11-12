"use strict";

var button = document.querySelector('#btn-1');
var form = document.querySelector('.form');
var count = document.querySelector('#count');
var chooseFile = document.querySelector('#myFile');
var submit = document.querySelector('#submit');
var isAutoinc = document.querySelector('.hidden'); // const downloadsFolder = require('downloads-folder');
//import df from 'downloads-folder';

var attributes = [];
var id = 1;
var flag = 0;

function saveFile(event) {
  if (flag == 0) {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (resp) {
      return resp.blob();
    }).then(function (blob) {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.style.display = 'none';
      a.href = url; // the filename you want

      a.download = 'todo-1.json';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url); //alert('your file has downloaded!'); // or you know, something with better UX...

      flag += 1;
      saveFile(event);
    })["catch"](function () {
      return alert('oh no!');
    });
  } else {
    submit.click();
    return;
  } //console.log(df());

} //submit.addEventListener('click', saveFile);


function addInputDiv(e) {
  e.preventDefault();
  var inputDiv2 = document.createElement('div');
  inputDiv2.classList.add('input__div');
  inputDiv2.setAttribute('id', "".concat(id));
  var attributesHeader = document.querySelector('.formHeader');
  var len = attributesHeader.childElementCount;

  if (isAutoinc.textContent == 'autoIncrement') {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', "id-".concat(id));
    input.setAttribute('id', "id-".concat(id));
    input.setAttribute('value', "".concat(id.toString()));
    input.required = true;
    input.disabled = true;
    inputDiv2.appendChild(input);
  } else {
    var _input = document.createElement('input');

    _input.setAttribute('type', 'text');

    _input.setAttribute('name', "id-".concat(id));

    _input.setAttribute('id', "".concat(id));

    _input.required = true;
    inputDiv2.appendChild(_input);
  }

  for (var i = 1; i < len; i++) {
    var _input2 = document.createElement('input');

    _input2.setAttribute('type', 'text');

    _input2.setAttribute('name', "".concat(attributes[i], "-").concat(id));

    _input2.setAttribute('id', "".concat(attributes[i], "-").concat(id));

    _input2.required = true;
    inputDiv2.appendChild(_input2);
  }

  id++;
  var value = parseInt(count.value);
  count.value = value + 1;
  var button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Dodaj';
  button.addEventListener('click', addInputDiv);
  inputDiv2.appendChild(button);
  form.appendChild(inputDiv2);
  this.parentNode.removeChild(this);
}

function addInputs() {
  var attributesHeader = document.querySelector('.formHeader');
  var headerItems = attributesHeader.querySelectorAll('.headerItem');
  var inputDiv = document.querySelector('.input__div');
  var len = attributesHeader.childElementCount;
  headerItems.forEach(function (item) {
    attributes.push(item.textContent);
  });

  if (isAutoinc.textContent == 'autoIncrement') {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', "id-1");
    input.setAttribute('id', "id-1");
    input.setAttribute('value', '1');
    input.required = true;
    input.disabled = true;
    inputDiv.appendChild(input);
  } else {
    var _input3 = document.createElement('input');

    _input3.setAttribute('type', 'text');

    _input3.setAttribute('name', "id-1");

    _input3.setAttribute('id', "id-1");

    _input3.required = true;
    inputDiv.appendChild(_input3);
  }

  for (var i = 1; i < len; i++) {
    var _input4 = document.createElement('input');

    _input4.setAttribute('type', 'text');

    _input4.setAttribute('name', "".concat(attributes[i], "-").concat(id));

    _input4.setAttribute('id', "".concat(attributes[i], "-").concat(id));

    _input4.required = true;
    inputDiv.appendChild(_input4);
  }

  id++;
  var button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Dodaj';
  button.addEventListener('click', addInputDiv);
  inputDiv.appendChild(button);
} //button.addEventListener('click', addInputDiv);


window.onload = addInputs;