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


//1. Escuchar que el mouse se mueve
window.addEventListener("mousemove", function (eventData) {
    //console.log('hola X:', eventData.x)
    //console.log('hola Y:', eventData.y)

    //Limpiar canvas
    //ctx.clearRect(x,y,width,height);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //Fondo
   // ctx.beginPath();
    //ctx.fillStyle ="#ff0000";
    //ctx.rect(0,0,canvas.width,canvas.height);
    //ctx.fill();

ctx.beginPath();
for (let i = 0; i < 11; i++) {
ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();}
ctx.beginPath();
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
    ctx.ellipse(eventData.x,eventData.y,120,120,0,0,Math.PI * 2);
    
    ctx.stroke();
});

//2. Escuchar el mouse presionado
window.addEventListener("mousedown", function (eventData) {
    console.log('mouse down');
// ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#00ff00";
    ctx.beginPath();
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
    ctx.ellipse(eventData.x,eventData.y,120,120,0,0,Math.PI * 2);
    ctx.fill();
    ctx.stroke();
   
 ctx.beginPath();
    for (let i = 0; i < 11; i++) {
        ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);
        ctx.stroke();
}

});

    
   
//3. Escuchar el mouse soltado
window.addEventListener("mouseup", function (eventData) {
    console.log('mouse up');
//ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ffffffff";
    ctx.beginPath();
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
    ctx.ellipse(eventData.x,eventData.y,120,120,0,0,Math.PI * 2);
    ctx.fill();
    ctx.stroke();
     

    ctx.beginPath();
    for (let i = 0; i < 11; i++) {
        ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);

    ctx.fill();
    ctx.stroke();
    }
});



// 1. Crear referencia al botón de html
const boton = document.getElementById('boton');
console.log(boton);
//2. Agregar un event listener al botón
boton.addEventListener("mousedown", function(){
    console.log("mouse down en botón");
    //Definimos estilos
    ctx.fillStyle = "#ff6600";
    //Iniciamos trazo
    ctx.beginPath();
    //Definimos la figufra
    ctx.rect(50,100,300,50);
    //renderizamos
    ctx.fill();
})
  //2.1 en el event listener renderizar de nuevo con otro botón