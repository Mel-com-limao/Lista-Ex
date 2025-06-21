let contador = 0;

function atualizarTela() {
    document.getElementById('valor').textContent = contador;
}

function alterarValor(delta) {
    contador += delta;
    atualizarTela();
}

document.getElementById('aumentar').addEventListener('click', () => alterarValor(1));
document.getElementById('diminuir').addEventListener('click', () => alterarValor(-1));
