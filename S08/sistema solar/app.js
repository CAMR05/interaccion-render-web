console.log("S08. Sistema Solar");
console.log(gsap);
console.log(THREE);
gsap.registerPlugin(MotionPathPlugin);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);



camera.position.z = 25;

// Geometría para el sol. Es mejor definirla aquí.
const solGeometry = new THREE.SphereGeometry(1.5, 32, 32); 

scene.background = new THREE.Color("#25012e");

const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({ color: "#25012e" });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -6;
scene.add(plane);

const planetas = [];


const textureLoader = new THREE.TextureLoader();
let matcapSol, matcapPlanetas;
let mesh1;

console.log("Iniciando carga de la textura del sol...");

textureLoader.load(
    './texturas/matcap2.png',
    // 1. Bloque de ÉXITO para el sol
    function (texture) {
        console.log("¡ÉXITO! Textura del sol CARGADA.");
        matcapSol = new THREE.MeshMatcapMaterial({ matcap: texture });
        mesh1 = new THREE.Mesh(solGeometry, matcapSol);
        scene.add(mesh1);
        mesh1.position.set(0, 0, 0);

        console.log("Iniciando carga de la textura de los planetas...");
        textureLoader.load(
            './texturas/textura-provicional-planetas.png',
            // 2. Bloque de ÉXITO para los planetas
            function (texturePlanetas) {
                console.log("¡ÉXITO! Textura de planetas CARGADA.");
                matcapPlanetas = new THREE.MeshMatcapMaterial({ matcap: texturePlanetas });

                const numeroDePlanetas = 8;
                for (let i = 0; i < numeroDePlanetas; i++) {
                    const planetaGeometry = new THREE.SphereGeometry(Math.random() * 0.7 + 0.1, 32, 32);
                    const planeta = new THREE.Mesh(planetaGeometry, matcapPlanetas);
                    const radioOrbita = (i + 1) * 2.5 + 2;
                    const anguloInicial = Math.random() * Math.PI * 2;
                    planeta.position.x = radioOrbita * Math.cos(anguloInicial);
                    planeta.position.z = radioOrbita * Math.sin(anguloInicial);
                    planeta.userData.radioOrbita = radioOrbita;
                    planeta.userData.velocidad = (Math.random() * 0.5 + 0.2);
                    scene.add(planeta);
                    planetas.push(planeta);
                }
                
                console.log("Todo cargado. Iniciando animación...");
                animate(); // La animación solo empieza si todo lo anterior tuvo éxito.
            },
            undefined,
            // 3. Bloque de ERROR para los planetas
            function (error) {
                console.error("ERROR AL CARGAR LA TEXTURA DE LOS PLANETAS. Revisa la ruta y el nombre del archivo.", error);
            }
        );
    },
    undefined,
    // 4. Bloque de ERROR para el sol
    function (error) {
        console.error("ERROR AL CARGAR LA TEXTURA DEL SOL. ¿La ruta './texturas/matcap2.png' es correcta? ¿Estás usando Live Server?", error);
    }
);


// Renderer y el resto del código se mantienen igual...
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderer.setSize(canvas.width, canvas.height);
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
});

renderer.render(scene, camera);
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    if (mesh1) {
        mesh1.rotation.y += 0.005;
    }

    planetas.forEach(planeta => {
        planeta.rotation.y += 0.01;
        planeta.position.x = planeta.userData.radioOrbita * Math.cos(elapsedTime * planeta.userData.velocidad);
        planeta.position.z = planeta.userData.radioOrbita * Math.sin(elapsedTime * planeta.userData.velocidad);
    });

    renderer.render(scene, camera);
}
animate();