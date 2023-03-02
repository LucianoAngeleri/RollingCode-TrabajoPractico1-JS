/*
Ejercicio 6
Escribe un programa que pida dos números
y escriba en la pantalla cual es el mayor.
*/
let number1 = parseInt(prompt("Ingrese un número: "))
let number2 = parseInt(prompt("Ingrese otro número: "))
if (number1 > number2) {
    document.write(`<h1>El numero ${number1} es mayor que el número ${number2}</h1>`);
}else if(number2 > number1){    
    document.write(`<h1>El numero ${number2} es mayor que el número ${number1}</h1>`);
}

