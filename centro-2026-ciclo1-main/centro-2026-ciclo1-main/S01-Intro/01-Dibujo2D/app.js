// 1. obtener referencia del canvas
const canvas = document.getElementById('lienzo');
//1.1 Sincronizar dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

//2. Definir si es 2D o 3D.
const ctx = canvas.getContext('2d');


//3.Definir los estilos de la línea.
ctx.strokeStyle ="#ff0000";
ctx.lineWidth = 2;

//4.Definir los puntos que hacen la línea
//ctx.moveTo(x,y);
ctx.moveTo(190,200);
ctx.lineTo(390,200);

ctx.moveTo(300,400);
ctx.lineTo(500,400);

ctx.moveTo(500,600);
ctx.lineTo(700,600);
//5. Renderizar la línea.
ctx.stroke();

//6. Definir estilos de rectángulo
ctx.beginPath();
ctx.strokeStyle = "#0000ff";
ctx.lineWidth = 16;
ctx.fillStyle = "#00ff00";

//7. Definir el rectángulo
//ctx.rect(x,y,width,height);
ctx.rect(450,10,300,100);

//8. Renderizar el rectángulo
//ctx.fill();
ctx.stroke();

// Sintaxis de elipse o círculo
ctx.beginPath();

//9. Estilos del círculo
ctx.strokeStyle = "#ff6600";
ctx.fillStyle = "#000";

//10. Definir el círculo
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(50, 150, 30, 130, 0, 0, Math.PI * 1.5);

//11. Renderizar el círculo
ctx.fill();
ctx.stroke();