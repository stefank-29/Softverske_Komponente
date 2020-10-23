const file =document.querySelector('.choose-file');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const json = document.querySelector('#json');
yes.addEventListener('click', ()=>{
	file.innerHTML=`<input type="file" id="myfile" name="myfile">`;
	file.style.display='flex';
	const input=file.querySelector('input');
	input.addEventListener('change',()=>{
		console.log(input.value);
	});

});

no.addEventListener('click',()=>{
	const p =document.querySelector('#q');
	p.textContent='Izaberite tip fajla';
	yes.style.display='none';
	no.style.display='none';
	file.innerHTML=`<button id='json'>json</button>
	<button id='xml'>xml</button>
	<button id='custom'>custom</button> `;
	file.style.display='flex';

});

