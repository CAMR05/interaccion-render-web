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
for (let i = 0; i < 1; i++) {
ctx.ellipse(canvas.width/2, canvas.height/2, 150, 150, 0, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();}

for (let i = 0; i < 4; i++) {
    ctx.rect(canvas.width/2 + 300 *i, canvas.height/2 - 100 *i, 40 * i, Math.PI * 100);
    ctx.fill();
    ctx.stroke();
}


