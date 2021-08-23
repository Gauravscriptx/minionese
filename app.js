var txtinput = document.querySelector('#txt-input');
var btnTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('#output');

function clickHandler() {
  outputDiv.innerText = 'bananan' + txtinput.value;
}

btnTranslate.addEventListener('click', clickHandler);
