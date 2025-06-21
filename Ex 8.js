function Envio() {
  var nome = document.formulario.nome.value.trim();
  var email = document.formulario.email.value.trim();
  var assunto = document.formulario.assunto.value.trim();
  var mensagem = document.formulario.mensagem.value.trim();
  
  if (nome === "" || email === "" || assunto === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  
  // Validação básica de e-mail
  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }
    alert("Envio realizado com sucesso!");
}
