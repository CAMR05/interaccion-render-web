console.log('Ejercicio 02. Render Imagen 2DOMException.');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cargar imagen
var img = new Image();


// Especificar cual es la imagen
var path ="./imagenes/ejemplo.png";
img.src = path;

//Encontrar el evento de carga de la imagen
img.onload = function() {
console.log('cargó la imagen');
ctx.drawImage(img,50,30,1000,1000);
 }
//Renderizar imagen
//ctx.drawImage(img,x,y,width,height);

