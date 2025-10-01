console.log("Atardecer");

console.log(gsap); 


window.addEventListener("mousedown", function () {
    const tl = gsap.timeline();
        tl.to(
            ".sol",
            {
                y:-500,
                x:innerWidth/2 - 100,
                
                duration:3, //segundos
                ease:"power2.inOut",
                }
        );
                    tl.to(
                        ".sol",
                        {
                            x:1500,
                            y:80,
                            duration:3,
                            ease:"power2.inOut",
                        },
                   "-=0.7" );
                
});