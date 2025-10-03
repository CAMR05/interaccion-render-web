console.log("01-Interactividad");
//1. referencia del canvas
const canvas = document.getElementById('canvas');
console.log(canvas);

//2. Definimos contexto
const ctx = canvas.getContext('2d');
console.log(ctx);

//3. Definir resolcuión
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pintar = false;
//4. Instrucciones para dibujar el circulo
function dibujar(x,y) {
ctx.beginPath();
ctx.strokeStyle = "#0000ff";
ctx.lineWidth = 16;
ctx.fillStyle = "#00ff00";

//7. Definir el rectángulo
//ctx.rect(x,y,width,height);
ctx.rect(x,y,300,100);

//8. Renderizar el rectángulo
ctx.stroke();
ctx.fill();
}


dibujar(450,10,300,100);
dibujar(650,10,300,100);
dibujar(850,10,300,100);


//6. Escuchar el evento de mousemove para dibujar círculos
window.addEventListener("mousedown", function (eventData){
    pintar = true;
    dibujar(eventData.x, eventData.y)
});
window.addEventListener("mousemove", function (eventData){
    if (!pintar){
        return;
    };
    (dibujar(eventData.x, eventData.y))
});
window.addEventListener("mouseup", function (eventData){
    pintar = false;
});