let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function atualizarTempo() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  let s = segundos < 10 ? "0" + segundos : segundos;
  let m = minutos < 10 ? "0" + minutos : minutos;
  let h = horas < 10 ? "0" + horas : horas;

  document.getElementById("tempo").innerText = `${h}:${m}:${s}`;
}

function iniciar() {
  if (!intervalo) {
    intervalo = setInterval(atualizarTempo, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  pausar();
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById("tempo").innerText = "00:00:00";
}
