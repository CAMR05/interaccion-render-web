const canvas = document.getElementById('lienzo');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);


const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 16;


//ctx.rect(x,y,width,height);
ctx.rect(canvas.width/2,canvas.height/2,300,100);


ctx.stroke();


ctx.beginPath();
ctx.strokeStyle ="#0000ff";
ctx.lineWidth = 2;
ctx.moveTo(canvas.width/2,0);
ctx.lineTo(canvas.width/2,0);
ctx.stroke();