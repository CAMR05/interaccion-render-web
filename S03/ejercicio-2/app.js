console.log("03-Ejercicio-2");

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
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(100,100,60,60,0,0,Math.PI * 2);
ctx.stroke();

// 5. Agrupar en una función
// con parámetros para dibujar circulos en cualquier posición
// sin repetir código
function dibujarCirculo(x,y) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
    ctx.ellipse(x,y,60,60,0,0,Math.PI * 2);
    ctx.stroke();
}

dibujarCirculo(200,100);
dibujarCirculo(300,100);
dibujarCirculo(400,100);

const circulo = {
    colorLinea: "red",
    grosorLinea: 20,
    radio: 100,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x:50,
    y:400,
    dibujar: function(x,y){
        ctx.beginPath();
        ctx.strokeStyle = circulo.colorLinea;
        ctx.lineWidth = circulo.grosorLinea;
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
        ctx.ellipse(x,y,circulo.radio,circulo.radio,circulo.rotacion,circulo.anguloInicial,circulo.anguloFinal);
        ctx.stroke();

    }
}

circulo.dibujar(500,500);

window.addEventListener("mousedown", function (eventData){
    circulo.dibujar(eventData.clientX, eventData.clientY);
});