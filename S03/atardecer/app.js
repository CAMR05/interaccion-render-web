console.log("Atardecer");

console.log(gsap); 


window.addEventListener("mousedown", function () {
        gsap.to(
            ".sol",
            {
                y:-900,
                x:innerWidth/2,
                
                duration:3, //segundos
                ease:"power1.out",
                onComplete:function() {
                    gsap.to(
                        ".sol",
                        {
                            x:6700,
                            y:80,
                            duration:3,
                            ease:"power1.in",
                        }
                    )
                }
            }
        );
});