const personas = [
  new Persona("Lucas", "Aramberry"),
  new Persona("Lucas", "Aramberry"),
];

function mostrarPersonas() {
  console.log(personas);
  let texto = "";
  for (const persona of personas) {
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }

  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const formulario = document.forms["formulario"];
  const nombre = formulario["nombre"];
  const apellido = formulario["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);

    mostrarPersonas();
  }
}
