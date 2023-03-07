/*
Ejercicio 10
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro)
*/
let numero = prompt("Ingrese un número: ");
let esDivisiblePor = "";

if (numero % 2 === 0) {
    esDivisiblePor = `El número ${numero} es divisible por 2`;
}else if(numero % 3 === 0){
    esDivisiblePor = `El número ${numero} es divisible por 3`;
}else if(numero % 5 === 0){
    esDivisiblePor = `El número ${numero} es divisible por 5`;
}else if(numero % 7 === 0){
    esDivisiblePor = `El número ${numero} es divisible por 7`;
}else{
    esDivisiblePor=`El número ${numero} NO es divisible ni por 2, 3, 5 o 7`;
}
document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">${esDivisiblePor}</p>`);