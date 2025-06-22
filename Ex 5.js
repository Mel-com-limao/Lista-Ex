function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      document.getElementById("resultado").textContent = "Por favor, preencha todas as notas corretamente.";
      return;
    }
  
    const media = (nota1 + nota2 + nota3) / 3;
    const status = media >= 6 ? "Aprovado" : "Reprovado";
  
    document.getElementById("resultado").textContent = `Média: ${media.toFixed(2)} - Situação: ${status}`;
  }
