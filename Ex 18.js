const botao = document.getElementById("btnCor");

botao.addEventListener("click", function () {
  const cores = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "white", "gray"];

  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

  document.body.style.backgroundColor = corAleatoria;
});
