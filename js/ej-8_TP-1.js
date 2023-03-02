/*
Ejercicio 8
Escribe un programa que pida un número y diga si es divisible por 2.
*/
let number = parseInt(prompt("Ingrese un número: "));

if (number % 2 == 0 ) {
    document.write(`<h1>El numero ${number} ES DIVISIBLE por 2</h1>`);
}else{    
    document.write(`<h1>El numero ${number} NO ES DIVISIBLE por 2</h1>`);
}