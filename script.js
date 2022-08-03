
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
        } else {
            modelos[index].style.backgroundColor = 'red';
        }
    }
}
pintarModelos();

//--------------------------------------------------------------
let receptorBlack = document.querySelectorAll('.color')[0]
let receptorBlue = document.querySelectorAll('.color')[1]
let receptorGreen = document.querySelectorAll('.color')[2]
let receptorRed = document.querySelectorAll('.color')[3]
/* let receptor = document.querySelector('.color') */

function seleciona(event) {
    /* for (let index = 0; index < receptor.length; index += 1) { */
    let selecionado = document.querySelector('.selected')
    selecionado.classList.remove('selected')
    event.target.classList.add('selected')
    /*  } */

}
/* receptor.addEventListener('click', seleciona); */

receptorBlack.addEventListener('click', seleciona);
receptorBlue.addEventListener('click', seleciona);
receptorGreen.addEventListener('click', seleciona);
receptorRed.addEventListener('click', seleciona);
//-------------------------------------------------------------










