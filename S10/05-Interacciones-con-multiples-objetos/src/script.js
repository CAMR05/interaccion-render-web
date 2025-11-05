import * as THREE from 'three'
import gsap from 'gsap';
var mouseOnTop = false;
var mouseOnSphere = false;
var mouseOnCone = false;
/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(3, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#ff6600', wireframe: true })
);

const object2 = new THREE.Mesh(
    new THREE.ConeGeometry(3, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#0051ff', wireframe: true })
);

object1.position.set(5, 1, -15);
object2.position.set(-2, 1, -15);

object1.name = "esfera";
object2.name = "cono";

scene.add(object1, object2);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 1;
scene.add(camera);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


//// Mouse.
const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) => {
    // Coordenadas del mouse "normalizadas".
    mouse.x = event.clientX / sizes.width * 2 - 1;
    mouse.y = - (event.clientY / sizes.height) * 2 + 1;

    //console.log(mouse);
});

//Click
window.addEventListener('click', () => {
    if (mouseOnSphere) {
        object1.material.color = new THREE.Color("#ffff00");

        console.log("Click sobre el mesh.");

        gsap.to(object1.rotation, {
            y: object1.rotation.y + Math.PI * 2,
            duration: 1
        })

    } else if (mouseOnCone) {
        object2.material.color = new THREE.Color("#ff00ea");
        gsap.to(object2.rotation, {
            y: object2.rotation.y + Math.PI * 2,
            duration: 1
        })
    }
});


//// Raycaster.
const raycaster = new THREE.Raycaster();
const objectsToTest = [object1,object2];

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Animate objects
    object1.position.y = Math.sin(elapsedTime * 2) * 0.5;
    object2.position.y = Math.cos(elapsedTime * 2) * 0.5;

    // Proyecta un rayo infinito hacia la posición del mouse desde la cámara.
    raycaster.setFromCamera(mouse, camera);
    // Devuelve la información obtenida de los objetos que son atravesados por el rayo.
    const intersects = raycaster.intersectObjects(objectsToTest)
    //console.log('intersects',intersects);

    if (intersects[0] && intersects[0].object.name ==  'esfera') {
        console.log('atravesando un objeto');
        if (mouseOnTop == false) {
            console.log('intersects',intersects);
            mouseOnTop = true;
            mouseOnSphere = true;
            console.log('el mouse atravesó el objeto por primera vez');
            object1.material.color = new THREE.Color('#00ff00');
            // Animamos la escala para que crezca
            gsap.to(object1.scale, {
                x: 1.1,
                y: 1.1,
                z: 1.1,
                duration: 0.7,
                ease: 'power1.out'
            });
        }

    }else if (intersects[0] && intersects[0].object.name ==  'cono') {
        console.log('atravesando un objeto');
        if (mouseOnTop == false) {
            console.log('intersects',intersects);
            mouseOnTop = true;
            mouseOnCone = true;
            console.log('el mouse atravesó el objeto por primera vez');

            
            object2.material.color = new THREE.Color('#ff0000');
             gsap.to(object2.scale, {
                x: 1.1,
                y: 1.1,
                z: 1.1,
                duration: 0.7,
                ease: 'power1.out'
            });
        }
    } else {
        if (mouseOnTop == true) {
            mouseOnTop = false;
            mouseOnSphere = false;
            mouseOnCone = false;
            console.log('el mouse salió, ya no está atravesando el hover');

            // Restauramos el color original
            object1.material.color = new THREE.Color('#ff6600');

            // Animamos la escala de vuelta a su tamaño original
            gsap.to(object1.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.7,
                ease: 'power1.out'
            });

            object2.material.color = new THREE.Color('#0051ff');


             gsap.to(object2.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.7,
                ease: 'power1.out'
            });
        }
    }


    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();