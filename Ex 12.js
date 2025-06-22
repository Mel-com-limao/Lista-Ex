function verificarResposta() {
  const opcoes = document.getElementsByName("resposta");
  let respostaSelecionada = null;

  for (const opcao of opcoes) {
    if (opcao.checked) {
      respostaSelecionada = opcao.value;
      break;
    }
  }

  const resultado = document.getElementById("resultado");

  if (respostaSelecionada === null) {
    resultado.textContent = "Por favor, selecione uma resposta.";
    resultado.style.color = "orange";
  } else if (respostaSelecionada === "C") {
    resultado.textContent = "Correto! A capital do Brasil é Brasília.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorreto. Tente novamente.";
    resultado.style.color = "red";
  }
}
