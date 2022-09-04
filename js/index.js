const palabra = document.getElementById('add-word-textarea');
try {
    palabra.value = '';
} catch (error) { }

function guardarPalabra() {
    let palabras = JSON.parse(localStorage.getItem('palabras'));
    if (!palabras) {
        palabras = [];
    }
    if (palabra.value.length > 0) {
        palabras.push(palabra.value);
        palabra.value = '';
        localStorage.setItem('palabras', JSON.stringify(palabras))
        window.location.href = 'ahorcado.html';
    } else {
        alert('Ingresa una palabra...')
    }
}

function cancelar() {
    window.location.href = 'index.html';
}