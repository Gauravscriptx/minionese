var txtinput = document.querySelector('#txt-input');
var btntranslate = document.querySelector('#btn-translate');
var outputdiv = document.querySelector('#output');
console.log(txtinput);

function clickhandler() {
  console.log('clicked!');
  console.log('input', txtinput, value);
}
btntranslate.addEventListener('click', clickhandler);
