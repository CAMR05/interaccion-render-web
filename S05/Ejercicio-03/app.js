console.log("Sesión 05. Ejercicio 03: Matcaps");
console.log(THREE);

//Configurar nuestro canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creamos nuestros elementos básicos:
//Escena
const scene = new THREE.Scene();

//Cámara
//const camera = new THREE.Camera(fov, aspectRatio, near, far);
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height,0.1, 1000);

//Mesh
////Geometría
//SphereGeometry(radius, radialSegments, heightSegments);
const geometry = new THREE.ConeGeometry();
////Material
const material = new THREE.
MeshNormalMaterial({
   flatShading: true,
});

///////// CONFIGURACIÓN DE MATCAPS
///////// INICIO
// Ayuda.
// Material.
const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
   // Textura URL
   './texturas/matcap1.png',
   // on Load callback
   function (texture) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
       // Mesh.
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       // 3. Poner objeto en la escena.
       scene.add(mesh);
       mesh.position.z = -4;
       // 4. Activar animación.
       animate();
   },
   // on Progress (no funciona por ahora)
   undefined,
   // on Error callback
   function (error) { console.error("Algo salio mal con la textura,", error); }
);


//////// FIN


//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);


//Dar instrucción de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);

// Tip para animar nuestro mesh:
function animate() {
   requestAnimationFrame(animate);
   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;
   renderer.render(scene, camera);
}
//animate();
