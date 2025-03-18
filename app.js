// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];



function agregarAmigos() {
    let amigoInput = document.getElementById("amigo");
    let nombreAmigo = amigoInput.value;

    if (!nombreAmigo) {
        alert("Debe ingresar un nombre");
        return
    }
    
        lista.push(nombreAmigo);
        amigoInput.value = "";
        amigoInput.focus();
        mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let item = document.createElement("li");
        item.textContent = lista[i];
        listaAmigos.appendChild(item);

    }
}

function sortearAmigo(){
    if (lista.length === 0) {
        alert("No hay amigos para sortear");
        return
    }
    let amigoSorteado = lista[Math.floor(Math.random() * lista.length)]
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    let limpiarLista = document.getElementById("listaAmigos")
    limpiarLista = "";
}




