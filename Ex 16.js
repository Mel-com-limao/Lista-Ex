const botoes = document.querySelectorAll('input[name="cor"]');

botoes.forEach((botao) => {
  botao.addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
  });
});
