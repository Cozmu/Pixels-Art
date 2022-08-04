








function criaTabela() {
    let paiTabela = document.getElementById('pixel-board');
    for (let index = 1; index <= 25; index += 1) {
        let div = document.createElement('div');
        div.className = 'pixel';
        paiTabela.appendChild(div);
    }
}
criaTabela();

//-------------------------------------------------------------
function pintarModelos() {
    let modelos = document.querySelectorAll('.color')
    for (let index = 0; index < modelos.length; index += 1) {
        if (modelos[index] === modelos[0]) {
            modelos[index].style.backgroundColor = 'black';
        } else if (modelos[index] === modelos[1]) {
            modelos[index].style.backgroundColor = 'blue';
        } else if (modelos[index] === modelos[2]) {
            modelos[index].style.backgroundColor = 'green';
        } else if (modelos[index] === modelos[3]) {
            modelos[index].style.backgroundColor = 'red';
        }
    }
}
pintarModelos();

//--------------------------------------------------------------
function selecionar(muda) {
    let receptor = document.querySelectorAll('.color');
    for (let index = 0; index < receptor.length; index += 1) {
        let selecionado = document.querySelector('.selected');
        if (selecionado === receptor[index]) {
            selecionado.classList.remove('selected');
            muda.target.classList.add('selected');
        }
    }
}

let receptor = document.querySelectorAll('.color')
for (let index = 0; index < receptor.length; index += 1) {
    receptor[index].addEventListener('click', selecionar)

}

//-------------------------------------------------------------
function pintar(event) {
    let corArmazenada = document.getElementsByClassName('selected')[0]
    event.target.style.backgroundColor = corArmazenada.style.backgroundColor;
}


let pixel = document.querySelectorAll('.pixel')
for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', pintar)
}
//-------------------------------------------------------------
function reset (event) {
    let pixel = document.querySelectorAll('.pixel')
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
    }
}

let botao = document.getElementById('clear-board')
botao.addEventListener('click', reset)
//---------------------------------------------------------------
