// Crea un elemento de párrafo en HTML
const paragraph = document.createElement("p");

// Agrega un texto al párrafo
const text = document.createTextNode("Hola, mundo!");
paragraph.appendChild(text);

// Agrega el párrafo al documento
const container = document.getElementById("container");
container.appendChild(paragraph);
