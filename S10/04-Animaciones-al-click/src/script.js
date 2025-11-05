import * as THREE from 'three'
import gsap from 'gsap'; 
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
    new THREE.SphereGeometry(0.5, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#ff6600', wireframe: true })
);

scene.add(object1);

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
camera.position.z = 3;
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
   if(currentIntersect) {
       object1.material.color = new THREE.Color("#ffff00");
       console.log("Click sobre el mesh.");

       gsap.to(object1.rotation,{
            y: object1.rotation.y + Math.PI * 4,
            duration: 1
       })
   }
});


//// Raycaster.
const raycaster = new THREE.Raycaster();
let currentIntersect = null;
const objectsToTest = [object1];

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Animate objects
    object1.position.y = Math.sin(elapsedTime * 2) * 0.1;

    // Proyecta un rayo infinito hacia la posición del mouse desde la cámara.
   raycaster.setFromCamera(mouse, camera);
   // Devuelve la información obtenida de los objetos que son atravesados por el rayo.
   const intersects = raycaster.intersectObjects(objectsToTest)
   //console.log('intersects',intersects);

   if(intersects.length) {
         if(!currentIntersect) { 
          console.log('mouse enter');
          
          // Cambiamos el color
          object1.material.color.set('#00ff00');
 
          // Animamos la escala para que crezca
          gsap.to(object1.scale, {
             x: 1.1,
             y: 1.1,
             z: 1.1,
             duration: 0.7,
             ease: 'power1.out'
          });
      }
         currentIntersect = intersects[0];
 
     } else {
         if(currentIntersect) { 
          console.log('mouse leave'); 
          
          // Restauramos el color original
          object1.material.color.set('#ff6600');
 
          // Animamos la escala de vuelta a su tamaño original
          gsap.to(object1.scale, {
             x: 1,
             y: 1,
             z: 1,
             duration: 0.3,
             ease: 'power1.out'
          });
      }
         currentIntersect = null;
    }


    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();