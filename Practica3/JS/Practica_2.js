let ciudades = [];
let ciudad;

while (ciudad = prompt("Ingrese el nombre de una ciudad y pais (pulsar \"cancelar\" para mostrar el array)")) {
    ciudades.push(ciudad);
}
ciudades[1] = "Barcelona";
ciudades.push("París");

document.write("<div class=\"mx-3\">");
document.write("<h2>Lista de Ciudades</h2>");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.write("<li>" + ciudades[i] + "</li>");
}
document.write("</ul>");
document.write("<p>Longitud del arreglo: " + ciudades.length + "</p>");
document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
document.write("<p>Última ciudad: " + ciudades[ciudades.length - 2] + "</p>");
document.write("<p>Ciudad añadida: " + ciudades[ciudades.length - 1] + "</p>");
document.write("<p>Ciudad de segunda posición cambiada: " + ciudades[1] + "</p>");
document.write("</div>");