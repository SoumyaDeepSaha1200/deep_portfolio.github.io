document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".aboutimg img", {
        duration: 1.5,
        opacity: 0,
        x: -100,
        ease: "power2.out"
    });
    gsap.from("#about", {
        duration: 1.9,
        opacity: 0,
        x: -500,
        ease: "power2.out"
    });

    gsap.from(".abouttext h1", {
        duration: 1,
        opacity: 0,
        y: -50,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".abouttext h2", {
        duration: 1,
        opacity: 0,
        y: -50,
        delay: 1,
        ease: "power2.out"
    });

    gsap.from(".abouttext p", {
        duration: 1,
        opacity: 0,
        y: -50,
        delay: 1.5,
        ease: "power2.out"
    });

    gsap.from("#aboutbtn", {
        duration: 1,
        opacity: 0,
        y: -50,
        delay: 2,
        ease: "power2.out"
    });
});