
const body = document.querySelector('body');
const palabraAdivinar = document.getElementById('palabra-a-adivinar');
const canvas = document.querySelector('canvas');
const palabraRepetida = document.getElementById('palabras-repetidas');
const palabras = JSON.parse(localStorage.getItem('palabras'));
const ctx = canvas.getContext('2d');

let palabra = '';
let cantidadAciertos = 0;
let cantidadErrores = 0;
let letra = '';
body.addEventListener('keypress', eventBody)

inicio();

function inicio() {
    resetCanvas();
    palabra = '';
    letra = '';
    cantidadAciertos = 0;
    cantidadErrores = 0;
    palabraAdivinar.innerHTML = '';
    palabraRepetida.innerHTML = '';
    palabraAdivinar.classList.add('margin-p');
    palabraRepetida.classList.add('margin-p');
    const valorAzar = obtenerRandom(0, palabras.length);
    palabra = palabras[valorAzar];
    const cantidadLetras = palabra.length;
    for (let i = 0; i < cantidadLetras; i++) {
        const span = document.createElement('span')
        palabraAdivinar.appendChild(span)
    }
    crearTronco();
}

function obtenerRandom(numMin, numMax) {
    const valorAzar = Math.floor(Math.random() * numMax) + numMin;
    return valorAzar;
}


function eventBody(event) {
    console.log(event);
    if (cantidadAciertos >= palabra.length) {
        return gano();
    }
    if (cantidadErrores >= 6) {
        return perdio();
    }
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 209) {
        let acerto = false;
        for (let i = 0; i < palabra.length; i++) {
            if (event.key === palabra[i]) {
                const spans = document.querySelectorAll('#palabra-a-adivinar span')
                spans[i].innerHTML = event.key;
                palabraAdivinar.classList.remove('margin-p');
                cantidadAciertos++;
                acerto = true;
            } else {
                if (palabraRepetida.innerHTML.includes(event.key)) {
                    letra = '';
                    palabraRepetida.classList.remove('margin-p');
                    cantidadErrores--;
                    break;
                } else {
                    letra = event.key;
                    palabraRepetida.classList.remove('margin-p');
                }
            }
        }
        if (cantidadAciertos >= palabra.length) {
            gano();
            if (palabraRepetida.innerHTML.length === 0) {
                palabraRepetida.classList.add('margin-p');
            }
            return;
        }
        if (acerto) {
            if (palabraRepetida.innerHTML.length === 0) {
                palabraRepetida.classList.add('margin-p');
            }
        } else {
            palabraRepetida.innerHTML = palabraRepetida.innerHTML + letra;
            switch (cantidadErrores) {
                case 0:
                    crearCabeza();
                    cantidadErrores++;
                    break;
                case 1:
                    crearTorzo();
                    cantidadErrores++;
                    break;
                case 2:
                    crearManoDerecha();
                    cantidadErrores++;
                    break;
                case 3:
                    crearManoIzquierda();
                    cantidadErrores++;
                    break;
                case 4:
                    crearPieDerecha();
                    cantidadErrores++;
                    break;
                case 5:
                    crearPieIzquierda();
                    cantidadErrores++;
                    perdio();
                    if (palabraRepetida.innerHTML.length === 0) {
                        palabraRepetida.classList.add('margin-p');
                    }
                    break;
            }
        }
    } else {
        Swal.fire('Solo letras mayusculas ni caracteres especiales');
    }
}

function letraRepetida(caracter) {
    if (!palabraRepetida.innerHTML.includes(caracter)) {
        palabraRepetida.innerHTML = palabraRepetida.innerHTML + caracter;
    } else {
        cantidadErrores--;
    }
}

function crearTronco() {
    ctx.strokeStyle = '#062449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(140, 2);
    ctx.lineTo(170, 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(270, 140);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(140, 2);
    ctx.lineTo(140, 140);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(170, 2);
    ctx.lineTo(170, 30);
    ctx.stroke();
    ctx.closePath();
}

function crearCabeza() {
    ctx.beginPath();
    ctx.arc(170, 40, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function crearTorzo() {
    ctx.beginPath();
    ctx.moveTo(170, 50);
    ctx.lineTo(170, 100);
    ctx.stroke();
    ctx.closePath();
}

function crearManoDerecha() {
    ctx.beginPath();
    ctx.moveTo(170, 60);
    ctx.lineTo(160, 80);
    ctx.stroke();
    ctx.closePath();
}

function crearManoIzquierda() {
    ctx.beginPath();
    ctx.moveTo(170, 60);
    ctx.lineTo(180, 80);
    ctx.stroke();
    ctx.closePath();
}

function crearPieDerecha() {
    ctx.beginPath();
    ctx.moveTo(170, 100);
    ctx.lineTo(160, 120);
    ctx.stroke();
    ctx.closePath();
}

function crearPieIzquierda() {
    ctx.beginPath();
    ctx.moveTo(170, 100);
    ctx.lineTo(180, 120);
    ctx.stroke();
    ctx.closePath();
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    crearTronco();
}

function perdio() {
    Swal.fire({
        icon: 'error',
        title: 'Perdiste',
        text: 'Imtentalo de nuevo!',
    });
}

function gano() {
    Swal.fire({
        icon: 'success',
        title: 'Ganaste',
        text: 'Felicidades!',
    });
}

function desistir() {
    inicio();
}
