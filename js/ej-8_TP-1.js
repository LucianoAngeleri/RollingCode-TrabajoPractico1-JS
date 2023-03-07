/*
Ejercicio 8
Escribe un programa que pida un número y diga si es divisible por 2.
*/
let number = parseInt(prompt("Ingrese un número: "));

if (number % 2 == 0 ) {
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El numero ${number} ES DIVISIBLE por 2</p>`);
}else{    
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El numero ${number} NO ES DIVISIBLE por 2</p>`);
}