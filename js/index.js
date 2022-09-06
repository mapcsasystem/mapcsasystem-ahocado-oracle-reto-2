const palabra = document.getElementById('add-word-textarea');
let palabras = JSON.parse(localStorage.getItem('palabras'));
try {
    palabra.value = '';
} catch (error) { }

function guardarPalabra() {
    if (!palabras) {
        palabras = [];
    }
    if (palabra.value.length > 0) {
        palabras.push(palabra.value);
        palabra.value = '';
        localStorage.setItem('palabras', JSON.stringify(palabras))
        window.location.href = 'ahorcado.html';
    } else {
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