function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
let base = parseFloat(prompt("Ingresa el ancho del rectángulo:"));

let perimetro = perimetroRectangulo(base, altura);
document.write("El perímetro del rectángulo es: " + perimetro);