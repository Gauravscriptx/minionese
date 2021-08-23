var txTinput = document.querySelector('#txt-input');
var btnTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('#output');
console.log(txtinput);
outputDiv.innertxt = 'bananan';
function clickHandler() {
  console.log('clicked!');
  console.log('input', txtinput, value);
}
btnTranslate.addEventListener('click', clickHandler);
