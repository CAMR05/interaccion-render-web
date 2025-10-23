console.log("S08. Sistema Solar");
        gsap.registerPlugin(MotionPathPlugin);

        // --- 1. CONFIGURACIÓN INICIAL ---
        const canvas = document.getElementById("lienzo");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);

        // MEJORA: Posición de cámara para una mejor vista
        camera.position.set(0, 20, 45); 
        camera.lookAt(0, 0, 0);

        scene.background = new THREE.Color("#130118");
        
        // El array donde guardaremos los Meshes de los planetas
        const planetas = [];

        // --- 2. DATOS DE LOS PLANETAS ---
        const datosPlanetas = [
            { nombre: 'Mercurio', textura: './texturas/texturas-sistema-solar/mercurio.jpg', tamaño: 0.38, radioOrbita: 5, velocidad: 1.6 },
            { nombre: 'Venus',    textura: './texturas/texturas-sistema-solar/venus.jpg',    tamaño: 0.95, radioOrbita: 7, velocidad: 1.2 },
            { nombre: 'Tierra',   textura: './texturas/texturas-sistema-solar/tierra.jpg',   tamaño: 1.00, radioOrbita: 9, velocidad: 1.0 },
            { nombre: 'Marte',    textura: './texturas/texturas-sistema-solar/marte.jpg',    tamaño: 0.53, radioOrbita: 11, velocidad: 0.8 },
            { nombre: 'Júpiter',  textura: './texturas/texturas-sistema-solar/jupiter.jpg',  tamaño: 3.0, radioOrbita: 15, velocidad: 0.4 },
            { nombre: 'Saturno',  textura: './texturas/texturas-sistema-solar/saturno.jpg',  tamaño: 2.5, radioOrbita: 19, velocidad: 0.3 },
            { nombre: 'Urano',    textura: './texturas/texturas-sistema-solar/urano.jpg',    tamaño: 1.5, radioOrbita: 22, velocidad: 0.2 },
            { nombre: 'Neptuno',  textura: './texturas/texturas-sistema-solar/neptuno.jpg',  tamaño: 1.4, radioOrbita: 25, velocidad: 0.15 }
        ];

        const textureLoader = new THREE.TextureLoader();
        let mesh1; // Variable para el sol

        // --- 3. CARGA DE TEXTURAS Y CREACIÓN DE OBJETOS ---
        console.log("Iniciando carga de la textura del sol...");
        textureLoader.load(
            './texturas/matcap2.png', // Textura del Sol
            function (textureSol) {
                console.log("Éxito: Textura del sol cargada.");
                const solGeometry = new THREE.SphereGeometry(2.5, 32, 32);
                const solMaterial = new THREE.MeshMatcapMaterial({ matcap: textureSol });
                mesh1 = new THREE.Mesh(solGeometry, solMaterial);
                scene.add(mesh1);

                console.log("Iniciando carga de las texturas de los planetas...");
                const rutasTexturas = datosPlanetas.map(p => p.textura);
                const promesasDeCarga = rutasTexturas.map(ruta => textureLoader.loadAsync(ruta));

                Promise.all(promesasDeCarga).then(texturasCargadas => {
                    console.log("Éxito: Todas las texturas de los planetas han sido cargadas.");

                    datosPlanetas.forEach((infoPlaneta, i) => {
                        const planetaMaterial = new THREE.MeshMatcapMaterial({
                            matcap: texturasCargadas[i]
                        });
                        const planetaGeometry = new THREE.SphereGeometry(infoPlaneta.tamaño, 32, 32);
                        const planeta = new THREE.Mesh(planetaGeometry, planetaMaterial);
                        planeta.name = infoPlaneta.nombre;

                        const radioOrbita = infoPlaneta.radioOrbita;
                        const anguloInicial = Math.random() * Math.PI * 2;
                        planeta.position.x = radioOrbita * Math.cos(anguloInicial);
                        planeta.position.z = radioOrbita * Math.sin(anguloInicial);
                        
                        planeta.userData.radioOrbita = radioOrbita;
                        planeta.userData.velocidad = infoPlaneta.velocidad;
                        
                        scene.add(planeta);
                        planetas.push(planeta);
                        
                        console.log(`Planeta ${planeta.name} creado.`);
                    });

                    console.log("Sistema solar completo. Iniciando animación.");
                    // ESTA es la llamada correcta a animate()
                    animate();

                }).catch(error => {
                    console.error("Error al cargar una o más texturas de los planetas. Revisa las rutas en la consola (Network tab).", error);
                });
            },
            undefined,
            function (error) {
                console.error("Error crítico al cargar la textura del sol.", error);
            }
        );

        // --- 4. RENDERER Y BUCLE DE ANIMACIÓN ---
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setSize(canvas.width, canvas.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            if (mesh1) {
                mesh1.rotation.y += 0.002;
            }

            planetas.forEach(planeta => {
                planeta.rotation.y += 0.01; 
                const radio = planeta.userData.radioOrbita;
                const velocidad = planeta.userData.velocidad;
                planeta.position.x = radio * Math.cos(elapsedTime * velocidad);
                planeta.position.z = radio * Math.sin(elapsedTime * velocidad);
            });

            renderer.render(scene, camera);
        }

        // --- 5. MANEJO DEL CAMBIO DE TAMAÑO DE LA VENTANA ---
        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            camera.aspect = canvas.width / canvas.height;
            camera.updateProjectionMatrix();
            
            renderer.setSize(canvas.width, canvas.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });