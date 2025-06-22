function converterParaF() {
  const temp = parseFloat(document.getElementById("temperatura").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(temp)) {
    resultado.textContent = "Digite um número válido.";
    resultado.style.color = "orange";
  } else {
    const fahrenheit = (temp * 9/5) + 32;
    resultado.textContent = `${temp}°C é igual a ${fahrenheit.toFixed(2)}°F`;
    resultado.style.color = "blue";
  }
}

function converterParaC() {
  const temp = parseFloat(document.getElementById("temperatura").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(temp)) {
    resultado.textContent = "Digite um número válido.";
    resultado.style.color = "orange";
  } else {
    const celsius = (temp - 32) * 5/9;
    resultado.textContent = `${temp}°F é igual a ${celsius.toFixed(2)}°C`;
    resultado.style.color = "green";
  }
}
