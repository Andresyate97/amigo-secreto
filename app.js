// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigosElemento = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    listaAmigos.push(nombre);
    
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigosElemento.appendChild(nuevoElemento);
    
    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = ""; 
    
    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoElemento.appendChild(resultadoItem);
}
