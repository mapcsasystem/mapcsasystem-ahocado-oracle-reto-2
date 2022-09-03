
let body = document.querySelector('canvas');
let width = body.clientWidth;
let height = body.clientHeight;

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#062449';
ctx.lineWidth = 2;
crearTronco();

function crearTronco(){
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
