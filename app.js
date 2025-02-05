// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables para almacenar los nombres de amigos

let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminamos espacios innecesarios

    if (nombre === "") {
        // Si el campo está vacío, mostramos una alerta
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Añadimos el nombre a la lista de amigos
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    input.value = "";

    // Actualizamos la visualización de la lista de amigos
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = ""; // Esto asegura que la lista se reinicie

    // Iterar sobre el arreglo amigos y agregar elementos a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');  // Crear un nuevo <li> por cada amigo
        li.textContent = amigo;  // Asignar el nombre del amigo como contenido del <li>
        listaAmigos.appendChild(li);  // Agregar el <li> al DOM
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        // Si no hay amigos en la lista, mostramos una alerta
        alert("Primero agrega algunos nombres para poder realizar el sorteo.");
        return;
    }

    // Seleccionamos un amigo de forma aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}




