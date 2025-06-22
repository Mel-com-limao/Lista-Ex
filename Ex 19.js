let cliques = 0;

const btnContador = document.getElementById("btnContador");
const btnZerar = document.getElementById("btnZerar");
const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

btnContador.addEventListener("click", function () {
  cliques++;
  contador.textContent = cliques;

  contador.style.color = "black";
  mensagem.style.display = "none";
});

btnZerar.addEventListener("click", function () {
  cliques = 0;
  contador.textContent = cliques;
  contador.style.color = "red";
  mensagem.style.display = "block";
});
