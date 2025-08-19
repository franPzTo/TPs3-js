let resultados=[];
let resultado;
let numero = +prompt("Ingrese la tabla de multiplicar que desea ver:");

if (!isNaN(numero) && numero >= 1) {
    for (let i = 0; i <= 20; i++) {
        let resultado = numero * i;
        resultados.push(resultado); 
    }
} else{
    alert("Por favor, ingrese un número válido.");
}
let tabla = document.createElement("table");
let encabezado = document.createElement("tr");
let celda1 = document.createElement("th");
celda1.innerText = "Tabla del " + numero + ":";
let celda2 = document.createElement("th");
celda2.innerText = "Resultado";
encabezado.appendChild(celda1);
encabezado.appendChild(celda2);
tabla.appendChild(encabezado);

tabla.style.border = "5px solid red";
tabla.style.margin = "10px";
tabla.style.textAlign = "center";
tabla.style.width = "auto";

for (let i = 1; i <= 20; i++) {
    let fila = document.createElement("tr");
    let celda1 = document.createElement("td");
    celda1.innerText = numero + " x " + i;
    let celda2 = document.createElement("td");
    celda2.innerText = resultados[i];
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    tabla.appendChild(fila);
}

document.body.appendChild(tabla);