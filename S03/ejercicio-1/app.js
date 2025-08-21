console.log("03-Ejercicio-1");

//1. referencia del canvas
const canvas = document.getElementById('canvas');
console.log(canvas);

//2. Definimos contexto
const ctx = canvas.getContext('2d');
console.log(ctx);

//3. Definir resolcuión
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//4. Instrucciones para dibujar el circulo
ctx.beginPath();
ctx.strokeStyle = "#66ff00";
ctx.lineWidth = 10;
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(100,100,60,60,0,0,Math.PI * 2);
ctx.stroke();

// 5. Agrupar en una función
// con parámetros para dibujar circulos en cualquier posición
// sin repetir código
function dibujarCirculo(x,y) {
    ctx.beginPath();
    ctx.strokeStyle = "#66ff00";
    ctx.lineWidth = 10;
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
    ctx.ellipse(x,y,60,60,0,0,Math.PI * 2);
    ctx.stroke();
}

dibujarCirculo(200,100);
dibujarCirculo(300,100);
dibujarCirculo(400,100);

//6. Escuchar el evento de mousemove para dibujar círculos
window.addEventListener("mousemove", function (eventData){
    dibujarCirculo(eventData.x, eventData.y);
});
