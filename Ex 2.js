function Tabuada(){
    numero = parseInt(document.formulario.numero.value);
    for (let i = 1; i <= 10; i++) {
        tabuada = numero*i
        alert(`${numero} x ${i} = ${tabuada}`)
      };
    return tabuada
}
