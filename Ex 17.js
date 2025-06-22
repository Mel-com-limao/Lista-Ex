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
    resultado.textContent = "Correto! ";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorreto. Tente novamente.";
    resultado.style.color = "red";
  }
}

function verificarRes() {
  const opcoes = document.getElementsByName("res");
  let respostaSelecionada = null;
  
  for (const opcao of opcoes) {
    if (opcao.checked) {
      respostaSelecionada = opcao.value;
      break;
    }
  }
  
  const resultado = document.getElementById("res");
  
  if (respostaSelecionada === null) {
    resultado.textContent = "Por favor, selecione uma resposta.";
    resultado.style.color = "orange";
  } else if (respostaSelecionada === "B") {
    resultado.textContent = "Correto!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorreto. Tente novamente.";
    resultado.style.color = "red";
  }
}


function verificarResp() {
  const opcoes = document.getElementsByName("resp");
  let respostaSelecionada = null;
  
  for (const opcao of opcoes) {
    if (opcao.checked) {
      respostaSelecionada = opcao.value;
      break;
    }
  }
  
  const resultado = document.getElementById("resp");
  
  if (respostaSelecionada === null) {
    resultado.textContent = "Por favor, selecione uma resposta.";
    resultado.style.color = "orange";
  } else if (respostaSelecionada === "A") {
    resultado.textContent = "Correto!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorreto. Tente novamente.";
    resultado.style.color = "red";
  }
}


function verificarRespo() {
  const opcoes = document.getElementsByName("respo");
  let respostaSelecionada = null;
  
  for (const opcao of opcoes) {
    if (opcao.checked) {
      respostaSelecionada = opcao.value;
      break;
    }
  }
  
  const resultado = document.getElementById("respo");
  
  if (respostaSelecionada === null) {
    resultado.textContent = "Por favor, selecione uma resposta.";
    resultado.style.color = "orange";
  } else if (respostaSelecionada === "D") {
    resultado.textContent = "Correto!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorreto. Tente novamente.";
    resultado.style.color = "red";
  }
}
