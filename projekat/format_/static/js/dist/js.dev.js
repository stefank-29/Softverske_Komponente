"use strict";

var file = document.querySelector('.choose-file');
var yes = document.querySelector('#yes');
var no = document.querySelector('#no');
var json = document.querySelector('#json');
var next = document.querySelector('#next');
var isCreated;
yes.addEventListener('click', function () {
  file.innerHTML = "<input type=\"file\" id=\"myfile\" name=\"myfile\">";
  file.style.display = 'flex';
  var input = file.querySelector('input');
  input.addEventListener('change', function () {
    console.log(input.value);
  });
  isCreated = true;
});
no.addEventListener('click', function () {
  var p = document.querySelector('#q');
  p.textContent = 'Izaberite tip fajla';
  yes.style.display = 'none';
  no.style.display = 'none';
  file.innerHTML = "<button class='button' id='json'>json</button>\n\t<button class='button' id='xml'>xml</button>\n\t<button class='button' id='custom'>custom</button> ";
  file.style.display = 'flex';
  isCreated = false;
});
next.addEventListener('click', function () {
  console.log(isCreated);
});