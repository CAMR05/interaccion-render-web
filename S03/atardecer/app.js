console.log("Atardecer");

console.log(gsap); 


window.addEventListener("mousedown", function () {
    
    gsap.to(".sol", {
        duration: 5, // Duración total del viaje
        ease: "power1.inOut", // El ease general es lineal, el control está en cada keyframe
        motionPath: {
           

            path: [
                 
            // Primer tramo: subir
            {x: innerWidth/2 - 200,y: -300,},
            // Segundo tramo: moverse horizontalmente
            {x: innerWidth/2, y: -300,},
            // Tercer tramo: bajar
            {x:innerWidth - 350,y: 10,}
            ]
        }
        
    });
});