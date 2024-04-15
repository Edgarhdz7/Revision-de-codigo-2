var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  // Se cambió 'e.prevent()' por 'e.preventDefault()' para prevenir el envío del formulario
  e.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    // Se agregó la llamada a la función 'agregarInvitado()' dentro del bloque 'if'
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Se cambió 'var' por 'let' para declarar una variable global 'botonBorrar'
let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  // Se agregó un objeto de mapeo para convertir códigos de nacionalidad en nombres
  var nacionalidadMap = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  };

  // Se utilizó el mapeo para obtener el nombre de la nacionalidad
  var nacionalidadNombre = nacionalidadMap[nacionalidad] || nacionalidad;

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // Se corrigieron el nombre del método 'classList.added' a 'classList.add'
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Se crearon los elementos span e input correctamente
  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidadNombre, elementoLista);

  // Se agregó la lógica de eliminación de invitados dentro de la función 'agregarInvitado'
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // Se cambió 'this.parentNode.style.display = 'none'' por 'botonBorrar.parentNode.remove()' para eliminar el elemento de la lista
    botonBorrar.parentNode.remove();
  };
}

// Se movió la función 'crearElemento' fuera de la función 'agregarInvitado'
function crearElemento(descripcion, valor, contenedor) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  contenedor.appendChild(spanNombre);
  contenedor.appendChild(inputNombre);
  contenedor.appendChild(espacio);
}
