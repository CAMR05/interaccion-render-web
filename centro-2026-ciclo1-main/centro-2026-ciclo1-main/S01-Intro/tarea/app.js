// 1. obtener referencia del canvas
const canvas = document.getElementById('canvas');
//1.1 Sincronizar dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

const ctx = canvas.getContext('2d');

ctx.strokeStyle ="#ffffffff";
ctx.lineWidth = 1;

ctx.beginPath();


//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
for (let i = 0; i < 10; i++) {
    const radius = 40 + i * 20
ctx.ellipse(canvas.width/2 + i * 10 ,canvas.height/2, 50+ i * 10 , 200 + i * 2, 0,Math.PI * 2, 0 );

ctx.stroke();}