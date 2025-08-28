console.log("Ejercicio 3");

console.log(gsap);


window.addEventListener("mousedown", function () {
        gsap.to(
            ".rectangulo",
            {
                x:500,
                y:500,
                duration:5, //segundos
                ease:"power1.inOut",
                onComplete:function() {
                    gsap.to(
                        ".rectangulo",
                        {
                            x:0,
                            y:1000,
                            duration:5,
                            ease:"power1.inOut",
                        }
                    )
            }
        }
    );
});