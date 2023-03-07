/*
Ejercicio 4
Escribe un programa de dos líneas que pida el nombre 
del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
*/
let nombreUsuario = prompt("Ingrese el nombre del usuario: ")
document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">Hola ${nombreUsuario}</p>`);