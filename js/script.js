
let inputInvitados = document.getElementById("nombre-input")
let botonInvitados = document.getElementById("agregar-nombre")
let nombresLista = document.getElementById("nombres-lista")


let arrayInvitados = [];

// Agregamos un evento click al botón "Agregar"
botonInvitados.addEventListener("click", function() {
  // Obtenemos el valor del input
  let invitado = (inputInvitados.value)
console.log(invitado)
  // Agregamos el nombre al array
  arrayInvitados.push(invitado)
  console.log(arrayInvitados)
  

 // Creamos un nuevo elemento <li> para mostrar el nombre en la lista
 let nuevoElemento = document.createElement("li")
 nuevoElemento.textContent = invitado

 // Agregamos el elemento a la lista de nombres
 nombresLista.appendChild(nuevoElemento)

 // Limpiamos el valor del input
 inputInvitados.value = ""
})
