function startAnimation() {
    const hover = document.querySelector(".btn-text");

    if (!hover) {
        requestAnimationFrame(startAnimation);
        return;
    }
    const move = document.querySelector(".cbr");
    const moveCb = document.querySelector(".cbr .coded-by");
    hover.addEventListener("mouseenter", (evt) => {
        const tl = gsap.timeline();
     tl.to(".copyright i", {
            duration: 0.3,
            rotate: 360,
            ease: "linear"
        });
        gsap.to(moveCb, {
            x: -78,
        });
        gsap.to(".rohit", {
            x: -78,
        })
    })

    hover.addEventListener("mouseleave", (e) => {
        const tl = gsap.timeline();
        tl.to(".copyright i", {
            rotate: 0,
            ease: "linear"
        });
        gsap.to(moveCb, {
            x: 0,
        });
        gsap.to(".rohit", {
            x: 0,
        })

    });
gsap.registerPlugin(ScrollTrigger) ;
gsap.to(".navbars",{
    y:20,
    width:"90%",
    borderRadius:"16px",
    background:"rgba(255, 255, 255, 0.12)",
    border:"1px solid rgba(255, 255, 255, 0.22)",
    // backdropFiltter:"blur(15px)",   
     boxShadow:" 0 8px 30px rgba(0, 0, 0, 0.12)",
   scrollTrigger:{
    trigger:".about-section",
     markers:true,
     start:"top 99%",
     end:"top 20%",
     scrub:1
   }
})
  
}
startAnimation();
 