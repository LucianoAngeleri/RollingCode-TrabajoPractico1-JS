/*
Ejercicio 11
Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
(hay que decir todos por los que es divisible)
-- Ejercicio 10 --
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro)
*/
let numero = parseInt(prompt("Ingrese un número: "));
let esDivisiblePor = ""

if (numero % 2 === 0) {
    esDivisiblePor += `<li class="list-group-item rounded-pill fs-1 text-bg-success text-center">2</li>`
} 
if(numero % 3 === 0){
    esDivisiblePor += `<li class="list-group-item rounded-pill fs-1 text-bg-success text-center">3</li>`
} 
if(numero % 5 === 0){
    esDivisiblePor += `<li class="list-group-item rounded-pill fs-1 text-bg-success text-center">5</li>`
} 
if(numero % 7 === 0){
    esDivisiblePor += `<li class="list-group-item rounded-pill fs-1 text-bg-success text-center">7</li>`
}
if(numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !==0 ){
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El número ${numero} NO es divisible ni por 2, 3, 5 ni 7</p>`);
}
if (esDivisiblePor != "") {
    document.write(`<p class="fs-3 text-center rounded-pill text-bg-secondary p-3">El número ${numero} ES divisible por:</p>`);
    document.write(`<ul class="list-group">${esDivisiblePor}</ul>`)
}