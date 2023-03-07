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
    esDivisiblePor += "<li>2</li>"
} 
if(numero % 3 === 0){
    esDivisiblePor += "<li>3</li>"
} 
if(numero % 5 === 0){
    esDivisiblePor += "<li>5</li>"
} 
if(numero % 7 === 0){
    esDivisiblePor += "<li>7</li>"
}
if(numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !==0 ){
    document.write(`<h1>El número ${numero} NO es divisible ni por 2, 3, 5 ni 7</h1>`);
}
if (esDivisiblePor != "") {
    document.write(`<h1>El número ${numero} ES divisible por:</h1>`);
    document.write(`<ul>${esDivisiblePor}</ul>`)
}