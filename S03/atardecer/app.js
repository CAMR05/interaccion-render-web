console.log("Atardecer");

console.log(gsap); 


window.addEventListener("mousedown", function () {
    const tl = gsap.timeline();
        tl.to(
            ".sol",
            {
                y:-400,
                x:innerWidth/2 - 100,
                
                duration:4, //segundos
                ease:"power1.in",
                }
        );
                    tl.to(
                        ".sol",
                        {
                            x:innerWidth - 350,
                            y:30,
                            duration:4,
                            ease:"power1.out",
                        },
                   "-=0.4" );
                
});