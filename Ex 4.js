let nSorteado = Math.floor(Math.random()* 10)+1;
function verificar() {
    const n2= document.getElementById("n2").value;
    const resultado1 = document.getElementById ("resultado1");
    const nSorteadoElement = document.getElementById("nSorteado");

    if (n2 == "") {
        resultado1.textContent = "Por favor, digite um número.";
        return;
    }
    if (n2 == "") {
        resultado1.textContent = "Parabéns! Você acertou!";
    } else {
        resultado1.textContent = "Tente novamente! O número não é esse.";
    }
    nSorteadoElement.textContent = nSorteado
}
