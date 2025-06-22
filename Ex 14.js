function saudacao() {
  const nome = document.getElementById("nome").value.trim();

  if (nome === "") {
    alert("Por favor, digite seu nome.");
  } else {
    alert(`Olá ${nome}. Seja bem-vindo(a)!`);
  }
}
