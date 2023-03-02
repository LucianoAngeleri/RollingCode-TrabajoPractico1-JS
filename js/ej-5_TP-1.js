/*
Ejercicio 5
Escribe un programa de tres líneas 
que pida un número, pida otro número y 
escriba el resultado de sumar estos dos números. 
Nota: Tener en cuenta la siguiente función: parseInt
*/
let number1 = parseInt(prompt("Ingrese un número: "))
let number2 = parseInt(prompt("Ingrese otro número: "))
document.write(`<h1>El resultado de sumar ${number1} y ${number2} es ${number1 + number2}</h1>`);