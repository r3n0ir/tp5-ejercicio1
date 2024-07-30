let numeroAleatorio = null;
document.getElementById('comenzarJuego').addEventListener('click', () => {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio)
    alert("¡Juego comenzado! Adivina el número entre 1 y 10.");
});

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    if (numeroAleatorio === null) {
        alert("Por favor, comience el juego primero.");
        return;
    }

    const numeroIngresado = parseInt(document.getElementById('numero').value, 10);

    if (isNaN(numeroIngresado)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    if (numeroIngresado === numeroAleatorio) {
        alert("¡Felicidades, adivinaste el número!");
        numeroAleatorio = null; // Reinicia el juego
    } else if (numeroIngresado < numeroAleatorio) {
        alert("El número es mayor.");
    } else {
        alert("El número es menor.");
    }
});

