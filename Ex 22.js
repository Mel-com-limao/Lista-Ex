document.addEventListener("DOMContentLoaded", function () {
  const paragrafo = document.getElementById("paragrafo");
  const botaoMostrar = document.getElementById("botaoMostrar");

  // Oculta o parágrafo ao dar duplo clique
  paragrafo.addEventListener("dblclick", function () {
    paragrafo.style.display = "none";
    botaoMostrar.style.display = "inline"; // Exibe o botão
  });

  // Mostra novamente ao clicar no botão
  botaoMostrar.addEventListener("click", function () {
    paragrafo.style.display = "block";
    botaoMostrar.style.display = "none"; // Esconde o botão de novo
  });
});
