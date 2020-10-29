"use strict";

var button = document.querySelector('#btn-1');
var form = document.querySelector('.form');
var id = 2;

function addInputDiv(e) {
  e.preventDefault();
  var inputDiv = document.createElement('div');
  inputDiv.classList.add('input__div');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', "attribute-".concat(id));
  input.setAttribute('id', "attribute-".concat(id));
  var button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', "btn-".concat(id++));
  button.textContent = 'Dodaj';
  button.addEventListener('click', addInputDiv);
  inputDiv.appendChild(input);
  inputDiv.appendChild(button);
  form.appendChild(inputDiv);
  this.parentNode.removeChild(this);
}

button.addEventListener('click', addInputDiv);