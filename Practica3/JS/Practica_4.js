let numero=prompt("Ingresa un numero ")

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

let resultado = esParOImpar(parseInt(numero));
document.write(resultado);