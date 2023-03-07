/*
Ejercicio 7
Escribe un programa 
que pida 3 números y escriba en la pantalla el mayor de los tres.
*/
let number1 = parseInt(prompt("Ingrese un número: "));
let number2 = parseInt(prompt("Ingrese otro número: "));
let number3 = parseInt(prompt("Ingrese otro número: "));
if (number1 > number2 && number1 > number3) {
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El numero ${number1} es mayor que los números ${number2} y ${number3}</p>`);
}else if(number2 > number1 && number2 > number3){    
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El numero ${number2} es mayor que los números ${number1} y ${number3}</p>`);
}else if(number3 > number1 && number3 > number1){    
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El numero ${number3} es mayor que los números ${number1} y ${number2}</p>`);
}