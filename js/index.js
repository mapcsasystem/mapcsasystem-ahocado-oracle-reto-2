const palabra = document.getElementById('add-word-textarea');

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
        alert('ingresa una palabra')
    }
}