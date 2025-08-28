console.log("Sesión 04. Ejercicio 01: Connfiguración de Escena 3D");
console.log("THREE");

// Definir nuestro canvas
const canvas = document.getElementById("lienzo");

//Definir variables del tamaño de ventana
var width = window.innerWidth;
var height = window.innerHeight;

//Actualizamos la resolución del canvas
canvas.width = width;
canvas.height = height;

//Código para configurar la escena
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const mesh = new THREE.Mesh(
   new THREE.SphereGeometry(),
   new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true })
);

//Agregar nuestro onjeto a la escena
scene.add(mesh);

//Mover nuestro mesh en la escena
mesh.position.z = -5;

//Renderizar lo que está viendo la cámara
renderer.render(scene, camera);