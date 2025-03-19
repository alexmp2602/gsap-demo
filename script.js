const btn = document.getElementById("animatedBtn");

// Animación al cargar la página
gsap.from(btn, { opacity: 0, y: -50, duration: 1.2, ease: "power3.out" });

// Animación al hacer hover
btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.2, rotation: 5, backgroundColor: "#ff5722", duration: 0.3 });
});

btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, rotation: 0, backgroundColor: "#007bff", duration: 0.3 });
});

// Efecto de rebote al hacer click
btn.addEventListener("click", () => {
    gsap.to(btn, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.out"
    });

    // Pequeña vibración lateral
    gsap.to(btn, {
        x: -5,
        duration: 0.05,
        yoyo: true,
        repeat: 5,
        ease: "power1.inOut"
    });
});
