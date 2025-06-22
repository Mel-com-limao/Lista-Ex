const paragrafo = document.getElementById("textoHover");

const textoOriginal = paragrafo.textContent;

paragrafo.addEventListener("mouseover", function () {
  paragrafo.textContent = "Você passou o mouse!";
});

paragrafo.addEventListener("mouseout", function () {
  paragrafo.textContent = textoOriginal;
});
