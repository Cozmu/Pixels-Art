
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
let receptorBlack = document.querySelectorAll('.color')[0]
let receptorBlue = document.querySelectorAll('.color')[1]
let receptorGreen = document.querySelectorAll('.color')[2]
let receptorRed = document.querySelectorAll('.color')[3]

function seleciona(event) {
    let selecionado = document.querySelector('.selected')
    selecionado.classList.remove('selected')
    event.target.classList.add('selected')

}

receptorBlack.addEventListener('click', seleciona);
receptorBlue.addEventListener('click', seleciona);
receptorGreen.addEventListener('click', seleciona);
receptorRed.addEventListener('click', seleciona);