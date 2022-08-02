
function criaTabela() {
    let paiTabela = document.getElementById('pixel-board');
    for (let index = 1; index <= 25; index += 1) {
        let div = document.createElement('div');
        div.className = 'pixel';
        paiTabela.appendChild(div);
    }
}
criaTabela();