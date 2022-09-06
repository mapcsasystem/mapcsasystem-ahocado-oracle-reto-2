const palabra = document.getElementById('add-word-textarea');
const figure = document.getElementById('figure');
let palabras = JSON.parse(localStorage.getItem('palabras'));
palabra.addEventListener('keypress', keyUpTextArea);

function keyUpTextArea(event) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 20 || event.keyCode === 209 || event.keyCode === 144 || event.keyCode == 8 || event.keyCode == 241) {

    } else {
        Swal.fire('Maximo 8 letras, solo mayusculas, sin caracteres especiales');
    }
}

function guardarPalabra() {
    try {
        if (palabra.value.length > 0) {
            palabras.push(palabra.value);
            palabra.value = '';
            localStorage.setItem('palabras', JSON.stringify(palabras))
            window.location.href = 'ahorcado.html';
        }
    } catch (error) {
        Swal.fire('Ingresa una palabra...');
    }
}

function redirect(route) {
    switch (route) {
        case 'add-words.html':
            window.location.href = route;
            break;

        case 'ahorcado.html':
            if (!palabras) {
                palabras = [];
                Swal.fire('Agrega una palabra primero');
                break;
            } else {
                window.location.href = route;
                break;
            }
    }
}

function cancelar() {
    window.location.href = 'index.html';
}