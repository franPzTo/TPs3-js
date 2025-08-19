// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let texto = prompt("Escribe una palabra, frase o texto para analizar");
function cadena(texto){
    if (texto === null) {
        document.write("No hay nada que analizar");
    } else if (texto === texto.toUpperCase()) {
        document.write("La cadena está formada solo por mayúsculas.");
    } else if (texto === texto.toLowerCase()) {
        document.write("La cadena está formada solo por minúsculas.");
    } else {
        document.write("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
}
cadena(texto);