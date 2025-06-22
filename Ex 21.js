document.addEventListener("DOMContentLoaded", 
function () {
  const input = document.getElementById("inputTecla");
  const span = document.getElementById("teclaPressionada");

  // Para teclado físico: detecta qualquer tecla pressionada
  input.addEventListener("keydown", function (e) {
    if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
      span.textContent = `Letra: ${e.key}`;
    } else {
      span.textContent = `Tecla: ${e.key}`;
    }
    console.log("keydown:", e.key);
  });

  // Para celular e teclado virtual: detecta letras inseridas
  input.addEventListener("input", function () {
    const valor = input.value;
    const ultima = valor.slice(-1);

    if (ultima === "") {
      span.textContent = "Nenhuma";
    } else if (/^[a-zA-Z]$/.test(ultima)) {
      span.textContent = `Letra: ${ultima}`;
    } else {
      span.textContent = `Caractere: ${ultima}`;
    }
    console.log("input:", ultima);
  });
});
