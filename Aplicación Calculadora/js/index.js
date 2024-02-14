function sumar(operandoA, operandoB) {
  let form = document.getElementById("formulario");

  let operA = form["operandoA"];
  let operB = form["operandoB"];

  let resultado = parseInt(operA.value) + parseInt(operB.value);

    if(isNaN(resultado)) resultado = "La operación no incluye números."

  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
