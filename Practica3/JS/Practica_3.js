let suma = [];
let repeticion;

for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let repeticion = dado1 + dado2;
    suma.push(repeticion);
}

let tabla = document.createElement("table");
let encabezado = document.createElement("tr");
let celda1 = document.createElement("th");
celda1.innerText = "Suma";
let celda2 = document.createElement("th");
celda2.innerText = "Repetición";
encabezado.appendChild(celda1);
encabezado.appendChild(celda2);
tabla.appendChild(encabezado);

tabla.style.border = "5px solid red";
tabla.style.margin = "10px";
tabla.style.textAlign = "center";
tabla.style.width = "300px"; 

for (let i = 2; i <= 12; i++) {
    let fila = document.createElement("tr");
    let celda1 = document.createElement("td");
    celda1.innerText = i;
    let celda2 = document.createElement("td");
    celda2.innerText = suma.filter(x => x === i).length;
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    tabla.appendChild(fila);
}

document.body.appendChild(tabla);