console.log("Atardecer");

console.log(gsap);


window.addEventListener("mousedown", function () {
        gsap.to(
            ".sol",
            {
                y:-900,
                x:innerWidth/2,
                
                duration:2, //segundos
                ease:"circ.in",
                onComplete:function() {
                    gsap.to(
                        ".sol",
                        {
                            x:6700,
                            y:80,
                            duration:4,
                            ease:"circ.out",
                        }
                    )
                }
            }
        );
});