document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkPermissao");
  const botao = document.getElementById("btnEnviar");

  checkbox.addEventListener("change", function () {
    botao.disabled = !checkbox.checked;
  });
});
