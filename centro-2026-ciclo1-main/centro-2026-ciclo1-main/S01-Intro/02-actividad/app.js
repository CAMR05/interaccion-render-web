// 1. obtener referencia del canvas
const canvas = document.getElementById('canvas');
//1.1 Sincronizar dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

const ctx = canvas.getContext('2d');

ctx.strokeStyle ="#ffffffff";
ctx.lineWidth = 2;

ctx.beginPath();


//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
for (let i = 0; i < 11; i++) {
ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();}