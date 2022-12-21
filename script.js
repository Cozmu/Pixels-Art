const imputNumber = document.getElementById('generate-board');

function tamanhoTabela() {
  const numero = document.getElementById('board-size');
  const vazio = '';
  if (numero.value === vazio) {
    alert('Board inválido!');
  }
}
imputNumber.addEventListener('click', tamanhoTabela);

function criaTabela(number) {
  const paiTabela = document.getElementById('pixel-board');
  for (let index = 1; index <= number; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    paiTabela.appendChild(div);
  }
}
criaTabela(25);

//-------------------------------------------------------------
function pintarModelos() {
  const modelos = document.querySelectorAll('.color');
  for (let index = 0; index < modelos.length; index += 1) {
    if (modelos[index] === modelos[0]) {
      modelos[index].style.backgroundColor = 'black';
    } else if (modelos[index] === modelos[1]) {
      modelos[index].style.backgroundColor = 'blue';
    } else if (modelos[index] === modelos[2]) {
      modelos[index].style.backgroundColor = 'green';
    } else {
      modelos[index].style.backgroundColor = 'red';
    }
  }
}

pintarModelos();

//--------------------------------------------------------------
function selecionar(muda) {
  const receptor = document.querySelectorAll('.color');
  for (let index = 0; index < receptor.length; index += 1) {
    const selecionado = document.querySelector('.selected');
    if (selecionado === receptor[index]) {
      selecionado.classList.remove('selected');
      muda.target.classList.add('selected');
    }
  }
}

const receptor = document.querySelectorAll('.color');
for (let index = 0; index < receptor.length; index += 1) {
  receptor[index].addEventListener('click', selecionar);
}

//-------------------------------------------------------------
function pintar({ target }) {
  const corArmazenada = document.getElementsByClassName('selected')[0];
  target.style.backgroundColor = corArmazenada.style.backgroundColor;
}

const pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', pintar);
}
//-------------------------------------------------------------
function reset() {
  const pixelReset = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelReset.length; index += 1) {
    pixelReset[index].style.backgroundColor = 'white';
  }
}

const botao = document.getElementById('clear-board');
botao.addEventListener('click', reset);
//---------------------------------------------------------------
