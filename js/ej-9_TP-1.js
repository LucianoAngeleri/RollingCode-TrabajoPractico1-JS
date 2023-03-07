/*
Ejercicio 9
Escribe un programa que pida una frase y escriba las vocales que aparecen. 
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/
let frase = prompt("Ingrese una frase: ");
let vocalesEnFrase = ""
console.log(frase.length)
for (let i = 0; i < frase.length; i++) {
    console.log(`La letra ${frase.charAt(i)} está en el lugar ${i}`)
    switch (frase.charAt(i)) {
        case "a" || "A":
            vocalesEnFrase += frase.charAt(i);
            break;
        case "e" || "E":
            vocalesEnFrase += frase.charAt(i);
            break;
        case "i" || "I":
            vocalesEnFrase += frase.charAt(i);
            break;
        case "o" || "O":
            vocalesEnFrase += frase.charAt(i);
            break;
        case "u" || "U":
            vocalesEnFrase += frase.charAt(i);
            break;
        default:
            console.log(`No se encontraron vocales en la iteración ${i}`)
            break;
    }
    console.log(vocalesEnFrase)
}

document.write(`<h1>${vocalesEnFrase}</h1>`);