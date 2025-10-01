console.log("Atardecer");

console.log(gsap); 


window.addEventListener("mousedown", function () {
        gsap.to(
            ".sol",
            {
                y:-500,
                x:innerWidth/2 - 100,
                
                duration:2, //segundos
                ease:"power2.inOut",
                onComplete:function() {
                    gsap.to(
                        ".sol",
                        {
                            x:1500,
                            y:80,
                            duration:2,
                            ease:"power2.in",
                        }
                    )
                }
            }
        );
});